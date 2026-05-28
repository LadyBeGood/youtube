
import Post from "../components/Post"
import RecommendationsBar from "../components/RecommendationsBar"
import ShortsCard from "../components/ShortsCard"
import VideoCard from "../components/VideoCard"



export default function Home() {


    return (
        <div className="overflow-y-auto no-scrollbar">
            <RecommendationsBar isHomePage={true} />

            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <div className="mt-3 mb-6 flex flex-col gap-6">
                <ShortsCard thumbnail="./japan.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ShortsCard thumbnail="./pink.webp" title="A rich red bean paste and butter honey toast that gives you maximum guilty pleasure 🍞🧈"/>
                <ShortsCard thumbnail="./painting.jpg" title="SUBLIMAL MSG" />
            </div>
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
        </div>
    )
}
