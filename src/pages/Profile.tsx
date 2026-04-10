import { useState } from "react";
import VideoCard from "../components/VideoCard";


const paneListStyle1 = {
    backgroundColor: "#FEA900"
};
const paneListStyle2 = {
    backgroundColor: "#b3dc4a"
};
const paneListStyle3 = {
    backgroundColor: "#6ac0ff"
};
const paneListStyle4 = {
    backgroundColor: "#ff99c0"
};
const paneListStyle5 = {
    backgroundColor: "#99ff66"
};
const paneListStyle6 = {
    backgroundColor: "#D1D1D1"
};
const paneListStyle7 = {
    backgroundColor: "#D1EEEE"
};
const paneListStyle8 = {
    backgroundColor: "#CDCD00"
};
const paneListStyle9 = {
    backgroundColor: "#836FFF"
};



const Profile = () => {

    const [index, setIndex] = useState(0)

    const onTabChange = newIndex => {
        setIndex(newIndex)
    };


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

                <div className="flex justify-end h-8 mt-4 mr-4 gap-2 opacity-0">
                    <button className="font-medium hover:bg-white/20 text-white grid place-items-center px-3 rounded-full text-sm">
                        Join
                    </button>
                    <button className="flex font-medium text-eerie-black bg-white items-center px-3  rounded-full text-sm">
                        Subscribe 
                        <span className="h-4 w-[1px] bg-black mx-2"></span>
                        <span>187K</span>
                    </button>
                </div>

                {/* Improve this section */}
                {/* <div className="mx-4 mt-6">
                    <div className="text-xl">
                        Michael Faraday
                    </div>
                    <div className="text-sm text-cool-gray mb-3">@michaelfaraday</div>
                    <div className="">
                        182K subscribers • 32 videos
                    </div>
                    <div>
                        Software developer by day, gamer also by day. At night, I sleep.
                    </div>
                </div> */}

                {/* Channel Info Section */}
                <div className="mt-6 space-y-1 px-4">
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



            


            <div className="h-full">

            </div>

        </div>
    )
}
export default Profile






