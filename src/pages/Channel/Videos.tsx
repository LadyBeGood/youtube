import { GridViewIcon, ListViewIcon } from "../../components/Icons";
import ThinVideoCard from "../../components/ThinVideoCard";

export default function Videos() {
    return (
        <div className="">
            <div className="h-12 flex justify-between items-center">
                <div>

                </div>

                <div className="flex">
                    <ListViewIcon />
                    <GridViewIcon />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator Without Breaking A Sweat or Two or Three"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
                <ThinVideoCard title={"How I Animate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"4:17:17"} />
            </div>
        </div>
    )
}
