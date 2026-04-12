import { useRef, useState, useEffect, type RefObject } from "react";
import { type ChangeEvent, type MouseEvent } from "react";
import BottomSheet from "./BottomSheet";
import Toggle from "./Toggle";
import { CaptionIcon, DownArrowIcon, FullscreenIcon, NextIcon, PauseIcon, PlayIcon, PreviousIcon, SettingsIcon, TickIcon } from "./Icons";

type VideoPlayerProps = {
    source: string;
    title: string;
}

export default function VideoPlayer({ source, title }: VideoPlayerProps) {
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

    const availableCaptions = [
        { value: "English", selected: true },
        { value: "Hindi", selected: false },
        { value: "French", selected: false },
    ]

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
                            // TODO close the bottomsheet here?
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 21.9501C9.96033 21.8206 9.02733 21.586 8.201 21.2463C7.37467 20.9065 6.53458 20.4084 5.68075 19.7521L6.375 19.0193C7.07117 19.5527 7.7715 19.9667 8.476 20.2616C9.1805 20.5564 10.0218 20.784 11 20.9443V21.9501ZM4.99425 17.6193L4.2615 18.3136C3.63084 17.5071 3.13184 16.6564 2.7645 15.7616C2.39717 14.8667 2.17183 13.9462 2.0885 13.0001H3.0885C3.17183 13.8116 3.37692 14.6103 3.70375 15.3963C4.03075 16.1822 4.46092 16.9232 4.99425 17.6193ZM4.99425 6.41357C4.48659 7.01991 4.05967 7.74266 3.7135 8.58182C3.36733 9.42099 3.159 10.2271 3.0885 11.0001H2.0885C2.17567 10.0501 2.40517 9.12666 2.777 8.22982C3.14867 7.33299 3.64992 6.48974 4.28075 5.70007L4.99425 6.41357ZM11 3.08857C10.073 3.19757 9.22842 3.41549 8.46625 3.74232C7.70409 4.06932 7.01342 4.49949 6.39425 5.03282L5.68075 4.31932C6.44492 3.67566 7.27533 3.16799 8.172 2.79632C9.06883 2.42449 10.0115 2.18857 11 2.08857V3.08857Z" fill="#E3E3E3" />
                        <path d="M9.98396 8.46427L10.0224 15.6182L15.5801 12.0113L9.98396 8.46427Z" fill="#E3E3E3" />
                        <path d="M13.1294 2.08857C14.1685 2.22282 15.1004 2.46167 15.9252 2.80511C16.7499 3.14872 17.9605 3.93989 18.4386 4.31086C18.9166 4.68183 19.653 5.5 19.8512 5.75584C19.5638 6.02565 19.4027 6.17692 19.1153 6.44673C18.6493 5.83259 18.4347 5.57694 17.741 5.04043C17.0472 4.50392 16.3488 4.08664 15.6457 3.78859C14.9425 3.49054 14.1022 3.25911 13.1248 3.09431L13.1294 2.08857ZM19.1153 6.44673C19.4027 6.17692 19.5638 6.02565 19.8512 5.75584C20.4782 6.56521 20.9733 7.41815 21.3365 8.31465C21.6998 9.21115 21.9209 10.1327 21.9999 11.0792C22.0789 12.0257 22.0784 12.1334 21.9908 13.0792C21.6002 13.0774 21.3813 13.0764 20.9908 13.0746C21.0648 12.3019 21.0795 11.8865 20.9999 11.0746C20.9203 10.2628 20.7189 9.46309 20.3956 8.6756C20.0722 7.88828 19.6454 7.14532 19.1153 6.44673ZM19.0641 17.6524C19.5745 17.0484 20.0047 16.3276 20.3547 15.49C20.7047 14.6524 20.9167 13.8473 20.9908 13.0746C21.3813 13.0764 21.6002 13.0774 21.9908 13.0792C21.8993 14.0288 21.6655 14.9511 21.2896 15.8463C20.9138 16.7414 20.3222 17.7115 19.7743 18.3691C19.2265 19.0267 19.1829 19.0634 18.368 19.7435C18.0907 19.4635 17.9351 19.3066 17.6578 19.0267C18.2794 18.4962 18.5536 18.2564 19.0641 17.6524ZM13.0432 20.9499C13.9707 20.8451 14.8163 20.6311 15.5799 20.3077C16.3436 19.9842 17.0362 19.5572 17.6578 19.0267C17.9351 19.3066 18.0907 19.4635 18.368 19.7435C17.6009 20.3836 16.7682 20.8875 15.8698 21.255C14.9713 21.6228 14.0276 21.8544 13.0386 21.9499L13.0432 20.9499Z" fill="#E3E3E3" />
                    </svg>
                    <div className="mr-auto">
                        Playback speed
                    </div>

                    <div className=" text-cool-gray flex items-center gap-1 ">
                        1.0
                        <svg className="pointer-events-none -rotate-90" xmlns="http://www.w3.org/2000/svg" height="26px" width="26px" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z" /></svg>
                    </div>

                </button>
                
                <button className="flex gap-6 h-13 w-full hover:bg-white/10 items-center px-4" onClick={() => { setLoopVideo(!loopVideo) }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.30775 21L4 17.6923L7.30775 14.3845L8.0155 15.1038L5.927 17.1923H19V13.1923H20V18.1923H5.927L8.0155 20.2808L7.30775 21ZM4 10.8078V5.80775H18.073L15.9845 3.71925L16.6923 3L20 6.30775L16.6923 9.6155L15.9845 8.89625L18.073 6.80775H5V10.8078H4Z" fill="#E3E3E3" />
                    </svg>

                    <div className="mr-auto">
                        Loop
                    </div>

                    <Toggle isToggled={loopVideo} />
                </button>

                <button className="flex gap-6 h-13 w-full hover:bg-white/10 items-center px-4" onClick={() => setAmbientMode(!ambientMode)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M89.23-460v-40h200v40h-200ZM330-601.69l-71.69-71.69 28.31-28.31L358.31-630 330-601.69Zm130-69.08v-200h40v200h-40Zm170 69.08L601.69-630l71.69-71.69 28.31 28.31L630-601.69ZM670.77-460v-40h200v40h-200Zm-247.69 36.92Q400-446.15 400-480t23.08-56.92Q446.15-560 480-560t56.92 23.08Q560-513.85 560-480t-23.08 56.92Q513.85-400 480-400t-56.92-23.08Zm250.3 164.77L601.69-330 630-358.31l71.69 71.69-28.31 28.31Zm-386.76 0-28.31-28.31L330-358.31 358.31-330l-71.69 71.69ZM460-89.23v-200h40v200h-40Z" /></svg>

                    <div className="mr-auto">
                        Ambient mode
                    </div>

                    <Toggle isToggled={ambientMode} />
                </button>
            </BottomSheet>


            {/* Captions Bottom Sheet */}
            <BottomSheet isBottomSheetOpen={isCaptionsBottomSheetOpen} middle={100} onBottomSheetClose={() => setIsCaptionsBottomSheetOpen(false)}>
                {availableCaptions.map((caption, index) => 
                <button key={index} className="flex w-full h-13 items-center px-4 hover:bg-white/10 gap-3">
                    <span>
                        <svg className="pointer-events-none" style={{ visibility: caption.selected ? "visible" : "hidden" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    </span>
                    {caption.value}
                </button>)}
            </BottomSheet>
        </>
    );
};
