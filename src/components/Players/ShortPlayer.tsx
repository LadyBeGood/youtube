import { useEffect, useRef, useState } from "react";
import { CommentIcon, DislikeIcon, LikeIcon, ShareIcon, DownArrowIcon, BackIcon, MoreIcon, BookmarkIcon, PlayIcon, FilledPlayIcon, FilledPauseIcon, FilledVolumeOffIcon } from "../Icons/Icons";


type ShortProps = {
    isActive: boolean,
    isMuted: boolean;
    onUnmute: () => void;
    setShowSeekBar: React.Dispatch<React.SetStateAction<boolean>>,
    registerVideo: (el: HTMLVideoElement | null) => void,
    handleTimeUpdate: () => void,
}



type OverlayIcon = "unmute" | "play" | "pause" | null;


export default function Short({
    isActive,
    isMuted,
    onUnmute,
    setShowSeekBar,
    registerVideo,
    handleTimeUpdate,
}: ShortProps) {
    
    /*=======================================*/
    /* State                                 */
    /*=======================================*/
    const videoRef = useRef<HTMLVideoElement>(null);
    const [overlay, setOverlay] = useState<OverlayIcon>(null);
    const overlayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Register this video with the parent
    useEffect(() => {
        registerVideo(videoRef.current);
        return () => registerVideo(null);
    }, [registerVideo]);

    // Play / pause based on visibility
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isActive) {
            video.play().catch(() => { });
        } else {
            video.pause();
            video.currentTime = 0; // optional: reset when scrolled away
        }
    }, [isActive]);

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

    const [availablePlaybackSpeeds, setAvailablePlaybackSpeeds] = useState([
        { value: 0.25, display: "0.25x", selected: false },
        { value: 0.5, display: "0.5x", selected: false },
        { value: 0.75, display: "0.75x", selected: false },
        { value: 1, display: "Normal", selected: true },
        { value: 1.25, display: "1.25x", selected: false },
        { value: 1.5, display: "1.5x", selected: false },
        { value: 1.75, display: "1.75x", selected: false },
        { value: 2, display: "2x", selected: false },
    ]);



    /*=======================================*/
    /* Handlers                              */
    /*=======================================*/
    // Register video with parent
    useEffect(() => {
        registerVideo(videoRef.current);
        return () => registerVideo(null);
    }, [registerVideo]);

    // Keep muted state in sync + autoplay logic
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = isMuted;

        if (isActive) {
            video.play().catch(() => { });
        } else {
            video.pause();
            // Optional: reset progress when leaving
            // video.currentTime = 0;
        }
    }, [isActive, isMuted]);

    function showOverlay(type: OverlayIcon) {
        if (overlayTimeout.current) clearTimeout(overlayTimeout.current);
        setOverlay(type);
        overlayTimeout.current = setTimeout(() => setOverlay(null), 800);
    }

    function handleClick() {
        const video = videoRef.current;
        if (!video) return;

        // First interaction: unmute globally
        if (isMuted) {
            onUnmute();
            showOverlay("unmute");
            // Video will start playing (or continue) unmuted via the effect
            return;
        }

        // Already unmuted -> toggle play / pause
        if (video.paused) {
            video.play();
            showOverlay("play");
            setShowSeekBar(false);
        } else {
            video.pause();
            showOverlay("pause");
            setShowSeekBar(true);
        }
    }


    
    return (
        <div 
            className="h-full relative snap-start snap-always overflow-visible"
            onClick={handleClick}
        >
            
            <video
                ref={videoRef}
                src="./videos/dancing-cat2.mp4"
                className="h-full"
                onTimeUpdate={isActive ? handleTimeUpdate : undefined}
                playsInline
                disablePictureInPicture
                loop
                muted 
            ></video>


            {/* Center overlay icons */}
            {overlay && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div className="bg-black/40 rounded-full p-3 animate-fade-out">
                        {overlay === "unmute" && <FilledVolumeOffIcon size={33} />}
                        {overlay === "play" && <FilledPlayIcon size={36} />}
                        {overlay === "pause" && <FilledPauseIcon size={36} />}
                    </div>
                </div>
            )}

            <div className="absolute top-0 left-0 right-0 flex px-4 justify-between mt-4">
                <BackIcon />
                <MoreIcon />
            </div>

            <div className="absolute bottom-0 left-0 right-0 items-end flex gap-4  select-none">

                {/* Left */}
                <div className="mb-4">
                    <div className="flex items-center pl-4 gap-2.5 mb-2.5 text-sm">
                        <img src="./avatar3.jpg" className="w-8 h-8 rounded-full" />
                        <div>Nikola Tesla</div>
                    </div>
                    <div className="pl-4">
                        I Redesigned the ENTIRE YouTube User Interface from Scratch
                        <DownArrowIcon className="inline" size={20} />
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-6 pb-4 pr-4 text-xs items-center">
                    <button aria-label="Like short. 34 likes." className="flex flex-col items-center gap-1">
                        <LikeIcon />
                        34K
                    </button>
                    <button aria-label="Dislike short" className="flex flex-col items-center gap-1">
                        <DislikeIcon />
                        326
                    </button>
                    <button aria-label="View 1.3K comments" className="flex flex-col items-center gap-1">
                        <CommentIcon />
                        1.3K
                    </button>

                    <button aria-label="Bookmark short" className="flex flex-col items-center gap-1">
                        <BookmarkIcon />
                        Save
                    </button>

                    <button aria-label="Share short" className="flex flex-col items-center gap-1">
                        <ShareIcon />
                        Share
                    </button>
                </div>
            </div>

            
        </div>
    )
}