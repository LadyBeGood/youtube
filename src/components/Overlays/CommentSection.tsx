import Comment from "../Cards/Comment"
import { CloseIcon, SortIcon, TuneIcon } from "../Icons/Icons"

type CommentSectionProps = {
    onClose: () => void
}

export default function CommentSection({ onClose }: CommentSectionProps) {
    return (
        <div className="h-full grid grid-rows-[auto_1fr]">
            <div className="flex justify-between px-3 pt-1 pb-2">
                <div className="flex gap-3 items-baseline">
                    <span className="text-lg">Comments</span>
                    {/* <span className="text-white/75 text-sm tracking-wider">724</span> */}
                </div>
                <div className="flex gap-5">
                    <button aria-label="Sort comments">
                        <TuneIcon />
                    </button>

                    <button aria-label="Close comment section">
                        <CloseIcon size={28} />
                    </button>
                </div>
            </div>

            <div className="space-y-6 overflow-y-auto pt-4 pb-60">
                <div className="px-3 flex gap-3 border-b border-(--dark-gray) pb-4 mb-4">
                    <div className="w-8 h-8">
                        <img className="rounded-full" src="./avatar1.webp" alt="" />
                    </div>
                    <input type="text" className="grow text-sm bg-(--dark-gray) px-2" placeholder="Add a comment..." />
                </div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    )
}