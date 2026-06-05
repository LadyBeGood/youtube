import { CalendarIcon, InstagramIcon, LocationIcon, PatreonIcon, EarthIcon, VideoIcon, ViewIcon, LanguageIcon, XIcon } from "../../components/Icons"

export default function About() {
    return (
        <div className="px-4 pt-8 pb-20 flex flex-col gap-8">
            {/* Quick Info Grid Boxes
            <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/10 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                    <span className="text-xs text-cool-gray mb-1">Videos</span>
                    <span className="text-base font-semibold text-white">242</span>
                </div>

                <div className="bg-white/10 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                    <span className="text-xs text-cool-gray mb-1">Subscribers</span>
                    <span className="text-base font-semibold text-white">1.24M</span>
                </div>

                <div className="bg-white/10 rounded-lg p-3 flex flex-col items-center justify-center text-center">
                    <span className="text-xs text-cool-gray mb-1">Total Views</span>
                    <span className="text-base font-semibold text-white">14.2M</span>
                </div>

            </div> */}


            {/* Minimalist Quick Info Row */}
            <div className="flex text-center items-center">
                <div className="flex-1">
                    <div className="text-lg font-bold text-white tracking-tight">242</div>
                    <div className="text-[11px] font-medium text-cool-gray tracking-wider mt-0.5">Videos</div>
                </div>

                <div className="flex-1">
                    <div className="text-lg font-bold text-white tracking-tight">1.24M</div>
                    <div className="text-[11px] font-medium text-cool-gray tracking-wider mt-0.5">Subscribers</div>
                </div>

                <div className="flex-1">
                    <div className="text-lg font-bold text-white tracking-tight">14.2M</div>
                    <div className="text-[11px] font-medium text-cool-gray tracking-wider mt-0.5">Views</div>
                </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
                <h2 className="text-lg font-medium">Description</h2>
                <div className="flex flex-col gap-3 pt-2 text-sm">
                    <p>
                        Science, electricity, and the invisible forces that shape our world.
                        Exploring electromagnetism, chemistry, and the philosophy of natural
                        science, made accessible for curious minds everywhere.
                    </p>
                </div>
            </div>

            {/* Links */}
            <div className="space-y-1">
                <h2 className="text-lg font-medium">Links</h2>
                <div className="flex flex-col gap-3 pt-2 text-sm">
                    {[
                        { label: "Official Website", url: "faraday.me",            icon: EarthIcon },
                        { label: "Instagram",        url: "instagram.com/faraday", icon: InstagramIcon },
                        { label: "X",                url: "x.com/faraday",         icon: XIcon },
                        { label: "Patreon",          url: "patreon.com/faraday",   icon: PatreonIcon },
                    ].map((link) => (
                        <a key={link.label} href="#" className="flex items-center gap-3">
                            <link.icon />

                            <div>
                                <div>{link.label}</div>
                                <div className="text-blue-500">{link.url}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* More info */}
            <div className="space-y-1">
                <h2 className="text-lg font-medium">More</h2>
                <div className="flex flex-col gap-4 pt-2 text-sm">
                    <p className="flex items-center gap-3">
                        <LocationIcon />
                        <span>United Kingdom</span>
                    </p>
                    {/* <p className="flex items-center gap-3">
                        <VideoIcon />
                        <span>242 videos</span>
                    </p> */}
                    {/* <p className="flex items-center gap-3">
                        <ViewIcon />
                        <span>14,240,118 views</span>
                    </p> */}
                    <p className="flex items-center gap-3">
                        <CalendarIcon />
                        <span>Joined March 12, 2019</span>
                    </p>
                    <p className="flex items-center gap-3">
                        <LanguageIcon /> {/* Reusing your EarthIcon from links */}
                        <span>English (UK)</span>
                    </p>
                </div>
            </div>
        </div>
    );
}