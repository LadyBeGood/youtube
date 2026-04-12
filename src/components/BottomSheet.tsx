import { useEffect, useLayoutEffect, useRef, useState, createContext, useContext } from "react";

// type BottomSheetContextType = {
//     onBottomSheetClose: () => void;
// }

// const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

// export function useBottomSheet() {
//     const context = useContext(BottomSheetContext);
//     if (!context) {
//         throw new Error("useBottomSheet must be used within a BottomSheet");
//     }
//     return context;
// }

/**
 * This is a hand crafted Bottom sheet with no dependencies tailored specifically for this project.  
 * 
 * **Features**:
 * - It works on all touch, mouse and trackpad devices.
 * - Customizable snap points (Low, Middle, High).
 * - GPU-accelerated transforms only, no layout thrashing.
 */
const BottomSheet = ({ isBottomSheetOpen = false, onBottomSheetClose, children, low = 0, middle = 50, high = 100 }) => {
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

    /**********************************
     * Effects
     **********************************/
    // Measure the sheet height after it renders
    useLayoutEffect(() => {
        if (bottomSheetRef.current !== null) {
            const height = bottomSheetRef.current.getBoundingClientRect().height;
            setBottomSheetHeight(height);
        }
    }, [children]); // Re-run if content changes
   
    
    useEffect(() => {
        if (isBottomSheetOpen) {
            // When the prop opens the sheet, reset translation to 0 (top)
            setBottomSheetTranslateY(middle);
            setBottomSheetOldTranslateY(middle);

            if (overlayRef.current) overlayRef.current.style.height = "100%";
            document.body.style.overflowY = "hidden";

        } else {
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
        // When the bottom sheet is fullscreen, turn off overscroll behaviour, otherwise the page will try to "pull to refresh" in mobile browsers
        if (isFullscreen) {
            document.body.style.overscrollBehaviorY = "none";
            document.documentElement.style.overscrollBehaviorY = "none";
        } else {
            document.body.style.overscrollBehaviorY = "auto";
            document.documentElement.style.overscrollBehaviorY = "auto";
        }
    }, [isFullscreen])


    useEffect(() => {
        if (isPointerDown) {
            if (bottomSheetRef.current) bottomSheetRef.current.style.cursor = "grabbing";
        } else {
            if (bottomSheetRef.current) bottomSheetRef.current.style.cursor = "grab";
        }
    }, [isPointerDown])

    /**********************************
     * Handlers
     **********************************/
    function handleDragStart(pageY: number) {
        setIsPointerDown(true);
        setStartY(pageY);
    }

    function handleDragMove(pageY: number) {
        // If the user has not tapped on the bottom sheet, no need to do any calculations

        if (!isPointerDown) return;
        if (isFullscreen && bottomSheetContentRef.current?.scrollTop !== 0) return;
        setDidDrag(true);
        const currentY = pageY;
        const dragDistance = currentY - startY;

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
        console.log("Drag ENd");
        setIsPointerDown(false);

        let snappedBottomSheetTranslateY = middle;
        if (bottomSheetTranslateY > middle + SNAP_THRESHOLD) {
            onBottomSheetClose();
        } else if (bottomSheetTranslateY > high + SNAP_THRESHOLD && isFullscreen) {
            setIsFullscreen(false)
            snappedBottomSheetTranslateY = middle
        } else if (bottomSheetTranslateY < middle - SNAP_THRESHOLD) {
            snappedBottomSheetTranslateY = high
            setIsFullscreen(true)
        }

        setBottomSheetTranslateY(snappedBottomSheetTranslateY);
        setBottomSheetOldTranslateY(snappedBottomSheetTranslateY);
    }



    return (
        <>
            {/* Overlay */}
            <div 
                ref={overlayRef}
                className={`transition-opacity duration-${ANIMATION_DURATION} fixed opacity-0 bottom-0 left-0 right-0 bg-black/75 z-998`}
                style={{ opacity: isBottomSheetOpen ? "70%" : "0" }}
                onClick={onBottomSheetClose}
            />


            {/* Bottom Sheet */}
            <div
                ref={bottomSheetRef}

                className={`pb-2 px-2 touch-none select-none max-h-[100svh] fixed bottom-0 left-0 right-0 z-999 transition-transform duration-${ANIMATION_DURATION}`}
                style={{
                    transform: `translateY(${isBottomSheetOpen ? String(bottomSheetTranslateY) : "100"}%)`,
                    transitionProperty: isPointerDown ? "none" : "transform",
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
                    if ((event.target as HTMLElement).tagName === "BUTTON") {
                        setCurrentButton(event.target as HTMLButtonElement)
                    }
                    event.currentTarget.setPointerCapture(event.pointerId)
                }}

                onPointerUp={(event) => {
                    event.currentTarget.releasePointerCapture(event.pointerId)
                    
                    if (!didDrag && currentButton !== undefined) {
                        currentButton.click();
                        console.log("button pressed");
                        setCurrentButton(undefined);
                    }

                    setDidDrag(false);
                }}
            >

                {/* Content */}
                <div 
                    ref={bottomSheetContentRef}
                    className="bg-[#212121] py-2 rounded-xl"
                    style={{ 
                        // borderTopLeftRadius: isFullscreen ? "0" : "20px", 
                        // borderTopRightRadius: isFullscreen ? "0" : "20px",
                        // overflow: isFullscreen ? "auto" : "hidden"
                    }}
                >
                    {/* Drag Handle */}
                    <div className="flex h-full pb-2 justify-center">
                        <div className="h-1 w-10 rounded-full bg-[#606060]" />
                    </div>

                    {children}
                </div>
            </div>
        </>
    )
}

export default BottomSheet

