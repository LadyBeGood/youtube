const Profile = () => {
    return (
        <div className="grid grid-rows-[auto_1fr]">
            <div className="relative h-80">
                <img src="./thumbnail1.webp" alt="background" className="w-full h-32 block object-cover" />
                <div className="grid place-items-center absolute -translate-1/2 left-1/2 ">
                    <img src="./avatar1.webp" className="rounded-full block  border-black border-5" alt="" />

                    <p className="text-xl">Michael Faraday</p>
                    <p className="text-sm text-gray-400">@michaelfaraday</p>

                </div>
            </div>
            <div></div>
        </div>
    )
}
export default Profile