import { useRef, useState, useEffect, type RefObject } from "react";
import { type ChangeEvent, type MouseEvent } from "react";
import BottomSheet from "./BottomSheet";
import Toggle from "./Toggle";
import { AmbientIcon, CaptionIcon, DownArrowIcon, FullscreenIcon, LoopIcon, NextIcon, PauseIcon, PlaybackSpeedIcon, PlayIcon, PreviousIcon, SettingsIcon, TickIcon } from "./Icons";

type VideoPlayerProps = {
    source: string;
    title: string;
}

export default function VideoPlayer({ source, title }: VideoPlayerProps) {

    // in ms
    const BOTTOM_SHEET_CLOSE_DELAY = 150;

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [loopVideo, setLoopVideo] = useState(false);
    const [ambientMode, setAmbientMode] = useState(true);

    const [isQualityBottomSheetOpen, setIsQualityBottomSheetOpen] = useState(false);
    const [isSettingsBottomSheetOpen, setIsSettingsBottomSheetOpen] = useState(false);
    const [isCaptionsBottomSheetOpen, setIsCaptionsBottomSheetOpen] = useState(false);



    const videoContainerRef = useRef<HTMLDivElement>(null)

    const [availableQualities, setAvailableQualities] = useState([
        { value: "1080p", selected: false },
        { value: "720p", selected: false },
        { value: "480p", selected: true },
        { value: "360p", selected: false },
        { value: "240p", selected: false },
        { value: "144p", selected: false },
    ]);

    const [availableCaptions, setAvailableCaptions] = useState([
        { value: "English", selected: true },
        { value: "Hindi", selected: false },
        { value: "French", selected: false },
    ]);

    // Toggle Play/Pause
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    // Update progress bar
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    // Seek video
    const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            const seekTo = (Number(e.target.value) / 100) * videoRef.current.duration;
            videoRef.current.currentTime = seekTo;
            setProgress(Number(e.target.value));
        }
    };

    
    async function toggleFullscreen() {
        if (!videoContainerRef.current) return;

        try {
            if (!document.fullscreenElement) {
                await videoContainerRef.current.requestFullscreen();

                // Typescript gives error on this line if not written this way
                // See: https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1615#issuecomment-1825510566
                await window.screen.orientation["lock"]("landscape").catch(() => { });
                
                setIsFullscreen(true);
            } else {

                // Typescript gives error on this line if not written this way
                // See: https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1615#issuecomment-1825510566
                await window.screen.orientation["lock"]("portrait").catch(() => { });

                await document.exitFullscreen();
                setIsFullscreen(false);
            }
        } catch (error) {
            console.error("Fullscreen/Orientation toggle failed:", error);
        }
    }
    

    

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        // document and window can also be an EventTarget, we only want html button elements
        // Source - https://stackoverflow.com/a/49632054
        if (!(event.target instanceof HTMLButtonElement)) return;

        const action = event.target.dataset.action;
        console.log(action)

        switch (action) {
            case "settings":
                setIsSettingsBottomSheetOpen(!isSettingsBottomSheetOpen)
                break;
            case "captions":
                setIsCaptionsBottomSheetOpen(!isCaptionsBottomSheetOpen)
                break;
            case "minimise":

                break;
            case "quality":
                setIsQualityBottomSheetOpen(!isQualityBottomSheetOpen)
                break;
            case "fullscreen":
                toggleFullscreen();
                break;
            case "duration":
                
                break;
            default:
                null
        }
    }


    return (
        <>
            <div
                ref={videoContainerRef}
                className="relative w-full grid place-items-center"
                onClick={handleClick}
            >
                <video
                    ref={videoRef}
                    src={source}
                    className={isFullscreen ? "h-full w-auto" : "w-full h-auto"}
                    onTimeUpdate={handleTimeUpdate}
                    playsInline
                    disablePictureInPicture
                />

                {/* Overlay UI */}
                <div 
                    className={`absolute inset-0 bg-black/60 flex flex-col justify-between transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    style={isFullscreen ? {padding: "0px 32px 32px"} : {}}
                >

                    {/* Top Bar (Title/Buttons could go here) */}
                    <div className="px-3 py-2 text-white flex justify-between gap-20">
                        {/* Left */}
                        <div className="flex justify-baseline gap-3 min-w-0">
                            {/* Back Button */}
                            <button data-action="minimise" className="flex-shrink-0 grid place-content-center hover:bg-white/10 aspect-square">
                                <DownArrowIcon size={26} />
                            </button>

                            {isFullscreen && <div className="truncate flex-1">{title}</div>}
                        </div>


                        {/* Right */}
                        <div className="flex gap-3">
                            {/* Caption */}
                            <button data-action="captions" className="hover:bg-white/10 aspect-square p-1">
                                <CaptionIcon size={28} />
                            </button>
                            {/* Settings Button */}
                            <button data-action="settings" className="hover:bg-white/10 p-1 aspect-square grid place-items-center">
                                <SettingsIcon />
                            </button>
                        </div>
                    </div>

                    {/* Center Controls */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2  flex items-center justify-center gap-16">
                        <button data-action="previous" className="hover:bg-white/10 p-2 rounded-full" onClick={(e) => { videoRef.current!.currentTime -= 10; }}>
                            <PreviousIcon />
                        </button>

                        <button data-action="play" onClick={(e) => { togglePlay(); }} className="p-2 rounded-full hover:bg-white/10">
                            {isPlaying
                                ? <PauseIcon size={40} />
                                : <PlayIcon size={40} />
                            }
                        </button>

                        <button data-action="next" className="hover:bg-white/10 p-2 rounded-full" onClick={(e) => { videoRef.current!.currentTime += 10; }}>
                            <NextIcon />
                        </button>
                    </div>

                    {/* Bottom Controls */}
                    <div className="pl-2 pr-3  relative w-full">
                        <div className="flex justify-between items-baseline text-white text-xs mt-2 mb-2">
                            {/* left */}
                            <button data-action="duration" className="px-2 py-1 hover:bg-white/10">
                                <span className="pointer-events-none">0:07 / {Math.round(videoRef?.current?.duration ?? -1)}</span>
                            </button>

                            {/* right */}
                            <div className="flex gap-3">
                                <button data-action="quality" className="hover:bg-white/10 px-2 py-1">
                                    {availableQualities.find(quality => quality.selected)!.value}
                                </button>
                                <button data-action="fullscreen" className="hover:bg-white/10 h-max p-2">
                                    <FullscreenIcon size={12} />
                                </button>
                            </div>
                        </div>

                        {/* YouTube Red Scrubber */}
                        <div 
                            className="h-0.5 absolute bg-cool-gray/40 bottom-0 left-0 right-0 cursor-pointer"
                            style={isFullscreen ? { marginInline: "16px"} : {}}>
                            {/* Progress Fill (Optional, but makes it look like YouTube) */}
                            <div className="h-full bg-youtube-red w-[30%] relative">

                                {/* The Ball (Scrubber) */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-youtube-red h-3 w-3 rounded-full shadow-md"></div>

                            </div>
                        </div>

                        {/* Bottom */}
                        {isFullscreen && 
                            <div>
                                aaa
                                aaa
                                aaa
                                aaa
                                aaa
                                aaa
                                aaa
                            </div>
                        }

                    </div>


                </div>


            </div>

            {/* Bottom Sheet for quality settings */}
            <BottomSheet isBottomSheetOpen={isQualityBottomSheetOpen} middle={100} onBottomSheetClose={() => setIsQualityBottomSheetOpen(false)}>
                {availableQualities.map((quality, index) =>
                    <button 
                        data-quality-value={quality.value} 
                        className="h-13 px-4 w-full hover:bg-white/10 flex items-center gap-3" 
                        key={index} 
                        onClick={(event) => {
                            const selectedValue = event.currentTarget.dataset.qualityValue;
                            console.log(selectedValue);
                            setAvailableQualities(availableQualities.map(quality => ({
                                ...quality,
                                selected: quality.value === selectedValue
                            })));
                            
                            setTimeout(() => setIsQualityBottomSheetOpen(false), BOTTOM_SHEET_CLOSE_DELAY)
                        }}
                    >
                        <span>
                            <TickIcon style={{ visibility: quality.selected ? "visible" : "hidden" }} />
                        </span>

                        {quality.value}
                    </button>
                )}
            </BottomSheet>

            {/* Settings Bottom Sheet */}
            <BottomSheet isBottomSheetOpen={isSettingsBottomSheetOpen} middle={100} onBottomSheetClose={() => setIsSettingsBottomSheetOpen(false)}>
                <button className="flex gap-6 h-13 w-full hover:bg-white/10 items-center pl-4 pr-2">
                    <PlaybackSpeedIcon />

                    <div className="mr-auto">
                        Playback speed
                    </div>

                    <div className=" text-cool-gray flex items-center gap-1 ">
                        1.0
                        <svg className="pointer-events-none -rotate-90" xmlns="http://www.w3.org/2000/svg" height="26px" width="26px" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z" /></svg>
                    </div>

                </button>
                
                <button className="flex gap-6 h-13 w-full hover:bg-white/10 items-center px-4" onClick={() => { setLoopVideo(!loopVideo) }}>
                    <LoopIcon />

                    <div className="mr-auto">
                        Loop
                    </div>

                    <Toggle isToggled={loopVideo} />
                </button>

                <button 
                    className="flex gap-6 h-13 w-full hover:bg-white/10 items-center px-4" 
                    onClick={() => { setAmbientMode(!ambientMode) }}
                >
                    <AmbientIcon />

                    <div className="mr-auto">
                        Ambient mode
                    </div>

                    <Toggle isToggled={ambientMode} />
                </button>
            </BottomSheet>


            {/* Captions Bottom Sheet */}
            <BottomSheet isBottomSheetOpen={isCaptionsBottomSheetOpen} middle={100} onBottomSheetClose={() => setIsCaptionsBottomSheetOpen(false)}>
                {availableCaptions.map((caption, index) => 
                <button 
                    key={index} 
                    data-caption-value={caption.value} 
                    className="flex w-full h-13 items-center px-4 hover:bg-white/10 gap-3" 
                    onClick={(event) => {
                        const selectedValue = event.currentTarget.dataset.captionValue;
                        console.log(selectedValue);
                        setAvailableCaptions(availableCaptions.map(caption => ({
                            ...caption,
                            selected: caption.value === selectedValue
                        })));

                        setTimeout(() => setIsCaptionsBottomSheetOpen(false), BOTTOM_SHEET_CLOSE_DELAY)
                    }}
                >
                    <span>
                        <svg className="pointer-events-none" style={{ visibility: caption.selected ? "visible" : "hidden" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    </span>
                    {caption.value}
                </button>)}
            </BottomSheet>
        </>
    );
};
