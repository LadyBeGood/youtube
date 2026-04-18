import { CommentIcon, DislikeIcon, LikeIcon, MoreIcon } from "./Icons";

type PostParams = {
    className?: string;
    avatar: string;
    name: string;
    date: string;
    body: string;
    likes: string;
    dislikes: string;
    comments: string;
    imgSrc?: string;
}

export default function Post({ className = "", avatar, name, date, body, likes, comments, imgSrc }: PostParams) {
    return (
        <div className={className}>
            {/* Header */}
            <div className="mb-4 flex items-center gap-3 ml-3 mr-1">
                <div className="w-8 h-8">
                    <img className="rounded-full" src={avatar} alt="" />
                </div>
                <div>
                    <p className="text-sm  text-white leading-none">{name}</p>
                    <p className="text-xs text-cool-gray mt-0.5 select-none">{date}</p>
                </div>
                <button className="ml-auto p-1.5">
                    <MoreIcon size={20} />
                </button>
            </div>

            {/* Body */}
            <p className="mx-3 text-sm leading-relaxed mb-4 line-clamp-3 overflow-hidden">{body}</p>

            {/* Optional image placeholder */}
            {imgSrc && (
                <div className=" bg-[#1a1a1a] flex items-center justify-center mb-4">
                    <img src={imgSrc} alt="Post Image" />
                </div>
            )}

            {/* Actions */}
            <div className="mx-3 flex items-center gap-4">
                <button className="flex items-center gap-1.5 text-[12px]">
                    <LikeIcon size={20} />
                    {likes}
                </button>
                <button className="flex items-center gap-1.5 text-[12px]">
                    <DislikeIcon size={20} />
                    24
                </button>
                <button className="flex items-center gap-1.5 text-[12px] ml-auto">
                    <CommentIcon size={20} />
                    {comments}
                </button>
            </div>
        </div>
    );
}