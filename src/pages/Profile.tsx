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
        <div className="grid grid-rows-[auto_1fr]">
            <div className="relative h-48">
                <img src="./thumbnail1.webp" alt="background" className="w-full h-24 block object-cover" />
                <div className="grid place-items-center absolute -translate-1/2 left-1/2 ">
                    <img src="./avatar1.webp" className="rounded-full block  border-black border-5" alt="" />

                    <p className="text-xl">Michael Faraday</p>
                    <p className="text-sm text-cool-gray">@michaelfaraday</p>
                </div>
            </div>
            <div className="h-full">

            </div>

        </div>
    )
}
export default Profile






