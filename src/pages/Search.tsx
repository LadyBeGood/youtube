import { useNavigate } from "react-router-dom"


const history = [
    { name: "fireship",                 preview: "./thumbnail1.webp" },
    { name: "bit manipulation",         preview: "" },
    { name: "bihar news live",          preview: "" },
    { name: "unbox therapy",            preview: "" },
    { name: "rechargeable led bulb",    preview: "" },
    { name: "kapil sharma",             preview: "" },
    { name: "teded",                    preview: "" },
    { name: "hyperplexed",              preview: "" },
    { name: "t3gg",                     preview: "" },
    { name: "valid parenthesis string", preview: "" },
    { name: "candy leetcode",           preview: "" },
    { name: "lemonade change",          preview: "" },
    { name: "meeting rooms iii",        preview: "" },
    { name: "meeting rooms",            preview: "" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
    { name: "insert intervals", preview: "./thumbnail1.webp" },
]


const Search = () => {
    const navigate = useNavigate();


    return (
        <div className="py-3 grid h-full overflow-hidden">
            <div className="flex gap-3 pb-2 px-4 ">
                <button className="grid place-items-center cursor-pointer" onClick={() => window.history.state.idx ? navigate(-1) : navigate("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="currentColor"><path d="m276.85-460 231.69 231.69L480-200 200-480l280-280 28.54 28.31L276.85-500H760v40H276.85Z" /></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg> */}
                </button>
            
                <input type="search" name="idk" id="" className="bg-dark-gray placeholder:text-dark-silver grow rounded-full px-4 py-1" placeholder="Search YouTube" />
                
                <button className="grid place-items-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2212 13.423C9.74042 13.0385 9.5 12.5642 9.5 12V6C9.5 5.43583 9.74042 4.9615 10.2212 4.577C10.7019 4.19233 11.2948 4 12 4C12.7052 4 13.2981 4.19233 13.7787 4.577C14.2596 4.9615 14.5 5.43583 14.5 6V12C14.5 12.5642 14.2596 13.0385 13.7787 13.423C13.2981 13.8077 12.7052 14 12 14C11.2948 14 10.7019 13.8077 10.2212 13.423ZM11.5 20.5V16.9827C9.93333 16.8391 8.625 16.1987 7.575 15.0615C6.525 13.9243 6 12.5705 6 11H7C7 12.3833 7.4875 13.5625 8.4625 14.5375C9.4375 15.5125 10.6167 16 12 16C13.3833 16 14.5625 15.5125 15.5375 14.5375C16.5125 13.5625 17 12.3833 17 11H18C18 12.5705 17.475 13.9243 16.425 15.0615C15.375 16.1987 14.0667 16.8391 12.5 16.9827V20.5H11.5Z" fill="#E3E3E3" />
                    </svg>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M423.08-463.08Q400-486.15 400-520v-240q0-33.85 23.08-56.92Q446.15-840 480-840t56.92 23.08Q560-793.85 560-760v240q0 33.85-23.08 56.92Q513.85-440 480-440t-56.92-23.08ZM460-140v-140.69q-94-8.62-157-76.85-63-68.23-63-162.46h40q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h40q0 94.23-63 162.46t-157 76.85V-140h-40Z" /></svg> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff"><path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm45 315v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z" /></svg> */}
                </button>
            </div>


            <div className="overflow-auto no-scrollbar">
                {history.map(({ name, preview }) =>
                    <div className="flex items-center gap-2 hover:bg-white/10 h-14 px-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="currentColor"><path d="M478.46-160q-121.84 0-212.42-79.58Q175.46-319.15 161.23-440h40.46Q218-336.77 295.73-268.38 373.46-200 478.46-200q117 0 198.5-81.5t81.5-198.5q0-117-81.5-198.5T478.46-760q-62.08 0-116.69 26.23-54.62 26.23-96.39 72.23h99.24v40H198.46v-166.15h40v95.54q46.39-50.93 108.73-79.39Q409.54-800 478.46-800q66.54 0 124.73 25.04t101.69 68.54q43.5 43.5 68.54 101.69 25.04 58.19 25.04 124.73t-25.04 124.73q-25.04 58.19-68.54 101.69-43.5 43.5-101.69 68.54Q545-160 478.46-160Zm128.16-165.85L460.77-471.69V-680h40v191.69l134.15 134.16-28.3 28.3Z" /></svg>
                        </div>
                        <div className="grow flex justify-between items-center">
                            <div>{name}</div>
                            {preview && <div className="h-10 overflow-hidden">
                                <img className="h-full " src={preview} alt="" />
                            </div>}
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m712.46-268.46-404-403.23V-300h-40v-440h440v40H336.77L740-296l-27.54 27.54Z" /></svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M704-240 320-624v344h-80v-480h480v80H376l384 384-56 56Z" /></svg> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search
