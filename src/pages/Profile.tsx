import { useState } from "react";
import VideoCard from "../components/VideoCard";
import ScrollableTabs from "../components/ScrollableTabs";


function About() {


    return (
        <div className="">About</div>
    )
}


export default function Profile() {

    const tabs = [
        { label: "About", content: <About /> },
        { label: "Videos", content: <p>Flights content</p> },
        { label: "Live", content: <p>Hotels content</p> },
        { label: "Podcast", content: <p>Hotels content</p> },
        { label: "Courses", content: <p>Hotels content</p> },
        { label: "Posts", content: <p>Hotels content</p> },
        { label: "Shop", content: <p>Hotels content</p> },
    ];


    return (
        <div className="">
            <div className="relative h-48">
                <img src="./thumbnail1.webp" alt="background" className="w-full h-24 block object-cover" />

                <div className="absolute -translate-y-[50%] ml-4">
                    <div className="relative">
                        <img src="./avatar1.webp" className="rounded-full border-black border-5" alt="" />
                        <div className="absolute left-0 text-black rounded-full bg-white -translate-y-[100%] translate-x-[50%] h-5 w-5 grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000000"><path d="M389-248.91 176.91-460l69.66-70.65L389-388.22l324.43-323.43L783.09-642 389-248.91Z" /></svg>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end h-8 mt-2 mr-4 gap-2">
                    <button className="hover:bg-white/20 grid place-items-center aspect-square rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M6 20.5V5h7.192l.4 2H19v8h-5.192l-.4-2H7v7.5zm8.65-6.5H18V8h-5.25l-.4-2H7v6h7.25z"></path></svg>
                    </button>
                    <button className="hover:bg-white/20 grid place-items-center aspect-square rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z"></path></svg>
                    </button>
                </div>

                {/* Channel Info Section */}
                <div className="mt-8 space-y-1 px-4">
                    <h1 className="text-2xl font-bold text-white">
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



            


            <div className="mt-28">
                <ScrollableTabs tabs={tabs} defaultIndex={0} onChange={(i) => console.log(i)} />
            </div>

        </div>
    )
}






