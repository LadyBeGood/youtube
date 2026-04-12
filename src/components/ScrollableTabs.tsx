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

export default function ScrollableTabs({ tabs, defaultIndex = 0, onChange }: ScrollableTabsProps) {
    /**********************************
     * State
     **********************************/
    const [active, setActive] = useState(defaultIndex);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });



    /**********************************
     * Refs
     **********************************/
    const stripRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // drag-scroll state (tab strip, mouse only)
    const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

    // swipe state (panel area, touch only)
    const swipe = useRef({ startX: 0, startTime: 0, fromIndex: 0, panelW: 0 });



    /**********************************
     * Callbacks
     **********************************/
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
    // Set indicator on first render and on resize
    useEffect(() => {
        activate(active, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
    function onStripMouseDown(e: MouseEvent<HTMLDivElement>) {
        drag.current = {
            active: true,
            startX: e.pageX - (stripRef.current?.offsetLeft ?? 0),
            scrollLeft: stripRef.current?.scrollLeft ?? 0,
            moved: false,
        };
    }

    function onStripMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!drag.current.active || !stripRef.current) return;
        const dx = e.pageX - (stripRef.current.offsetLeft ?? 0) - drag.current.startX;
        if (Math.abs(dx) > 4) drag.current.moved = true;
        stripRef.current.scrollLeft = drag.current.scrollLeft - dx;
    }

    function onStripMouseUp() {
        drag.current.active = false;
    }

    // Suppress click on tabs when the strip was dragged
    function onTabClick(e: MouseEvent<HTMLButtonElement>, index: number) {
        if (drag.current.moved) { e.preventDefault(); return; }
        activate(index, true);
    }

    
    function onPanelTouchStart(e: TouchEvent<HTMLDivElement>) {
        swipe.current = {
            startX: e.touches[0].clientX,
            startTime: Date.now(),
            fromIndex: active,
            panelW: panelsRef.current?.offsetWidth ?? 0,
        };
        if (trackRef.current) trackRef.current.style.transition = "none";
    }

    function onPanelTouchMove(e: TouchEvent<HTMLDivElement>) {
        const { startX, fromIndex, panelW } = swipe.current;
        if (!trackRef.current || !panelW) return;
        const dx = e.touches[0].clientX - startX;
        const base = fromIndex * panelW;
        trackRef.current.style.transform = `translateX(-${base - dx}px)`;
    }

    function onPanelTouchEnd(e: TouchEvent<HTMLDivElement>) {
        const { startX, startTime, fromIndex, panelW } = swipe.current;
        const dx = e.changedTouches[0].clientX - startX;
        const dt = Date.now() - startTime;
        const threshold = panelW * 0.3;
        const isFling = Math.abs(dx) > 50 && dt < 300;

        if ((dx < -threshold || (isFling && dx < 0)) && fromIndex < tabs.length - 1) {
            activate(fromIndex + 1, true);
        } else if ((dx > threshold || (isFling && dx > 0)) && fromIndex > 0) {
            activate(fromIndex - 1, true);
        } else {
            // snap back
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
                    onMouseDown={onStripMouseDown}
                    onMouseMove={onStripMouseMove}
                    onMouseUp={onStripMouseUp}
                    onMouseLeave={onStripMouseUp}
                >
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            ref={(el) => { tabRefs.current[i] = el; }}
                            role="tab"
                            aria-selected={i === active}
                            onClick={(e) => onTabClick(e, i)}
                            className={[
                                "flex-shrink-0 h-10 px-5 border-none",
                                "text-sm font-medium whitespace-nowrap",
                                "hover:bg-white/15",
                                i === active
                                    ? "text-gray-900 dark:text-gray-100"
                                    : "text-gray-500 dark:text-gray-400",
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
