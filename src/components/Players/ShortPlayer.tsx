import { CommentIcon, DislikeIcon, MaximiseIcon, LikeIcon, ShareIcon, FullscreenIcon, DownArrowIcon, BackIcon, MoreIcon, BookmarkIcon } from "../Icons/Icons";

export default function Short({ title = "" }) {
    return (
        <div className="h-full relative bg-red-900 snap-start snap-always">
            {/* <img src="./yellow.webp" className="h-full object-cover" /> */}

            <div className="absolute top-0 left-0 right-0 flex px-4 justify-between mt-4">
                <BackIcon />
                <MoreIcon />
            </div>

            <div className="absolute bottom-0 left-0 right-0 items-end flex gap-4">

                {/* Left */}
                <div className="mb-4">
                    <div className="flex items-center pl-4 gap-2.5 mb-2.5 text-sm">
                        <img src="./avatar3.jpg" className="w-8 h-8 rounded-full" />
                        <div>Nikola Tesla</div>
                    </div>
                    <div className="pl-4">
                        I Redesigned the ENTIRE YouTube User Interface from Scratch
                        <DownArrowIcon className="inline" size={20} />
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-6 pb-4 pr-4 text-xs items-center">
                    <button aria-label="Like short. 34 likes." className="flex flex-col items-center gap-1">
                        <LikeIcon />
                        34K
                    </button>
                    <button aria-label="Dislike short" className="flex flex-col items-center gap-1">
                        <DislikeIcon />
                        326
                    </button>
                    <button aria-label="View 1.3K comments" className="flex flex-col items-center gap-1">
                        <CommentIcon />
                        1.3K
                    </button>

                    <button aria-label="Bookmark short" className="flex flex-col items-center gap-1">
                        <BookmarkIcon />
                        Save
                    </button>

                    <button aria-label="Share short" className="flex flex-col items-center gap-1">
                        <ShareIcon />
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}