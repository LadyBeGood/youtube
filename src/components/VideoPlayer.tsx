import { useRef, useState, useEffect, type RefObject } from "react";
import { type ChangeEvent, type MouseEvent } from "react";
import BottomSheet from "./BottomSheet";
import Toggle from "./Toggle";

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

    const [isQualityBottomSheetOpen, setIsQualityBottomSheetOpen] = useState(false);
    const [isSettingsBottomSheetOpen, setIsSettingsBottomSheetOpen] = useState(false);
    const [isCaptionsBottomSheetOpen, setIsCaptionsBottomSheetOpen] = useState(false);



    const videoContainerRef = useRef<HTMLDivElement>(null)

    const availableQualities = [
        { value: "1080p", selected: false },
        { value: "720p", selected: false },
        { value: "480p", selected: true },
        { value: "360p", selected: false },
        { value: "240p", selected: false },
        { value: "144p", selected: false },
    ]

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
                                <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="26px" width="26px" viewBox="0 -960 960 960" fill="#fff"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z" /></svg>
                            </button>

                            {isFullscreen && <div className="truncate flex-1">{title}</div>}
                        </div>


                        {/* Right */}
                        <div className="flex gap-3">
                            {/* Caption */}
                            <button data-action="captions" className="hover:bg-white/10 aspect-square p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="currentColor"><path d="M224.62-200q-27.62 0-46.12-18.5Q160-237 160-264.62v-430.76q0-27.62 18.5-46.12Q197-760 224.62-760h510.76q27.62 0 46.12 18.5Q800-723 800-695.38v430.76q0 27.62-18.5 46.12Q763-200 735.38-200H224.62Zm0-40h510.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-430.76q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H224.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v430.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69Zm86.15-132.31H400q17.77 0 30.42-12.65 12.66-12.66 12.66-30.42v-15.39h-35.39V-420q0 4.62-3.84 8.46-3.85 3.85-8.47 3.85h-80q-4.61 0-8.46-3.85-3.84-3.84-3.84-8.46v-120q0-4.62 3.84-8.46 3.85-3.85 8.46-3.85h80q4.62 0 8.47 3.85 3.84 3.84 3.84 8.46v12.31h35.39v-16.93q0-17.76-12.66-30.42-12.65-12.65-30.42-12.65h-89.23q-17.77 0-30.42 12.65-12.66 12.66-12.66 30.42v129.24q0 17.76 12.66 30.42 12.65 12.65 30.42 12.65Zm249.23 0h89.23q17.77 0 30.42-12.65 12.66-12.66 12.66-30.42v-15.39h-35.39V-420q0 4.62-3.84 8.46-3.85 3.85-8.46 3.85h-80q-4.62 0-8.47-3.85-3.84-3.84-3.84-8.46v-120q0-4.62 3.84-8.46 3.85-3.85 8.47-3.85h80q4.61 0 8.46 3.85 3.84 3.84 3.84 8.46v12.31h35.39v-16.93q0-17.76-12.66-30.42-12.65-12.65-30.42-12.65H560q-17.77 0-30.42 12.65-12.66 12.66-12.66 30.42v129.24q0 17.76 12.66 30.42 12.65 12.65 30.42 12.65ZM200-240v-480 480Z" /></svg>
                            </button>
                            {/* Settings Button */}
                            <button data-action="settings" className="hover:bg-white/10 p-1 aspect-square grid place-items-center">
                                <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.59 15.5l-1.82-1.3c.3-1.08.32-2.25 0-3.42l1.82-1.28L18.14 7l-2.03.92c-.79-.8-1.79-1.42-2.96-1.71L12.95 4h-2.9l-.2 2.21c-1.17.29-2.17.91-2.96 1.71L4.86 7L3.41 9.5l1.82 1.28c-.32 1.17-.3 2.34 0 3.42l-1.82 1.3L4.86 18l2.03-.93c.79.79 1.79 1.39 2.96 1.7l.2 2.23h2.9l.2-2.23c1.17-.31 2.17-.91 2.96-1.7l2.03.93zM13.5 3c.27 0 .5.2.5.46l.18 2.04c.76.28 1.44.69 2.05 1.18l1.85-.87c.23-.12.52-.04.66.19l2 3.5c.14.21.06.5-.16.65l-1.67 1.17c.13.8.12 1.59 0 2.36l1.67 1.17c.22.15.3.44.16.65l-2 3.5c-.14.21-.43.29-.66.17l-1.85-.86c-.61.49-1.29.89-2.05 1.19l-.18 2c0 .29-.23.5-.5.5h-4a.5.5 0 0 1-.5-.5l-.18-2c-.76-.3-1.44-.7-2.05-1.19l-1.85.86c-.23.12-.52.04-.66-.17l-2-3.5c-.14-.21-.06-.5.16-.65l1.67-1.17c-.12-.77-.13-1.56 0-2.36l-1.67-1.17c-.22-.15-.3-.44-.16-.65l2-3.5c.14-.23.43-.31.66-.19l1.85.87c.61-.49 1.29-.9 2.05-1.18L9 3.46c0-.26.23-.46.5-.46zm-2 6a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 12.5A3.5 3.5 0 0 1 11.5 9m0 1A2.5 2.5 0 0 0 9 12.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Center Controls */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2  flex items-center justify-center gap-16">
                        <button data-action="previous" className="hover:bg-white/10 p-2 rounded-full" onClick={(e) => { videoRef.current!.currentTime -= 10; }}>
                            <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Z" /></svg>
                        </button>

                        <button data-action="play" onClick={(e) => { togglePlay(); }} className="p-2 rounded-full hover:bg-white/10">
                            {isPlaying
                                ? <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960" fill="#fff"><path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z" /></svg>
                                : <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 -960 960 960" fill="#fff"><path d="M320-200v-560l440 280-440 280Z" /></svg>
                            }
                        </button>

                        <button data-action="next" className="hover:bg-white/10 p-2 rounded-full" onClick={(e) => { videoRef.current!.currentTime += 10; }}>
                            <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z" /></svg>
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
                                    480p
                                </button>
                                <button data-action="fullscreen" className="hover:bg-white/10 h-max p-2">
                                    <svg className="pointer-events-none" width="12" height="12" viewBox="0 0 18 18" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M0 18V11H2V16H7V18H0ZM11 18V16H16V11H18V18H11ZM0 7V0H7V2H2V7H0ZM16 7V2H11V0H18V7H16Z" fill="white" /></svg>
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
                    <button className="h-13 px-4 w-full hover:bg-white/10 flex items-center gap-3" key={index}>
                        <span>
                            <svg className="pointer-events-none" style={{ visibility: quality.selected ? "visible" : "hidden" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
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
                
                <button className="flex gap-6 h-13 w-full hover:bg-white/10 items-center px-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.30775 21L4 17.6923L7.30775 14.3845L8.0155 15.1038L5.927 17.1923H19V13.1923H20V18.1923H5.927L8.0155 20.2808L7.30775 21ZM4 10.8078V5.80775H18.073L15.9845 3.71925L16.6923 3L20 6.30775L16.6923 9.6155L15.9845 8.89625L18.073 6.80775H5V10.8078H4Z" fill="#E3E3E3" />
                    </svg>

                    <div className="mr-auto">
                        Loop
                    </div>

                    <Toggle isToggled={false} />
                </button>

                <button className="flex gap-6 h-13 w-full hover:bg-white/10 items-center px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M89.23-460v-40h200v40h-200ZM330-601.69l-71.69-71.69 28.31-28.31L358.31-630 330-601.69Zm130-69.08v-200h40v200h-40Zm170 69.08L601.69-630l71.69-71.69 28.31 28.31L630-601.69ZM670.77-460v-40h200v40h-200Zm-247.69 36.92Q400-446.15 400-480t23.08-56.92Q446.15-560 480-560t56.92 23.08Q560-513.85 560-480t-23.08 56.92Q513.85-400 480-400t-56.92-23.08Zm250.3 164.77L601.69-330 630-358.31l71.69 71.69-28.31 28.31Zm-386.76 0-28.31-28.31L330-358.31 358.31-330l-71.69 71.69ZM460-89.23v-200h40v200h-40Z" /></svg>

                    <div className="mr-auto">
                        Ambient mode
                    </div>

                    <Toggle />
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
