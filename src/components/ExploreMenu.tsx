import { explores, type Explore } from "../database/explores";
import { moreFromYoutube, type MoreFromYoutube } from "../database/moreFromYoutube";


type ExploreMenuProps = {
    isOpen: boolean,
    onClose: () => void,
}

export default function ExploreMenu({ isOpen, onClose }: ExploreMenuProps) {
    return (
        <>
            <div className={"bg-black w-[75vw] fixed z-2 flex flex-col overflow-auto no-scrollbar transition-all py-8 space-y-8 " + (isOpen ? " left-0 top-0 bottom-0" : " -left-full")}>
                {
                    Object.entries({ "Explore": explores, "More from Youtube": moreFromYoutube }).map(([key, value]) => 
                        <div key={key}>
                            <div className="text-xl font-medium mb-3 px-4">
                                {key}
                            </div>

                            {value.map((item: MoreFromYoutube | Explore) =>
                                <button key={item.id} className="flex h-14 items-center gap-4 hover:bg-white/20 w-full px-4">
                                    <item.icon size={28} />

                                    <div>
                                        {item.title}
                                    </div>
                                </button>
                            )}
                        </div>
                    )
                }
            </div>

            {isOpen && <div className="bg-black opacity-50 fixed z-1 inset-0" onClick={onClose}></div>}
        </>
    )
}