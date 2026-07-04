import { Link, useNavigate } from "react-router-dom"
import { BackIcon, HistoryIcon, MicrophoneIcon, NorthWestArrowIcon } from "../components/Icons";
import { searchHistory } from "../database/searchHistory";


export default function Search() {
    const navigate = useNavigate();

    return (
        <div className="py-3 grid h-full overflow-hidden">
            <div className="flex gap-3 pb-2 px-4 ">
                <button className="grid place-items-center cursor-pointer" onClick={() => window.history.state.idx ? navigate(-1) : navigate("/")}>
                    <BackIcon />
                </button>

                <input type="search" name="idk" id="" className="bg-(--dark-gray) placeholder:text-(--dark-silver) grow rounded-full px-4 py-1" placeholder="Search YouTube" />

                <button className="grid place-items-center">
                    <MicrophoneIcon />
                </button>
            </div>


            <div className="overflow-auto no-scrollbar">
                {searchHistory.map(({ name, preview, id }) =>
                    <Link to="/results" key={id} className="flex items-center gap-2 hover:bg-white/10 h-14 px-4">
                        <div>
                            <HistoryIcon />
                        </div>
                        <div className="grow flex justify-between items-center">
                            <div>{name}</div>
                            {preview && <div className="h-10 overflow-hidden">
                                <img className="h-full " src={preview} alt="" />
                            </div>}
                        </div>
                        <div>
                            <NorthWestArrowIcon size={22} />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

