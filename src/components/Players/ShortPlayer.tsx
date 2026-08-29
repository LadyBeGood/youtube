import { useEffect, useRef, useState } from "react";
import { CommentIcon, DislikeIcon, LikeIcon, ShareIcon, DownArrowIcon, BackIcon, MoreIcon, BookmarkIcon } from "../Icons/Icons";


type ShortProps = {
    isActive: boolean,
    isMuted: boolean;
    onUnmute: () => void;
    setShowSeekBar: React.Dispatch<React.SetStateAction<boolean>>,
    registerVideo: (el: HTMLVideoElement | null) => void,
    handleTimeUpdate: () => void,
}


// Simple icons – replace with your own if you already have them
function VolumeOffIcon({ size = 48 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
        </svg>
    );
}

function PlayIcon({ size = 64 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function PauseIcon({ size = 64 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
    );
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
                    <div className="bg-black/40 rounded-full p-5 animate-fade-out">
                        {overlay === "unmute" && <VolumeOffIcon />}
                        {overlay === "play" && <PlayIcon />}
                        {overlay === "pause" && <PauseIcon />}
                    </div>
                </div>
            )}

            <div className="absolute top-0 left-0 right-0 flex px-4 justify-between mt-4">
                <BackIcon />
                <MoreIcon />
            </div>

            <div className="absolute bottom-0 left-0 right-0 items-end flex gap-4">

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