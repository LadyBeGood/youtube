import Post from "../../components/Post";



export default function Posts() {
    const posts = [
        {
            id: 1,
            avatar: "./avatar1.webp", name: "Michael Faraday", date: "2 days ago",
            body: "Just finished filming a 3-part series on the hidden geometry of magnetic field lines. It genuinely blew my mind editing this — dropping next week.",
            likes: "2.4K", dislikes: "24", comments: "183", imgSrc: "./moon.webp",
        },
        {
            id: 2,
            avatar: "./avatar1.webp", name: "Michael Faraday", date: "1 week ago",
            body: "Hot take: most people fundamentally misunderstand what electricity actually is. It's not electrons flowing like water in a pipe. Thread incoming.",
            likes: "5.1K", dislikes: "24", comments: "412",
        },
        {
            id: 3,
            avatar: "./avatar1.webp", name: "Michael Faraday", date: "2 weeks ago",
            body: "Behind the scenes from the Tesla coil build. Three failed prototypes, one minor burn, and a lot of lessons learned. Worth it.",
            likes: "3.8K", dislikes: "24", comments: "256", imgSrc: "./pink.webp",
        },
        {
            id: 4,
            avatar: "./avatar1.webp", name: "Michael Faraday", date: "2 weeks ago",
            body: "Behind the scenes from the Tesla coil build. Three failed prototypes, one minor burn, and a lot of lessons learned. Worth it.",
            likes: "3.8K", dislikes: "24", comments: "256",
        },
        {
            id: 5,
            avatar: "./avatar1.webp", name: "Michael Faraday", date: "2 weeks ago",
            body: "Behind the scenes from the Tesla coil build. Three failed prototypes, one minor burn, and a lot of lessons learned. Worth it.",
            likes: "3.8K", dislikes: "24", comments: "256",
        },
        {
            id: 6,
            avatar: "./avatar1.webp", name: "Michael Faraday", date: "2 weeks ago",
            body: "Behind the scenes from the Tesla coil build. Three failed prototypes, one minor burn, and a lot of lessons learned. Worth it.",
            likes: "3.8K", dislikes: "24", comments: "256", imgSrc: "./yellow.webp",
        },
    ];

    return (
        <div className="flex flex-col gap-12 py-6">
            {posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
}
