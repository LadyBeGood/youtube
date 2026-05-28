import { useEffect, useRef, useState, useCallback } from "react";
import { type ReactNode, type TouchEvent, type MouseEvent } from "react";



export type Tab = {
    label: string;
    content?: ReactNode;
}

type ScrollableTabsProps = {
    tabs: Tab[];
    defaultIndex?: number;
    onChange?: (index: number) => void;
}

// tan(30deg) = 0.577...
// Used to classify if the moving touch gesture was horizontal or vertical
const TAN_30 = Math.tan(30 * (Math.PI / 180)); 

export default function ScrollableTabs({ tabs, defaultIndex = 0, onChange }: ScrollableTabsProps) {
    /**********************************
     * State
     **********************************/
    // Index of current active tab
    const [active, setActive] = useState(defaultIndex);

    // Position and width of the sliding underline indicator beneath the active tab
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });



    /**********************************
     * Refs
     **********************************/
    const stripRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // Mutable drag state for mouse-drag scrolling on the tab strip.
    // Stored in a ref (not state) so updates never trigger re-renders.
    // const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

    // Mutable swipe state for touch-swipe navigation on the panel area.
    const swipe = useRef({ 
        startX: 0, 
        startY: 0,
        startTime: 0, 
        fromIndex: 0, 
        panelOffsetWidth: 0,
        direction: "undecided" as "undecided" | "horizontal" | "vertical",
    });



    /**********************************
     * Callbacks
     **********************************/
    // Move the sliding underline to sit beneath the active/selected `btn`
    const moveIndicator = useCallback((btn: HTMLButtonElement) => {
        setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
    }, []);

    const activate = useCallback(
        (index: number, scrollIntoView: boolean) => {
            setActive(index);
            onChange?.(index);
            const btn = tabRefs.current[index];
            if (btn) {
                moveIndicator(btn);
                if (scrollIntoView)
                    btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
            }
            if (trackRef.current) {
                trackRef.current.style.transition = "";
                trackRef.current.style.transform = `translateX(-${index * 100}%)`;
            }
        },
        [moveIndicator, onChange]
    );



    /**********************************
     * Effects
     **********************************/
    // Position the indicator on the first render (layout hasn't happened yet at
    // useState initialisation time, so offsetLeft/offsetWidth would be 0)
    useEffect(() => {
        activate(active, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // Re-measure the indicator whenever the viewport is resized, because
    // tab button positions can shift
    useEffect(() => {
        const handleResize = () => {
            const btn = tabRefs.current[active];
            if (btn) moveIndicator(btn);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [active, moveIndicator]);



    /**********************************
     * Handlers
     **********************************/
    // function onStripMouseDown(e: MouseEvent<HTMLDivElement>) {
    //     drag.current = {
    //         active: true,
    //         startX: e.pageX - (stripRef.current?.offsetLeft ?? 0),
    //         scrollLeft: stripRef.current?.scrollLeft ?? 0,
    //         moved: false,
    //     };
    // }

    // function onStripMouseMove(e: MouseEvent<HTMLDivElement>) {
    //     if (!drag.current.active || !stripRef.current) return;
    //     const dx = e.pageX - (stripRef.current.offsetLeft ?? 0) - drag.current.startX;
    //     if (Math.abs(dx) > 4) drag.current.moved = true;
    //     stripRef.current.scrollLeft = drag.current.scrollLeft - dx;
    // }

    // function onStripMouseUp() {
    //     drag.current.active = false;
    // }

    // Suppress click on tabs when the strip was dragged
    function onTabClick(e: MouseEvent<HTMLButtonElement>, index: number) {
        // if (drag.current.moved) { 
        //     e.preventDefault(); 
        //     return; 
        // }

        activate(index, true);
    }

    
    function onPanelTouchStart(e: TouchEvent<HTMLDivElement>) {
        swipe.current = {
            startX: e.touches[0].clientX,
            startY: e.touches[0].clientY,
            startTime: Date.now(),
            fromIndex: active,
            panelOffsetWidth: panelsRef.current?.offsetWidth ?? 0,
            direction: "undecided",
        };
        // Don't disable transition yet — wait until we know it's a horizontal swipe
        // if (trackRef.current) trackRef.current.style.transition = "none";
    }

    function onPanelTouchMove(e: TouchEvent<HTMLDivElement>) {
        const { 
            startX, 
            startY, 
            fromIndex, 
            panelOffsetWidth: panelW,
            direction 
        } = swipe.current;

        if (!trackRef.current || !panelW) return;

        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;

        // Find the direction of touch move
        if (direction === "undecided") {
            // Ignore tiny movements
            if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;

            // if |dy| < |dx| * tan(30deg) then angle from horizontal < 30deg
            if (Math.abs(dy) < Math.abs(dx) * TAN_30) {
                swipe.current.direction = "horizontal";

                // Disable CSS transition so the sliding indicator follows 
                // the finger in real time
                if (trackRef.current) trackRef.current.style.transition = "none";
            } else {
                swipe.current.direction = "vertical";
                // Restore transition so snapping still works if needed, and let native scroll proceed
                if (trackRef.current) trackRef.current.style.transition = "";
                return;
            }
        }

        // Return if this gesture was found to be a vertical scroll
        if (swipe.current.direction !== "horizontal") return;

        // Suppress native scroll while we're handling the horizontal swipe
        // e.preventDefault();

        // Clamp dx so the track can't be dragged past either boundary:
        // - on the first tab, block dragging right (dx > 0)
        // - on the last tab, block dragging left  (dx < 0)
        const clampedDx = Math.max(
            fromIndex === tabs.length - 1 ? 0 : -Infinity,
            Math.min(fromIndex === 0 ? 0 : Infinity, dx)
        );


        const base = fromIndex * panelW;
        trackRef.current.style.transform = `translateX(-${base - clampedDx}px)`;
    }

    function onPanelTouchEnd(e: TouchEvent<HTMLDivElement>) {
        // A vertical scroll gesture (or one that never left "undecided") should
        // never trigger a tab change, because user is trying to scroll
        if (swipe.current.direction !== "horizontal") return;
        
        const { startX, startTime, fromIndex, panelOffsetWidth: panelW } = swipe.current;
        const dx = e.changedTouches[0].clientX - startX;
        const dt = Date.now() - startTime;

        // Commit if the finger travelled more than 30 % of the panel width, OR
        // if it was a fast fling (>50 px in under 300 ms)
        const threshold = panelW * 0.2;
        const isFling = Math.abs(dx) > 30 && dt < 300;

        if ((dx < -threshold || (isFling && dx < 0)) && fromIndex < tabs.length - 1) {
            // Go to next tab
            activate(fromIndex + 1, true);
        } else if ((dx > threshold || (isFling && dx > 0)) && fromIndex > 0) {
            // Go to previous tab
            activate(fromIndex - 1, true);
        } else {
            // Snap back to current tab
            activate(fromIndex, false);
        }
    }



    return (
        <div className="w-[100vw]">
            {/* Tab strip */}
            <div className="border-b h-10 bg-black z-1 border-white/20  w-[100vw] overflow-auto no-scrollbar sticky top-0">
                <div
                    ref={stripRef}
                    role="tablist"
                    className="flex select-none cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" as never }}
                    // onMouseDown={onStripMouseDown}
                    // onMouseMove={onStripMouseMove}
                    // onMouseUp={onStripMouseUp}
                    // onMouseLeave={onStripMouseUp}
                >
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            ref={(el) => { tabRefs.current[i] = el; }}
                            role="tab"
                            onClick={(e) => onTabClick(e, i)}
                            className={[
                                "flex-shrink-0 h-10 px-5",
                                "text-sm font-medium whitespace-nowrap",
                                "hover:bg-white/15",
                                i === active
                                    ? "text-gray-100"
                                    : "text-gray-400",
                            ].join(" ")}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Sliding indicator */}
                <span
                    className="absolute bottom-0 h-[2px]  bg-gray-900 dark:bg-gray-100 transition-[left,width] duration-[250ms] ease-[cubic-bezier(.4,0,.2,1)]"
                    style={{ left: indicator.left, width: indicator.width }}
                />
            </div>

            {/* Panels */}
            <div
                ref={panelsRef}
                className="relative overflow-hidden"
                onTouchStart={onPanelTouchStart}
                onTouchMove={onPanelTouchMove}
                onTouchEnd={onPanelTouchEnd}
            >
                <div
                    ref={trackRef}
                    className="flex transition-transform duration-250 ease-[cubic-bezier(.4,0,.2,1)]"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                >
                    {tabs.map((tab, i) => (
                        
                        <div
                            key={i}

                            // Minimum height = 100svh - Height of TopBar - Height of BottomBar - Height of Tab strip 
                            className="flex-shrink-0 w-full min-h-[calc(100svh-48px-48px-40px)]"
                            
                            // Ensure that scroll length of each tab is independent of each other
                            style={{ height: i === active ? "auto" : 0, overflow: "hidden" }}
                        >
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
