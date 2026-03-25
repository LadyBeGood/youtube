import { useEffect, useRef, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

/*
 * Dont even try to refactor or cleanup this code, I originally wrote this code for vanilla html, css and js
 * many years ago and refactored it to react since this is the only bottomsheet that actually functions. It takes 
 * me hours to fix a bug; it will take you days. Leave it as it is. This code runs, that too is your fate.
 */


type BottomSheetProps = {
    children?: ReactNode
    isOpen: boolean
    middleProp?: number
    lowProp?: number
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const BottomSheet = ({ children, middleProp, lowProp, isOpen, setIsOpen }: BottomSheetProps) => {
    const contentRef = useRef<HTMLDivElement>(null)

    const [low, setLow] = useState(lowProp ?? -105)
    const [middle, setMiddle] = useState(middleProp ?? 0)
    const high: number = 0

    const [isSheetVisible, setIsSheetVisible] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const [startY, setStartY] = useState(-10)
    const [startBottom, setStartBottom] = useState(0)

    const [sheetBottom, setSheetBottom] = useState(-100)

    const [contentOverflow, setContentOverflow] = useState("hidden")
    const [contentBorderRadius, setContentBorderRadius] = useState("20px")
    const [overlayHeight, setOverlayHeight] = useState(0)
    const [overlayOpacity, setOverlayOpacity] = useState(0)

    // calculate metrics based on content height
    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = (contentRef.current.clientHeight + 9) * 100 / window.innerHeight

            setLow(-contentHeight) // fully hidden
            // half-open (you can customize with % attribute if needed)
        }
    }, [isOpen])

    const dragStart = (event: React.PointerEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (isSheetVisible) {
            setIsDragging(true)

            if ("touches" in event) {
                setStartY(event.touches[0].pageY)
            } else {
                setStartY(event.clientY)
            }

            setStartBottom(sheetBottom)
        }
    }

    const dragging = (event: React.PointerEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (isSheetVisible && isDragging && contentRef.current && contentRef.current.scrollTop === 0) {

            let delta = 0
            if ("touches" in event) {
                delta = startY - event.touches[0].pageY
            } else {
                delta = startY - event.clientY
            }

            const newBottom = startBottom + (delta / window.innerHeight) * 100
            if (newBottom >= low && newBottom <= high) {
                setSheetBottom(newBottom)
            }
        }
    }

    const dragEnd = () => {
        if (isSheetVisible) {
            setIsDragging(false)

            console.log(sheetBottom, isFullscreen)
            if (sheetBottom < middle - 5)
                setIsOpen(false);
            else if (sheetBottom < high - 5 && isFullscreen)
                setSheetBottom(middle);
            else if (sheetBottom > middle + 5)
                setSheetBottom(high);
            else
                setSheetBottom(middle);
        }
    }

    useEffect(() => {

        if (contentRef.current) {
            const contentHeight = (contentRef.current.clientHeight + 9) * 100 / window.innerHeight

            // replicate data attribute logic
            const calculatedLow = lowProp !== undefined
                ? -contentHeight + (lowProp / 100) * contentHeight
                : -contentHeight

            const calculatedMiddle = middleProp !== undefined
                ? -contentHeight + (middleProp / 100) * contentHeight
                : 0

            setLow(calculatedLow)
            setMiddle(calculatedMiddle)

        }

        if (isOpen) {
            setSheetBottom(middle)
            if (contentRef.current) contentRef.current.scrollTop = 0
            setOverlayHeight(100)
            setOverlayOpacity(1)
            setIsSheetVisible(true)
        } else {
            setSheetBottom(low)
            setOverlayOpacity(0)
            setTimeout(() => setOverlayHeight(0), 200)
            setIsSheetVisible(false)
        }
    }, [isOpen, middleProp, lowProp])

    useEffect(() => {
        if (sheetBottom === high) {
            setIsFullscreen(true)
            setContentOverflow("auto")
            setContentBorderRadius("0")
        }

        if (sheetBottom < high) {
            setContentOverflow("hidden")
        }

        if (sheetBottom < middle + 1) {
            setIsFullscreen(false)
            setContentBorderRadius("20px")
        }
    }, [sheetBottom])

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed top-0 left-0 w-full z-40 bg-[rgba(0,0,0,0.7)] transition-opacity duration-200"
                onClick={() => setIsOpen(false)}
                style={{ height: `${overlayHeight}vh`, opacity: overlayOpacity }}
            ></div>

            {/* BottomSheet */}
            <div
                className="fixed left-0 right-0 max-h-[calc(100svh+9px)] z-50 cursor-grab flex flex-col gap-[5px]"
                onPointerDown={dragStart}
                onPointerMove={dragging}
                onPointerUp={dragEnd}
                onTouchStart={dragStart}
                onTouchMove={dragging}
                onTouchEnd={dragEnd}
                style={{
                    bottom: `${sheetBottom}vh`,
                    transition: isDragging ? "none" : "all 0.2s ease-out",

                }}
            >
                {/* Bar */}
                <div className="grid place-items-center">
                    <div className="h-1 w-12 bg-stone-500 rounded-full"></div>
                </div>

                {/* Contents */}
                <div
                    ref={contentRef}
                    className="max-h-svh transition-[border-radius] duration-200 ease-out bg-sky-700 rounded-t-[20px]"
                    style={{
                        overflow: contentOverflow,
                        borderTopLeftRadius: contentBorderRadius,
                        borderTopRightRadius: contentBorderRadius,
                        userSelect: "none"
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default BottomSheet

