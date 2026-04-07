import { useRef, useState, useEffect } from "react";
import { type ChangeEvent, type MouseEvent } from "react";

type VideoPlayerProps = {
    source: string;
    title: string;
    thumbnail: string;
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const VideoPlayer = ({ source, title, thumbnail, onClick }: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(true);

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

    function handleClick(event: MouseEvent<HTMLDivElement>) {
        onClick(event)
    }

    return (
        <div className="relative bg-green-500 w-full mx-auto aspect-video" onClick={(event) => {handleClick(event)}}>
            <video
                ref={videoRef}
                src={source}
                width={"100%"}
                onTimeUpdate={handleTimeUpdate}
                playsInline
                disablePictureInPicture 
            />

            {/* Overlay UI */}
            <div className={`absolute inset-0 bg-black/60 flex flex-col justify-between transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

                {/* Top Bar (Title/Buttons could go here) */}
                <div className="px-4 py-3 text-white flex justify-between">
                    {/* Left */}
                    <div className="">
                        {/* Back Button */}
                        <button data-action="minimise" className="cursor-pointer">
                            <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="26px" width="26px" viewBox="0 -960 960 960" fill="#fff"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z" /></svg>
                        </button>
                    </div>

                    {/* Right */}
                    <div>
                        {/* Settings Button */}
                        <button data-action="settings" className="cursor-pointer">
                            <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.59 15.5l-1.82-1.3c.3-1.08.32-2.25 0-3.42l1.82-1.28L18.14 7l-2.03.92c-.79-.8-1.79-1.42-2.96-1.71L12.95 4h-2.9l-.2 2.21c-1.17.29-2.17.91-2.96 1.71L4.86 7L3.41 9.5l1.82 1.28c-.32 1.17-.3 2.34 0 3.42l-1.82 1.3L4.86 18l2.03-.93c.79.79 1.79 1.39 2.96 1.7l.2 2.23h2.9l.2-2.23c1.17-.31 2.17-.91 2.96-1.7l2.03.93zM13.5 3c.27 0 .5.2.5.46l.18 2.04c.76.28 1.44.69 2.05 1.18l1.85-.87c.23-.12.52-.04.66.19l2 3.5c.14.21.06.5-.16.65l-1.67 1.17c.13.8.12 1.59 0 2.36l1.67 1.17c.22.15.3.44.16.65l-2 3.5c-.14.21-.43.29-.66.17l-1.85-.86c-.61.49-1.29.89-2.05 1.19l-.18 2c0 .29-.23.5-.5.5h-4a.5.5 0 0 1-.5-.5l-.18-2c-.76-.3-1.44-.7-2.05-1.19l-1.85.86c-.23.12-.52.04-.66-.17l-2-3.5c-.14-.21-.06-.5.16-.65l1.67-1.17c-.12-.77-.13-1.56 0-2.36l-1.67-1.17c-.22-.15-.3-.44-.16-.65l2-3.5c.14-.23.43-.31.66-.19l1.85.87c.61-.49 1.29-.9 2.05-1.18L9 3.46c0-.26.23-.46.5-.46zm-2 6a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 12.5A3.5 3.5 0 0 1 11.5 9m0 1A2.5 2.5 0 0 0 9 12.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5" /></svg>
                        </button>
                    </div>
                </div>

                {/* Center Controls */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2  flex items-center justify-center gap-16">
                    <button data-action="previous" className="cursor-pointer bg-black/30 p-2 rounded-full" onClick={(e) => { videoRef.current!.currentTime -= 10; }}>
                        <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Z" /></svg>
                    </button>

                    <button data-action="play" onClick={(e) => {  togglePlay(); }} className="cursor-pointer bg-black/30 p-2 rounded-full">
                        {isPlaying
                            ? <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960" fill="#fff"><path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z" /></svg>
                            : <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960" fill="#fff"><path d="M320-200v-560l440 280-440 280Z" /></svg>
                        }
                    </button>

                    <button data-action="next" className="cursor-pointer bg-black/30 p-2 rounded-full" onClick={(e) => { videoRef.current!.currentTime += 10; }}>
                        <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z" /></svg>
                    </button>
                </div>

                {/* Bottom Controls */}
                <div className="pl-4 pr-5 pb-2 relative w-full">
                    <div className="flex justify-between items-baseline text-white text-xs mt-2 mb-2">
                        {/* left */}
                        <button data-action="duration" className="cursor-pointer flex items-center gap-4">
                            <span className="pointer-events-none">0:07 / 47:25</span>
                        </button>

                        {/* right */}
                        <div className="flex gap-8">
                            <button data-action="quality" className="cursor-pointer">
                                480p
                            </button>
                            <button data-action="fullscreen" className="cursor-pointer">
                                <svg className="pointer-events-none" width="12" height="12" viewBox="0 0 18 18" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M0 18V11H2V16H7V18H0ZM11 18V16H16V11H18V18H11ZM0 7V0H7V2H2V7H0ZM16 7V2H11V0H18V7H16Z" fill="white" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* YouTube Red Scrubber */}
                    <div className="h-0.5 absolute bg-cool-gray/40 bottom-0 left-0 right-0 cursor-pointer">
                        {/* Progress Fill (Optional, but makes it look like YouTube) */}
                        <div className="h-full bg-youtube-red w-[30%] relative">

                            {/* The Ball (Scrubber) */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-youtube-red h-3 w-3 rounded-full shadow-md"></div>

                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default VideoPlayer;