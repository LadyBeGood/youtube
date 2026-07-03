

export default function ChannelCard() {
    return (
        <a className="block pt-3 space-y-5 cursor-pointer" href="/channel">
            <div className="flex items-center">
                <div className="ml-6">
                    <img src="./avatar3.jpg" className="rounded-full h-20 w-20" alt="" />
                </div>

                {/* Channel Info Section */}
                <div className="pl-4">
                    <span className="text-lg font-bold text-white flex gap-1 items-center">
                        Michael Faraday
                    </span>

                    <div className="text-sm whitespace-pre text-cool-gray">
                        @michaelfaraday
                    </div>
                </div>
            </div>

            {/* Minimalist Quick Info Row */}
            <div className="flex text-center items-center">
                <div className="flex-1">
                    <div className="text-md font-medium text-white tracking-tight">242</div>
                    <div className="text-[11px] font-medium text-cool-gray tracking-wider mt-0.5">Videos</div>
                </div>

                <div className="flex-1">
                    <div className="text-md font-medium text-white tracking-tight">1.24M</div>
                    <div className="text-[11px] font-medium text-cool-gray tracking-wider mt-0.5">Subscribers</div>
                </div>

                <div className="flex-1">
                    <div className="text-md font-medium text-white tracking-tight">14.2M</div>
                    <div className="text-[11px] font-medium text-cool-gray tracking-wider mt-0.5">Views</div>
                </div>
            </div>
        </a>
    )
}