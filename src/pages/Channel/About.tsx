import { CalendarIcon, LocationIcon, VideoIcon, ViewIcon } from "../../components/Icons"

export default function About() {
    return (
        <div className="px-4 py-6 flex flex-col gap-10">
            {/* Description */}
            <div className="space-y-1">
                <h2 className="text-base font-medium">Description</h2>
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
                <h2 className="text-base font-medium">Links</h2>
                <div className="flex flex-col gap-3 pt-2 text-sm">
                    {[
                        { label: "Twitter", url: "twitter.com/faraday" },
                        { label: "Instagram", url: "instagram.com/faraday" },
                        { label: "Patreon", url: "patreon.com/faraday" },
                        { label: "Newsletter", url: "faraday.substack.com" }
                    ].map((link) => (
                        <a key={link.label} href="#" className="flex items-center gap-3">
                            <LocationIcon />
                            <div>
                                <div>{link.label}</div>
                                <div className="text-blue-500">{link.url}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="space-y-1">
                <h2 className="text-base font-medium">Statistics</h2>
                <div className="flex flex-col gap-3 pt-2 text-sm">
                    <p className="flex items-center gap-3">
                        <LocationIcon />
                        <span>United Kingdom</span>
                    </p>
                    <p className="flex items-center gap-3">
                        <VideoIcon />
                        <span>242 videos</span>
                    </p>
                    <p className="flex items-center gap-3">
                        <ViewIcon />
                        <span>14,240,118 views</span>
                    </p>
                    <p className="flex items-center gap-3">
                        <CalendarIcon />
                        <span>Joined March 12, 2019</span>
                    </p>
                </div>
            </div>
        </div>
    );
}