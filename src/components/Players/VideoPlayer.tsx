import { useRef, useState, useEffect, type RefObject } from "react";
import { type ChangeEvent, type MouseEvent } from "react";
import BottomSheet from "../Overlays/BottomSheet";
import Toggle from "../Controls/Toggle";
import { AmbientIcon, CaptionIcon, DownArrowIcon, MaximiseIcon, LoopIcon, FilledNextIcon, FilledPauseIcon, PlaybackSpeedIcon, FilledPlayIcon, FilledPreviousIcon, SettingsIcon, TickIcon } from "../Icons/Icons";

type VideoPlayerProps = {
    source: string;
    title: string;
}


function formatTime(totalSeconds: number) {
    if (!Number.isFinite(totalSeconds) || totalSeconds < 0) return "0:00";
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}


export default function VideoPlayer({ source, title }: VideoPlayerProps) {

    /*=======================================*/
    /* State                                 */
    /*=======================================*/
    const BOTTOM_SHEET_CLOSE_DELAY = 150;
    const CONTROLS_HIDE_DELAY = 3000;

    /*=======================================*/
    /* Refs                                  */
    /*=======================================*/
    const videoRef = useRef<HTMLVideoElement>(null);
    const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const wasPlayingBeforeSeekRef = useRef(false);

    /*=======================================*/
    /* State                                 */
    /*=======================================*/
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showRemainingTime, setShowRemainingTime] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [loopVideo, setLoopVideo] = useState(false);
    const [ambientMode, setAmbientMode] = useState(true);
    const [playbackRate, setPlaybackRate] = useState(1);

    const [isQualityBottomSheetOpen, setIsQualityBottomSheetOpen] = useState(false);
    const [isSettingsBottomSheetOpen, setIsSettingsBottomSheetOpen] = useState(false);
    const [isCaptionsBottomSheetOpen, setIsCaptionsBottomSheetOpen] = useState(false);

    const [availableQualities, setAvailableQualities] = useState([
        { value: "1080p", selected: false },
        { value: "720p",  selected: false },
        { value: "480p",  selected: true  },
        { value: "360p",  selected: false },
        { value: "240p",  selected: false },
        { value: "144p",  selected: false },
    ]);

    const [availableCaptions, setAvailableCaptions] = useState([
        { value: "English", selected: true  },
        { value: "Hindi",   selected: false },
        { value: "French",  selected: false },
    ]);

    const [availablePlaybackSpeeds, setAvailablePlaybackSpeeds] = useState([
        { value: 0.25, display: "0.25x",  selected: false },
        { value: 0.5,  display: "0.5x",   selected: false },
        { value: 0.75, display: "0.75x",  selected: false },
        { value: 1,    display: "Normal", selected: true  },
        { value: 1.25, display: "1.25x",  selected: false },
        { value: 1.5,  display: "1.5x",   selected: false },
        { value: 1.75, display: "1.75x",  selected: false },
        { value: 2,    display: "2x",     selected: false },
    ]);

    /*=======================================*/
    /* Handlers                              */
    /*=======================================*/
    function togglePlay() {
        if (videoRef.current === null) return;
        if (isPlaying) videoRef.current.pause();
        else videoRef.current.play();
    }


    function handlePlay() {
        setIsPlaying(true);
        resetControlsTimer(true);
    }

    function handlePause() {
        setIsPlaying(false);
        resetControlsTimer(false);
    }

    const handleEnded = () => {
        if (!loopVideo) setIsPlaying(false);
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) setDuration(videoRef.current.duration);
    };



    // Update progress bar
    function handleTimeUpdate() {
        if (videoRef.current === null) return; 
        const { currentTime: time, duration } = videoRef.current;
        setCurrentTime(time);
        if (duration > 0) setProgress((time / duration) * 100);

    }

    // Seek video
    function handleSeek(event: ChangeEvent<HTMLInputElement>) {
        if (videoRef.current === null) return; 
        const duration = videoRef.current.duration ?? 0;
        const seekTo = (Number(event.target.value) / 100) * duration;
        videoRef.current.currentTime = seekTo;
        setProgress(Number(event.target.value));
        setCurrentTime(seekTo);
    }


    async function toggleFullscreen() {
        if (videoContainerRef.current === null) return;

        try {
            if (document.fullscreenElement === null) {
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
            console.error("Fullscreen/Orientation toggle failed: ", error);
        }
    }


    function handleClick(event: MouseEvent<HTMLDivElement>) {
        // document and window can also be an EventTarget, we only want html button elements
        // Source - https://stackoverflow.com/a/49632054
        if (!(event.target instanceof HTMLButtonElement)) {
            // Tapped the video/backdrop itself (not a control) - toggle the controls overlay.
            if (showControls) {
                setShowControls(false);
                if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
            } else {
                resetControlsTimer(isPlaying);
            }
        
            return;
        }

        const action = event.target.dataset.action;

        switch (action) {
            case "settings":
                setIsSettingsBottomSheetOpen(!isSettingsBottomSheetOpen)
                break;
            case "captions":
                setIsCaptionsBottomSheetOpen(!isCaptionsBottomSheetOpen)
                break;
            case "minimise":
                if (isFullscreen) toggleFullscreen();
                break;
            case "quality":
                setIsQualityBottomSheetOpen(!isQualityBottomSheetOpen)
                break;
            case "fullscreen":
                toggleFullscreen();
                break;
            case "duration":
                setShowRemainingTime(previous => !previous);
                break;
        }

        resetControlsTimer(isPlaying);
    }

    function handleSeekStart() {
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        setShowControls(true);
        wasPlayingBeforeSeekRef.current = isPlaying;
        if (isPlaying) videoRef.current?.pause();
    }

    function handleSeekEnd() {
        if (wasPlayingBeforeSeekRef.current) {
            videoRef.current?.play().catch(() => {});
        } else {
            resetControlsTimer(false);
        }
    }



    function resetControlsTimer(autoHide: boolean) {
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        setShowControls(true);
        if (autoHide) {
            controlsTimeoutRef.current = setTimeout(() => setShowControls(false), CONTROLS_HIDE_DELAY);
        }
    }


    useEffect(() => {
        return () => {
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        };
    }, []);



    return (
        <>
            <div
                ref={videoContainerRef}
                className="relative w-full grid place-items-center"
                onClick={handleClick}
                onMouseMove={() => {
                    resetControlsTimer(isPlaying);
                }}
            >
                <video
                    ref={videoRef}
                    src={source}
                    className={isFullscreen ? "h-full w-auto" : "w-full h-auto"}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onEnded={handleEnded}
                    loop={loopVideo}
                    playsInline
                    disablePictureInPicture
                />

                {/* Overlay UI */}
                <div
                    className={`absolute inset-0 bg-black/60 flex flex-col justify-between transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    style={isFullscreen ? { padding: "0px 32px 32px" } : {}}
                >

                    {/* Top Bar (Title/Buttons could go here) */}
                    <div className="px-3 py-2 text-white flex justify-between gap-20">
                        {/* Left */}
                        <div className="flex justify-baseline gap-3 min-w-0">
                            {/* Back Button */}
                            <button aria-label="Minimise video player" data-action="minimise" className="shrink-0 grid place-content-center hover:bg-white/10 aspect-square">
                                <DownArrowIcon size={26} />
                            </button>

                            {isFullscreen && <div className="truncate flex-1">{title}</div>}
                        </div>


                        {/* Right */}
                        <div className="flex gap-3">
                            {/* Caption */}
                            <button aria-label="Select captions" data-action="captions" className="hover:bg-white/10 aspect-square p-1">
                                <CaptionIcon size={28} />
                            </button>
                            {/* Settings Button */}
                            <button aria-label="Open settings" data-action="settings" className="hover:bg-white/10 p-1 aspect-square grid place-items-center">
                                <SettingsIcon />
                            </button>
                        </div>
                    </div>

                    {/* Center Controls */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2  flex items-center justify-center gap-16">
                        <button aria-label="Go to previous video" data-action="previous" className="hover:bg-white/10 p-2 rounded-full" onClick={(e) => { 
                            if (videoRef.current === null) return;
                            videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
                        }}>
                            <FilledPreviousIcon />
                        </button>

                        <button aria-label={`${isPlaying ? "Pause" : "Play"} video`} data-action="play" onClick={(e) => { togglePlay(); }} className="p-2 rounded-full hover:bg-white/10">
                            {isPlaying
                                ? <FilledPauseIcon size={40} />
                                : <FilledPlayIcon size={40} />
                            }
                        </button>

                        <button aria-label="Go to next video" data-action="next" className="hover:bg-white/10 p-2 rounded-full" onClick={(e) => {
                            if (!videoRef.current) return;
                            const duration = videoRef.current.duration ?? (videoRef.current.currentTime + 10);
                            videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, duration);

                        }}>
                            <FilledNextIcon />
                        </button>
                    </div>

                    {/* Bottom Controls */}
                    <div className="relative w-full">
                        <div className="pl-2 pr-3 flex justify-between items-baseline text-white text-xs mt-2 mb-2">
                            {/* left */}
                            <button
                                aria-label={showRemainingTime
                                    ? "Show elapsed time"
                                    : "Show remaining time"}
                                data-action="duration"
                                className="px-2 py-1 hover:bg-white/10"
                            >
                                <span className="pointer-events-none">
                                    {showRemainingTime
                                        ? `-${formatTime(Math.max(duration - currentTime, 0))} / ${formatTime(duration)}`
                                        : `${formatTime(currentTime)} / ${formatTime(duration)}`}
                                </span>
                            </button>


                            {/* right */}
                            <div className="flex gap-3">
                                <button aria-label="Change video quality" data-action="quality" className="hover:bg-white/10 px-2 py-1">
                                    {availableQualities.find(quality => quality.selected)!.value}
                                </button>
                                <button aria-label="Fullscreen video" data-action="fullscreen" className="hover:bg-white/10 h-max p-2">
                                    <MaximiseIcon size={12} />
                                </button>
                            </div>
                        </div>

                        {/* YouTube Red Scrubber */}
                        <div className="relative w-full m-0 p-0">
                            <div
                                className="h-0.5 w-full absolute bg-(--cool-gray)/40 bottom-0 left-0 right-0 cursor-pointer">
                                {/* Progress Fill, driven by real playback progress */}
                                <div className="h-full bg-(--youtube-red) relative" style={{ width: `${progress}%` }}>
 
                                    {/* The Ball (Scrubber) */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-(--youtube-red) h-3 w-3 rounded-full shadow-md"></div>
 
                                </div>
                            </div>
 

                            <input
                                type="range"
                                min={0}
                                max={100}
                                step={0.1}
                                value={Number.isFinite(progress) ? progress : 0}
                                onChange={handleSeek}
                                onClick={(e) => e.stopPropagation()}
                                onPointerDown={handleSeekStart}
                                onPointerUp={handleSeekEnd}
                                onPointerCancel={handleSeekEnd}
                                aria-label="Seek video"
                                className="absolute left-0 right-0 bottom-0 h-5 translate-y-1/2 opacity-0 cursor-pointer appearance-none"
                                style={isFullscreen ? { marginInline: "16px", width: "calc(100% - 32px)" } : { width: "100%" }}
                            />
                        </div>


                        

                    </div>


                </div>


            </div>

            {/* Bottom Sheet for quality settings */}
            <BottomSheet isBottomSheetOpen={isQualityBottomSheetOpen} middle={100} onBottomSheetClose={() => setIsQualityBottomSheetOpen(false)}>
                {availableQualities.map((quality, index) =>
                    <button
                        aria-pressed={quality.selected}
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

                    <div className=" text-(--cool-gray) flex items-center gap-1 ">
                        1.0
                        <DownArrowIcon className="-rotate-90" />
                    </div>

                </button>

                <button aria-pressed={loopVideo} className="flex gap-6 h-13 w-full hover:bg-white/10 items-center px-4" onClick={() => { setLoopVideo(!loopVideo) }}>
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
                            <TickIcon style={{ visibility: caption.selected ? "visible" : "hidden" }} />
                        </span>
                        {caption.value}
                    </button>)}
            </BottomSheet>
        </>
    );
};
