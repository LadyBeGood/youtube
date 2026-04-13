import { FlagIcon, ShareIcon } from "../../components/Icons";
import ScrollableTabs from "../../components/ScrollableTabs";
import About from "./About";
import Courses from "./Courses";
import Live from "./Live";
import Playlists from "./Playlists";
import Podcasts from "./Podcasts";
import Posts from "./Posts";
import Shop from "./Shop";
import Videos from "./Videos";


export default function Channel() {

    const tabs = [
        { label: "About",     content: <About />     },
        { label: "Videos",    content: <Videos />    },
        { label: "Playlists", content: <Playlists /> },
        { label: "Live",      content: <Live />      },
        { label: "Podcasts",  content: <Podcasts />  },
        { label: "Courses",   content: <Courses />   },
        { label: "Posts",     content: <Posts />     },
        { label: "Shop",      content: <Shop />      },
    ];


    return (
        <div className="overflow-y-auto no-scrollbar">
            <div className="relative h-48">
                <img src="./thumbnail1.webp" alt="background" className="w-full h-24 block object-cover" />

                <div className="absolute -translate-y-[50%] ml-4">
                    <div className="relative">
                        <img src="./avatar3.jpg" className="rounded-full h-25 w-25" alt="" />
                    </div>
                </div>

                <div className="flex justify-end h-8 mt-2 mr-4 gap-2">
                    <button className="hover:bg-white/20 grid place-items-center aspect-square rounded-full">
                        <FlagIcon />
                    </button>
                    <button className="hover:bg-white/20 grid place-items-center aspect-square rounded-full">
                        <ShareIcon />
                    </button>
                </div>

                {/* Channel Info Section */}
                <div className="mt-5 space-y-1 px-4">
                    <h1 className="text-xl font-bold text-white">
                        Michael Faraday
                    </h1>

                    <div className="text-sm whitespace-pre text-cool-gray">
                        @michaelfaraday
                    </div>
                </div>


                <div className="flex h-8 mt-5 mx-4 gap-2">
                    <button className="flex font-medium text-eerie-black bg-white items-center px-3  rounded-full text-sm">
                        Subscribe
                    </button>
                    <button className="font-medium hover:bg-white/20 text-white grid place-items-center px-3 rounded-full text-sm">
                        Join
                    </button>
                </div>
            </div>






            <div className="mt-22">
                <ScrollableTabs tabs={tabs} defaultIndex={0} onChange={(i) => console.log(i)} />
            </div>

        </div>
    )
}