export default function ShopCard({ name, price, src }) {
    return (
        <div className="cursor-pointer transition-colors overflow-hidden ">
            <div className="w-full flex items-center justify-center aspect-square">
                <img src={src} alt="" />
            </div>
            <div className="px-1 py-2">
                <p className="text-sm text-white mt-0.5">{name}</p>
                <p className="text-[12px] text-(--cool-gray) mt-0.5">{price}</p>
            </div>
        </div>
    );
}
