import { useNavigate } from "react-router-dom"


const history = [
    {name: "fireship", preview: "./src/assets/thumbnail1.webp"},
    {name: "bit manipulation", preview: "./src/assets/thumbnail1.webp"},
    {name: "bihar news live", preview: "./src/assets/thumbnail1.webp"},
    {name: "unbox therapy", preview: "./src/assets/thumbnail1.webp"},
    {name: "rechargeable led bulb", preview: "./src/assets/thumbnail1.webp"},
    {name: "kapil sharma", preview: "./src/assets/thumbnail1.webp"},
    {name: "teded", preview: "./src/assets/thumbnail1.webp"},
    {name: "hyperplexed", preview: "./src/assets/thumbnail1.webp"},
    {name: "t3gg", preview: "./src/assets/thumbnail1.webp"},
    {name: "valid parenthesis string", preview: "./src/assets/thumbnail1.webp"},
    {name: "candy leetcode", preview: "./src/assets/thumbnail1.webp"},
    {name: "lemonade change", preview: "./src/assets/thumbnail1.webp"},
    {name: "meeting rooms iii", preview: "./src/assets/thumbnail1.webp"},
    {name: "meeting rooms", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
    {name: "insert intervals", preview: "./src/assets/thumbnail1.webp"},
]


const Search = () => {
    const navigate = useNavigate();


    return (
        <div className="py-3 grid h-full overflow-hidden">
            <div className="flex gap-3 pb-4 px-4 ">
                <button className="grid place-items-center cursor-pointer" onClick={() => window.history.state.idx ? navigate(-1) : navigate("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                </button>
                <input type="search" name="idk" id="" className="bg-eerie-black placeholder:text-dark-silver grow rounded-full px-4 py-1" placeholder="Search YouTube"/>
                <div className="grid place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff"><path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm45 315v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z" /></svg>
                </div>
            </div>

            
            <div className="flex flex-col px-4   gap-3 overflow-auto no-scrollbar">
                {history.map(({name, preview}) =>
                    <div className="flex items-center gap-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /></svg>
                        </div>
                        <div className="grow flex justify-between items-center">
                            <div>{name}</div>
                            <div className="h-10 overflow-hidden">
                                <img className="h-full " src={preview} alt="" />
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M704-240 320-624v344h-80v-480h480v80H376l384 384-56 56Z" /></svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search
