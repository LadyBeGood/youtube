import { Link } from "react-router-dom";
import { trends } from "../database/trending";


type ExploreMenuProps = {
    isOpen: boolean,
    onClose: () => void,
}

export default function ExploreMenu({ isOpen, onClose }: ExploreMenuProps) {
    return (
        <>
            <div className={"bg-black w-[75vw] fixed z-2 flex flex-col overflow-auto no-scrollbar transition-all pb-16 " + (isOpen ? " left-0 top-0 bottom-0" : " -left-full")}>
                <Link className="block h-5 m-5 mb-3" to="/">
                    <img src="./youtube-logo-with-text-dark.svg" alt="youtube" className="h-full w-auto" />
                </Link>

                <div>
                    {trends.map(trend =>
                        <button key={trend.id} className="flex w-full gap-4 px-4 hover:bg-white/20 py-4.5 items-center">
                            <trend.icon size={28} />
                            <div>
                                {trend.title}
                            </div>
                        </button>
                    )}
                </div>
            </div>

            {isOpen && <div className="bg-black opacity-50 fixed z-1 inset-0" onClick={onClose}></div>}
        </>
    )
}