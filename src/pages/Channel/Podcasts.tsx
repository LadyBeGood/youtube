import PodcastCard from "../../components/Cards/PodcastCard";

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
                    <p className="text-[10px] text-(--cool-gray) uppercase tracking-wider mb-0.5">Latest episode</p>
                    <p className="text-sm font-medium text-white">The Science of Lightning</p>
                    <p className="text-[11px] text-(--cool-gray) mt-0.5">Ep. 12 · 48 min · Apr 2</p>
                </div>
            </div>

            <div className="mt-3">
                {episodes.slice(1).map((ep) => (
                    <PodcastCard key={ep.ep} {...ep} />
                ))}
            </div>
        </div>
    );
}