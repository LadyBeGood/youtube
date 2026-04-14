import Post from "../components/Post"
import RecommendationsBar from "../components/RecommendationsBar"
import SubscriptionsBar from "../components/SubscriptionsBar"
import VideoCard from "../components/VideoCard"

export default function Subscriptions() {

    return (
        <div className="overflow-y-auto no-scrollbar">
            <SubscriptionsBar />
            <RecommendationsBar isHomePage={false} />

            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <VideoCard title={"How I Animate In Desmos Graphing Calculator"} channel={"CodingHunger"} profilePictureURL={"./avatar1.webp"} views={"12K"} uploadDate={"1 year ago"} thumbnailURL={"./thumbnail1.webp"} duration={"9:38"} />
            <Post className="mb-6 mt-4" {...        {
                id: 1,
                avatar: "./avatar1.webp", name: "Michael Faraday", date: "2 days ago",
                body: "Just finished filming a 3-part series on the hidden geometry of magnetic field lines. It genuinely blew my mind editing this — dropping next week. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis inventore expedita delectus esse assumenda a perferendis omnis molestiae dolorem, enim quasi eos autem quisquam voluptate labore veniam porro quod. Tempore?",
                likes: "2.4K", dislikes: "24", comments: "183", imgSrc: "./pink.webp",
            }} />
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

