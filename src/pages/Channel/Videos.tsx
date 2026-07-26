import { GridViewIcon, ListViewIcon, List2ViewIcon } from "../../components/Icons/Icons";
import ThinVideoCard from "../../components/Cards/ThinVideoCard";

export default function Videos() {
    const isActive = false
    return (
        <div className="">
            <div className="h-12 flex justify-between items-center my-2 px-3">
                <div role="radiogroup" className="flex gap-2 text-sm">
                    {["Latest", "Popular", "Oldest"].map((item, i) =>
                        // TODO
                        <button role="radio" aria-checked={item === item} className={`whitespace-nowrap box-content px-2.5 py-1.5 rounded-lg text-sm
                             ${i === 0 ? "bg-white text-(--dark-gray)" : " text-white"}`}>
                            {item}
                        </button>
                    )}
                </div>

                {/* <div className="flex">
                    <button className="bg-white h-8 px-1 cursor-pointer flex items-center rounded-sm text-black">
                        <ListViewIcon />
                    </button>

                    <button className="h-8 px-1 cursor-pointer flex items-center rounded-sm">
                        <List2ViewIcon />
                    </button>
                </div> */}
            </div>

            <div className="flex flex-col gap-3">
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator Without Breaking A Sweat or Two or Three"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
            </div>
        </div>
    )
}
