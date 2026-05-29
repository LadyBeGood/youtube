

type ThinShortsCardProps = {
    thumbnail: string;
    title: string;
}

export default function ThinShortsCard({ thumbnail, title }: ThinShortsCardProps) {
    return (
        <div className="w-full">
            <div className="relative">
                <img className="object-cover aspect-[2/3] w-full" src={thumbnail} alt="thumbnail" />
            </div>
        </div>
    )
}