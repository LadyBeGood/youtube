import ThinPlaylistCard from "../../components/Cards/ThinPlaylistCard";
import { playlists } from "../../database/playlist";


export default function Playlists() {
    return (
        <div >
            <div className="h-12 flex justify-between items-center my-2 px-3">
                <div className="flex gap-2 text-sm">
                    {["Recently updated", "Alphabetical"].map((item, i) =>
                        <button className={`whitespace-nowrap box-content px-2.5 py-1.5 rounded-lg text-sm
                                ${i === 0 ? "bg-white text-dark-gray" : " text-white"}`}>
                            {item}
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {playlists.map((playlist) => <ThinPlaylistCard key={playlist.title} title={playlist.title} thumbnailURL={playlist.thumbnailURL} updatedAt={playlist.updatedAt} videoCount={playlist.videoCount} />)}
            </div>
        </div>
    );
}
