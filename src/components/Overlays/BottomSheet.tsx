import { useEffect, useLayoutEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";

type BottomSheetProps = {
    type?: number, 
    isBottomSheetOpen: boolean, 
    overlay?: boolean, 
    onBottomSheetClose: () => void, 
    children: ReactNode, 
    low?: number, 
    middle?: number, 
    high?: number, 
    height?: string
}

/**
 * This is a hand crafted Bottom sheet with no dependencies tailored specifically for this project.  
 * 
 * **Features**:
 * - It works on all touch, mouse and trackpad devices.
 * - Customizable snap points (Low, Middle, High).
 * - GPU-accelerated transforms only, no layout thrashing.
 */
function BottomSheet({ 
    type = 1, 
    isBottomSheetOpen = false, 
    overlay = true, 
    onBottomSheetClose, 
    children, 
    low = 0, 
    middle = 50, 
    high = 100, 
    height = "" 
}: BottomSheetProps) {
    
    console.log("bottomsheet");
    /**********************************
     * Constants
     **********************************/
    // Snap points
    low    = 100 - low;
    middle = 100 - middle;
    high   = 100 - high;

    // In percentage
    // Used for snapping the bottom-sheet translate value after the drag is released.
    const SNAP_THRESHOLD = 5;

    // Animation duration in milliseconds
    const ANIMATION_DURATION = 250;



    /**********************************
     * Refs
     **********************************/
    const bottomSheetRef = useRef<HTMLDivElement>(null);
    const bottomSheetContentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);


    /**********************************
     * State
     **********************************/
    const [isFullscreen, setIsFullscreen] = useState(false);
    
    // In pixels
    const [bottomSheetHeight, setBottomSheetHeight] = useState(0);

    // Did the user tap of the bottom sheet or not.
    const [isPointerDown, setIsPointerDown] = useState(false);

    // This stores the Y coordinate where the finger/pointer touched
    const [startY, setStartY] = useState(0);

    // In percentage
    const [oldBottomSheetTranslateY, setBottomSheetOldTranslateY] = useState(middle);

    // In percentage
    const [bottomSheetTranslateY, setBottomSheetTranslateY] = useState(100);

    const [didDrag, setDidDrag] = useState(false);
    const [currentButton, setCurrentButton] = useState<undefined | HTMLButtonElement>(undefined)


    const [pointerDownEventTarget, setIsPointerDownEventTarget] = useState<undefined | HTMLElement>(undefined)
    const [pointerId, setPointerId] = useState(-1)

    /**********************************
     * Effects
     **********************************/
    // Measure the sheet height after it renders
    useLayoutEffect(() => {
        console.log("children effect")
        if (bottomSheetRef.current !== null) {
            console.log("children effect if")
            const height = bottomSheetRef.current.getBoundingClientRect().height;
            setBottomSheetHeight(height);
        }
    }, [children]); // Re-run if content changes
   
    
    useEffect(() => {
        console.log("isBottomSheetOpen Effect");
        
        if (isBottomSheetOpen) {
            console.log("isBottomSheetOpen Effect if 1");
            // When the prop opens the sheet, reset translation to 0 (top)
            setBottomSheetTranslateY(middle);
            setBottomSheetOldTranslateY(middle);
            
            if (overlayRef.current) overlayRef.current.style.height = "100%";
            document.body.style.overflowY = "hidden";
            
        } else {
            console.log("isBottomSheetOpen Effect if 2");
            // When closed, you can keep it at 0 because the CSS 
            // transform logic handles the 100% slide down
            setBottomSheetTranslateY(100);
            
            setTimeout(() => {
                if (overlayRef.current) overlayRef.current.style.height = "0";
            }, ANIMATION_DURATION);
            document.body.style.overflowY = "auto";
        }
    }, [isBottomSheetOpen])


    useEffect(() => {
        console.log("fullscreen Effect");
        
        // When the bottom sheet is fullscreen, turn off overscroll behaviour, otherwise the page will try to "pull to refresh" in mobile browsers
        if (isFullscreen) {
            console.log("fullscreen Effect if 1");
            document.body.style.overscrollBehaviorY = "none";
            document.documentElement.style.overscrollBehaviorY = "none";
        } else {
            console.log("fullscreen Effect if 2");
            document.body.style.overscrollBehaviorY = "auto";
            document.documentElement.style.overscrollBehaviorY = "auto";
        }
    }, [isFullscreen])


    useEffect(() => {
        console.log("isPointerDown Effect");
        
        if (isPointerDown) {
            console.log("isPointerDown Effect if 1");
            if (bottomSheetRef.current) bottomSheetRef.current.style.cursor = "grabbing";
        } else {
            console.log("isPointerDown Effect if 2");
            if (bottomSheetRef.current) bottomSheetRef.current.style.cursor = "grab";
        }
    }, [isPointerDown])

    /**********************************
     * Handlers
     **********************************/
    function handleDragStart(pageY: number) {
        console.log("Drag start");

        setIsPointerDown(true);
        setStartY(pageY);
    }

    function handleDragMove(pageY: number) {
        // If the user has not tapped on the bottom sheet, no need to do any calculations
        console.log("Drag move");
        if (!isPointerDown) return;
        console.log("Drag move 2");
        if (isFullscreen && bottomSheetContentRef.current?.scrollTop !== 0) return;
        console.log("Drag move 3");
        setDidDrag(true);
        const currentY = pageY;
        console.log("Drag move 4");
        const dragDistance = currentY - startY;
        console.log("Drag move 5");

        if (Math.abs(dragDistance) > 5 && pointerDownEventTarget !== undefined) {
            pointerDownEventTarget.setPointerCapture(pointerId);
            setIsPointerDownEventTarget(undefined);
        }

        const newBottomSheetTranslateY = oldBottomSheetTranslateY + (dragDistance / bottomSheetHeight) * 100;
        // console.log({ oldBottomSheetTranslateY, dragDistance, newBottomSheetTranslateY, scroll: bottomSheetContentRef.current?.scrollTop! })
        if (newBottomSheetTranslateY <= 100 && newBottomSheetTranslateY >= 0) {
            // console.log("here")
            setBottomSheetTranslateY(newBottomSheetTranslateY);
        }
    }

    function handleDragEnd() {
        // If the user started their tab on some other element but ended their tap on the bottom-sheet, then return immediately
        if (!isPointerDown) return;
        // console.log({middle, high, low, bottomSheetTranslateY});
        console.log("Drag end");
        setIsPointerDown(false);
        
        let snappedBottomSheetTranslateY = middle;
        if (bottomSheetTranslateY > middle + SNAP_THRESHOLD) {
            console.log("Drag end if 1") ;
            onBottomSheetClose();
        } else if (bottomSheetTranslateY > high + SNAP_THRESHOLD && isFullscreen) {
            console.log("Drag end if 2") ;
            setIsFullscreen(false)
            snappedBottomSheetTranslateY = middle
        } else if (bottomSheetTranslateY < middle - SNAP_THRESHOLD) {
            console.log("Drag end if 3") ;
            snappedBottomSheetTranslateY = high
            setIsFullscreen(true)
        }

        console.log("Drag end 2");
        setBottomSheetTranslateY(snappedBottomSheetTranslateY);
        setBottomSheetOldTranslateY(snappedBottomSheetTranslateY);
        
        console.log("Drag end end");
    }


    console.log("bottomsheet end");

    function debug(x) {
        console.log(x);
        return x;
    }

    return (
        <>
            {/* Overlay */}
            {overlay &&
                <div
                    ref={overlayRef}
                    className={`transition-opacity duration-${ANIMATION_DURATION} fixed opacity-0 bottom-0 left-0 right-0 bg-black/75 z-998`}
                    style={{ opacity: isBottomSheetOpen ? "70%" : "0" }}
                    onClick={onBottomSheetClose}
                />
            }
            


            {/* Bottom Sheet */}
            <div
                ref={bottomSheetRef}

                className={debug(`touch-none select-none max-h-[100svh] fixed bottom-0 left-0 right-0 z-999 transition-transform duration-${ANIMATION_DURATION} ` + (type === 1 ? `pb-2 px-2` : "bg-black"))}
                style={{
                    transform: `translateY(${isBottomSheetOpen ? String(bottomSheetTranslateY) : "100"}%)`,
                    transitionProperty: isPointerDown ? "none" : "transform",
                    height: height,
                }}
                
                // For touch devices
                onTouchStart={(event) => handleDragStart(event.touches[0].pageY)}
                onTouchMove={(event) => handleDragMove(event.touches[0].pageY)}
                onTouchEnd={handleDragEnd}
                
                // For mouse and trackpad devices
                onMouseDown={(event) => handleDragStart(event.pageY)}
                onMouseMove={(event) => handleDragMove(event.pageY)}
                onMouseUp={handleDragEnd}

                // Pointer Capture ensures mouse/trackpad events stay locked to this element
                // even if the cursor moves outside the viewport during a drag.
                onPointerDown={(event) => {
                    console.log("pointer down")
                    
                    // Ignore micro-movements (< 5px) to distinguish between a tap and a drag.
                    // This prevents pointer capture from hijacking click events intended for child elements.
                    setIsPointerDownEventTarget(event.currentTarget);
                    setPointerId(event.pointerId)
                }}

                onPointerUp={(event) => {
                    console.log("pointer up")
                    event.currentTarget.releasePointerCapture(event.pointerId)
                }}
            >

                {/* Content */}
                <div 
                    ref={bottomSheetContentRef}
                    className={type === 1 ? "bg-[#212121] pb-2 rounded-xl relative" : "h-full grid grid-rows-[auto_1fr]"}
                >
                    {/* Drag Handle */}
                    <div className="grid place-items-center h-5">
                        <div className="h-1 w-10 rounded-full bg-[#606060]" />
                    </div>

                    <div className="overflow-hidden">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomSheet

