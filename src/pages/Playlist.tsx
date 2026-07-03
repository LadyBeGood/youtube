import { BackIcon, MoreIcon } from "../components/Icons";
import ThinVideoCard from "../components/Cards/ThinVideoCard";


export default function Playlist() {
    return (
        <div>
            {/* Top */}
            <div className="absolute top-0 left-0 right-0 flex px-4 justify-between mt-4">
                <BackIcon />
                <MoreIcon />
            </div>
            
            {/* Card */}
            <div>
                <img src="./jug16x9.jpg" alt="" />
            </div>

            {/* Videos */}
            <div className="space-y-3">
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
                <ThinVideoCard title={"How I Aaaaaaaaaaa aaaaaaaaaaaaaaa aaaa aaaanimate In Desmos Graphing Calculator"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./jug16x9.jpg"} duration={"9:38"} />
            </div>
        </div>
    )
}