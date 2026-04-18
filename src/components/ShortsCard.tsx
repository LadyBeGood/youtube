import { MoreIcon, FilledShortsIcon } from "./Icons";



type ShortsCardProps = {
    thumbnail: string;
    title: string;
}


export default function ShortsCard({ thumbnail, title }: ShortsCardProps) {
    return (
        <div className="relative grid grid-cols-[4fr_6fr] gap-3">
            <div className="relative">
                <img className="object-cover aspect-[2/3] w-full" src={thumbnail} alt="thumbnail" />
                
                <div className="absolute bottom-1 right-1 bg-black/80 p-1 rounded">
                    <FilledShortsIcon size={16} />
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <div className="flex justify-between">
                    <div className="text-sm line-clamp-3">
                        {title}
                    </div>
                    <MoreIcon className="shrink-0 mr-1 px-1.5 box-content" size={20} />
                </div>

                <div className="mb-1 flex items-center gap-2">
                    <div className="w-8 h-8">
                        <img className="rounded-full" src="./avatar3.jpg" alt="" />
                    </div>
                    <div>
                        <p className="text-sm  text-white leading-none mb-1">Michael Faraday</p>
                        <p className="text-xs text-cool-gray mt-0.5 select-none">2.1M views · 5 days ago</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
