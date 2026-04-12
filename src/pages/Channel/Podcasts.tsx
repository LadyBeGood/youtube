
function PodcastEpisode({ title, ep, duration, date }) {
    return (
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.07] hover:bg-white/[0.04] cursor-pointer transition-colors">
            <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#1e1e1e] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" fill="rgba(255,255,255,0.4)" stroke="none" />
                </svg>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-white line-clamp-1">{title}</p>
                <p className="text-[11px] text-cool-gray mt-0.5">Ep. {ep} · {duration} · {date}</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" className="flex-shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </div>
    );
}

export default function Podcasts() {
    const episodes = [
        { title: "The Science of Lightning", ep: 12, duration: "48 min", date: "Apr 2" },
        { title: "Why Does Metal Conduct?", ep: 11, duration: "41 min", date: "Mar 26" },
        { title: "Batteries — A Deep Dive", ep: 10, duration: "55 min", date: "Mar 19" },
        { title: "Magnetism vs Gravity", ep: 9, duration: "37 min", date: "Mar 12" },
        { title: "The History of Electromagnetism", ep: 8, duration: "62 min", date: "Mar 5" },
    ];

    return (
        <div className="pb-10">
            {/* Featured / latest episode */}
            <div className="mx-3 mt-4 mb-1 rounded-xl overflow-hidden bg-[#1a1a1a]">
                <div className="h-28 flex items-center justify-center bg-[#111]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
                    </svg>
                </div>
                <div className="px-3 py-2.5">
                    <p className="text-[10px] text-cool-gray uppercase tracking-wider mb-0.5">Latest episode</p>
                    <p className="text-sm font-medium text-white">The Science of Lightning</p>
                    <p className="text-[11px] text-cool-gray mt-0.5">Ep. 12 · 48 min · Apr 2</p>
                </div>
            </div>

            <div className="mt-3">
                {episodes.slice(1).map((ep) => (
                    <PodcastEpisode key={ep.ep} {...ep} />
                ))}
            </div>
        </div>
    );
}