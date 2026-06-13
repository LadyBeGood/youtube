import { Link } from "react-router-dom";
import { explores } from "../database/explores";
import { moreFromYoutube } from "../database/moreFromYoutube";


type ExploreMenuProps = {
    isOpen: boolean,
    onClose: () => void,
}

export default function ExploreMenu({ isOpen, onClose }: ExploreMenuProps) {
    return (
        <>
            <div className={"bg-black w-[75vw] fixed z-2 flex flex-col overflow-auto no-scrollbar transition-all py-8 space-y-8 " + (isOpen ? " left-0 top-0 bottom-0" : " -left-full")}>
                {/* <Link className="block h-5 m-5 mb-3" to="/">
                    <img src="./youtube-logo-with-text-dark.svg" alt="youtube" className="h-full w-auto" />
                </Link> */}

                <div>
                    <div className="text-xl font-medium mb-3 px-4">
                        Explore
                    </div>

                    {explores.map(explore =>
                        <button key={explore.id} className="flex h-14 items-center gap-4 hover:bg-white/20 w-full px-4">
                            <explore.icon size={28} />

                            <div>
                                {explore.title}
                            </div>
                        </button>
                    )}
                </div>

                <div>
                    <div className="text-xl font-medium mb-3 px-4">
                        More from Youtube
                    </div>

                    {moreFromYoutube.map(fromYoutube =>
                        <button key={fromYoutube.id} className="flex h-14 items-center gap-4 hover:bg-white/20 w-full px-4">
                            <fromYoutube.icon size={28} />

                            <div>
                                {fromYoutube.title}
                            </div>
                        </button>
                    )}
                </div>

            </div>

            {isOpen && <div className="bg-black opacity-50 fixed z-1 inset-0" onClick={onClose}></div>}
        </>
    )
}