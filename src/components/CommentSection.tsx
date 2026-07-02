import Comment from "./Comment"
import { CloseIcon, SortIcon, TuneIcon } from "./Icons"

type CommentSectionProps = {
    onClose: () => void
}

export default function CommentSection({ onClose }: CommentSectionProps) {
    return (
        <div>
            <div className="flex justify-between px-3 py-1">
                <div className="flex gap-3 items-baseline">
                    <span className="text-lg">Comments</span> 
                    <span className="text-white/75 text-sm tracking-wider">724</span>
                </div>
                <div className="flex gap-5">
                    <button>
                        <TuneIcon />
                    </button>

                    <button>
                        <CloseIcon size={28} />
                    </button>
                </div>
            </div>

            <div className="space-y-8">
                <Comment />
                <Comment />
            </div>
        </div>
    )
}