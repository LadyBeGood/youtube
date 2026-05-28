import Post from "../../components/Post";
import { posts } from "../../database/posts";



export default function Posts() {
    return (
        <div className="flex flex-col gap-12 py-6">
            {posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
}
