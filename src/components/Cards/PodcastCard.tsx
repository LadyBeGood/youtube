export default function PodcastCard({ title, ep, duration, date }) {
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
                <p className="text-[11px] text-(--cool-gray) mt-0.5">Ep. {ep} · {duration} · {date}</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" className="flex-shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </div>
    );
}
