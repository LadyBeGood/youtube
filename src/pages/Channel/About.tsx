

export default function About() {
    return (
        <div className="px-4 py-5 space-y-6">
            {/* Description */}
            <div>
                <h2>Description</h2>
                <p className="text-sm text-white/75 leading-relaxed">
                    Science, electricity, and the invisible forces that shape our world.
                    Exploring electromagnetism, chemistry, and the philosophy of natural
                    science — made accessible for curious minds everywhere.
                </p>
            </div>

            {/* Stats */}
            <div>
                <h2>Channel details</h2>
                <div>
                    <p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    
                        284,000 subscribers
                    </p>
                    <p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.845v6.31a1 1 0 0 1-1.447.894L15 14" />
                            <rect x="1" y="5" width="14" height="14" rx="2" />
                        </svg>

                        14.2M total views · 142 videos
                    </p>
                    <p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h28" />
                        </svg>
                        Joined March 12, 2019
                    </p>
                    <p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                    
                        London, United Kingdom
                    </p>
                    <p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                    
                        <span className="text-blue-400 underline underline-offset-2">michaelfaraday.science</span>
                    </p>
                </div>
            </div>

            {/* Links */}
            <div>
                <h2>Links</h2>
                <div className="flex flex-wrap gap-2">
                    {["Twitter", "Instagram", "Patreon", "Newsletter"].map((link) => (
                        <span
                            key={link}
                            className="text-xs text-blue-400 bg-white/[0.06] px-3 py-1.5 rounded-full border border-white/10"
                        >
                            {link}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
