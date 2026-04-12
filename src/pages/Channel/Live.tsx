
function LiveCard({ title, viewers, scheduledAt, isLive }) {
    return (
        <div className="flex gap-3 px-3 py-3 hover:bg-white/[0.04] cursor-pointer transition-colors">
            {/* Thumb */}
            <div className="relative flex-shrink-0 w-[148px] h-[84px] rounded-lg overflow-hidden bg-[#1a1a1a]">
                <div className="w-full h-full flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
                    </svg>
                </div>
                {isLive ? (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-px rounded-sm tracking-wide">
                        LIVE
                    </span>
                ) : (
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-px rounded-sm">
                        Scheduled
                    </span>
                )}
            </div>
            {/* Meta */}
            <div className="flex-1 min-w-0 pt-0.5">
                <p className="text-[13px] font-medium text-white leading-snug line-clamp-2 mb-1.5">{title}</p>
                <p className="text-[11px] text-cool-gray">Michael Faraday</p>
                {isLive ? (
                    <p className="text-[11px] text-cool-gray mt-0.5">{viewers} watching now</p>
                ) : (
                    <p className="text-[11px] text-cool-gray mt-0.5">{scheduledAt}</p>
                )}
            </div>
        </div>
    );
}

export default function Live() {
    return (
        <div className="pb-10">
            <div className="px-4 pt-4 pb-2">
                <p>Live now</p>
            </div>
            {/* <LiveCard
                title="Live Q&A — Your Electromagnetism Questions Answered"
                viewers="1,204"
                isLive={true}
            />

            <div className="px-4 pt-4 pb-2">
                <p>Upcoming</p>
            </div>
            <LiveCard
                title="Building a Tesla Coil — Full Build Stream"
                scheduledAt="Tomorrow at 6:00 PM"
                isLive={false}
            />
            <LiveCard
                title="Chemistry of Batteries — Live Experiment"
                scheduledAt="Sun, Apr 20 · 4:00 PM"
                isLive={false}
            /> */}
        </div>
    );
}
