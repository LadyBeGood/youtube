import { use, useCallback, useEffect, useRef, useState, type ChangeEvent } from "react";
import Short from "../components/Players/ShortPlayer";


export default function Shorts() {
    const [progress, setProgress] = useState(0);
    const [showSeekBar, setShowSeekBar] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true); // global mute state

    /*=======================================*/
    /* Refs                                  */
    /*=======================================*/
    // Keep a ref to every video element
    const videoEls = useRef<(HTMLVideoElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);


    const registerVideo = useCallback((index: number) => {
        return (el: HTMLVideoElement | null) => {
            videoEls.current[index] = el;
        };
    }, []);


    // IntersectionObserver → which short is currently in view
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                        const index = Number(entry.target.getAttribute("data-index"));
                        if (!Number.isNaN(index)) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                root: container,
                threshold: 0.6,
            }
        );

        const children = container.querySelectorAll("[data-index]");
        children.forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, []);


    useEffect(() => {
        setShowSeekBar(false);
    }, [activeIndex]);

    // Seek the *active* video
    function handleSeek(event: ChangeEvent<HTMLInputElement>) {
        const video = videoEls.current[activeIndex];
        if (!video) return;

        const duration = video.duration || 0;
        const seekTo = (Number(event.target.value) / 100) * duration;
        video.currentTime = seekTo;
        setProgress(Number(event.target.value));
    }

    function handleTimeUpdate() {
        const video = videoEls.current[activeIndex];
        if (!video || !video.duration) return;

        setProgress((video.currentTime / video.duration) * 100);
    }

    function handleUnmute() {
        setIsMuted(false);
    }


    return (
        <main className="relative h-full">
            {/*
              * This component use CSS's inbuilt scroll snapping feature for snapping. CSS's scroll snap's duration or 
              * timing function is not customisable and depends entirely on the browser and OS maybe, but I
              * still use it instead of rolling out my own because I am, well, lazy. For now atleast.
              */}
            <div 
                ref={containerRef}
                className="overflow-auto no-scrollbar h-full snap-y snap-mandatory"
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} data-index={i} className="h-full">
                        <Short
                            isActive={i === activeIndex}
                            isMuted={isMuted}
                            onUnmute={handleUnmute}
                            setShowSeekBar={setShowSeekBar}
                            registerVideo={registerVideo(i)}
                            handleTimeUpdate={handleTimeUpdate}
                        />
                    </div>
                ))}
            </div>

            <div 
                className="relative transition-opacity" 
                style={{ opacity: showSeekBar ? 1 : 0, pointerEvents: showSeekBar ? "auto" : "none" }}
            >
                <div className="absolute bottom-0 left-0 right-0 z-30 h-5 flex items-center translate-y-1/2">
                    <div className="absolute left-0 right-0 h-1 rounded-full bg-[color-mix(in_oklab,var(--cool-gray)_40%,transparent)]">
                        <div className="h-full rounded-full bg-red-500" style={{ width: `${progress}%` }} />
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        step={0.1}
                        value={Number.isFinite(progress) ? progress : 0}
                        onChange={handleSeek}
                        className="absolute w-full h-full inset-0 cursor-pointer appearance-none bg-transparent
                            [&::-webkit-slider-runnable-track]:bg-transparent
                            [&::-moz-range-track]:bg-transparent
                            [&::-webkit-slider-thumb]:appearance-none
                            [&::-webkit-slider-thumb]:h-3.5 
                            [&::-webkit-slider-thumb]:w-3.5
                            [&::-webkit-slider-thumb]:rounded-full 
                            [&::-webkit-slider-thumb]:bg-red-500
                            [&::-webkit-slider-thumb]:border-0 
                            [&::-webkit-slider-thumb]:shadow
                            active:[&::-webkit-slider-thumb]:scale-125
                            [&::-moz-range-thumb]:h-3.5 
                            [&::-moz-range-thumb]:w-3.5
                            [&::-moz-range-thumb]:rounded-full 
                            [&::-moz-range-thumb]:bg-red-500
                            [&::-moz-range-thumb]:border-0 
                            [&::-moz-range-thumb]:shadow
                        "
                    />
                </div>
            </div>
        </main>
    )
}