import { ListViewIcon, List2ViewIcon } from "../../components/Icons/Icons";
import ThinShortsCard from "../../components/Cards/ThinShortsCard";

export default function Shorts() {
    return (
        <div>
            <div className="h-12 flex justify-between items-center my-2 px-3">
                <div className="flex gap-2 text-sm">
                    {["Latest", "Popular", "Oldest"].map((item, i) =>
                        <button className={`whitespace-nowrap box-content px-2.5 py-1.5 rounded-lg text-sm
                                ${i === 0 ? "bg-white text-(--dark-gray)" : " text-white"}`}>
                            {item}
                        </button>
                    )}
                </div>

                <div className="flex">
                    <button className="bg-white h-8 px-1 cursor-pointer flex items-center rounded-sm text-black rotate-90">
                        <ListViewIcon />
                    </button>

                    <button className="h-8 px-1 cursor-pointer flex items-center rounded-sm">
                        <List2ViewIcon />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-0.75">
                <ThinShortsCard thumbnail="./japan.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./pink.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./painting.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./yellow.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./moon.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./japan.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./pink.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./painting.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./yellow.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./moon.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./japan.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./pink.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./painting.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./yellow.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./japan.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./pink.webp" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./painting.jpg" title="Japan's Most Beautiful Restaurant 🍃" />
                <ThinShortsCard thumbnail="./yellow.webp" title="Japan's Most Beautiful Restaurant 🍃" />

            </div>
        </div>
    )
}