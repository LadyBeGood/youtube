import { MoreIcon } from "./Icons"

const Video = ({ isMusical = false }: { isMusical?: boolean }) => {
    const randomNumber = Math.floor(Math.random() * 50)
    const imageUrl = `avatar1.webp`

    return (
        <button>
            <div className="relative">
                <img src="./thumbnail1.webp" alt="" />
                <div className="absolute rounded right-2 bottom-1 bg-[#00000090] flex text-[10px] justify-around text-white items-center px-1.5 py-0.5 ">
                    {isMusical &&
                        <span className="material-symbols-outlined" style={{ fontSize: "12px", fontVariationSettings: `"FILL" 1, "wght" 400,"GRAD" 0` }}>music_note</span>
                    }
                    <span>7:49</span>
                </div>
            </div>
            <div className="py-2 px-1 gap-3 pb-5 flex items-start">
                <img src={imageUrl} alt="channel" className="w-12 aspect-square rounded-full mt-2" />
                <div className="gap-1 flex flex-col">
                    <div className="text-left">How I Animate Stuff On Desmos Graphing Calculator</div>
                    <div className="text-xs text-left text-cool-gray">
                        <span>Munferno</span> · 
                        <span> 3.5M views</span> · 
                        <span> 4 years ago</span>
                    </div>
                </div>
                <MoreIcon />
            </div>
        </button>
    )
}
export default Video