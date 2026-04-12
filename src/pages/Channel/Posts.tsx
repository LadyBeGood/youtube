import { DislikeIcon, LikeIcon } from "../../components/Icons";

function Post({ avatar, name, date, body, likes, comments, imgSrc }) {
    return (
        <div className="">
            {/* Header */}
            <div className="px-4 flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8">
                    <img className="rounded-full" src="./avatar1.webp" alt="" />
                </div>
                <div>
                    <p className="text-[13px] font-medium text-white leading-none">{name}</p>
                    <p className="text-[11px] text-cool-gray mt-0.5">{date}</p>
                </div>
            </div>

            {/* Body */}
            <p className="px-4 text-sm text-white/80 leading-relaxed mb-3">{body}</p>

            {/* Optional image placeholder */}
            {imgSrc && (
                <div className=" bg-[#1a1a1a] flex items-center justify-center mb-3">
                    <img src={imgSrc} alt="" />
                </div>
            )}

            {/* Actions */}
            <div className="px-4 flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-[12px] text-cool-gray hover:text-white transition-colors">
                    <LikeIcon width={20} height={20} />
                    {likes}
                </button>
                <button className="flex items-center gap-1.5 text-[12px] text-cool-gray hover:text-white transition-colors">
                    <DislikeIcon width={20} height={20} />
                    24
                </button>
                <button className="flex items-center gap-1.5 text-[12px] text-cool-gray hover:text-white transition-colors ml-auto">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {comments}
                </button>
            </div>
        </div>
    );
}

export default function Posts() {
    const posts = [
        {
            avatar: "MF", name: "Michael Faraday", date: "2 days ago",
            body: "Just finished filming a 3-part series on the hidden geometry of magnetic field lines. It genuinely blew my mind editing this — dropping next week.",
            likes: "2.4K", comments: "183", imgSrc: "./moon.webp",
        },
        {
            avatar: "MF", name: "Michael Faraday", date: "1 week ago",
            body: "Hot take: most people fundamentally misunderstand what electricity actually is. It's not electrons flowing like water in a pipe. Thread incoming.",
            likes: "5.1K", comments: "412", imgSrc: "./",
        },
        {
            avatar: "MF", name: "Michael Faraday", date: "2 weeks ago",
            body: "Behind the scenes from the Tesla coil build. Three failed prototypes, one minor burn, and a lot of lessons learned. Worth it.",
            likes: "3.8K", comments: "256", imgSrc: "./pink.webp",
        },
        {
            avatar: "MF", name: "Michael Faraday", date: "2 weeks ago",
            body: "Behind the scenes from the Tesla coil build. Three failed prototypes, one minor burn, and a lot of lessons learned. Worth it.",
            likes: "3.8K", comments: "256", imgSrc: "./",
        },
        {
            avatar: "MF", name: "Michael Faraday", date: "2 weeks ago",
            body: "Behind the scenes from the Tesla coil build. Three failed prototypes, one minor burn, and a lot of lessons learned. Worth it.",
            likes: "3.8K", comments: "256", imgSrc: "./",
        },
        {
            avatar: "MF", name: "Michael Faraday", date: "2 weeks ago",
            body: "Behind the scenes from the Tesla coil build. Three failed prototypes, one minor burn, and a lot of lessons learned. Worth it.",
            likes: "3.8K", comments: "256", imgSrc: "./yellow.webp",
        },
    ];

    return (
        <div className="flex flex-col gap-10 py-6">
            {posts.map(post => (
                <Post key={post.date} {...post} />
            ))}
        </div>
    );
}
