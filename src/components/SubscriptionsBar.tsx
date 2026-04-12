
const subscriptions = [
    "melodysheep",
    "Fireship",
    "SuperSimpleDev",
    "Mud Flaps",
    "David P - Digital Art",
    "T E R A V I B E",
    "made from dreams",
    "Dandelion Medical Animation",
    "Dreksler Astral",
]

export default function SubscriptionsBar() {
    return (
        <nav className="flex no-scrollbar overflow-x-auto pb-3 px-3 flex-nowrap  h-25 ">
            {subscriptions.map((subscription, index) =>
                <button key={index} className="grid grid-rows-[1fr_20px] h-full place-items-center aspect-square">
                    <img src="./avatar.webp" alt="" className="h-full w-auto block rounded-full" />
                    <span className="block w-full px-2 text-xs truncate ">
                        {subscription}
                    </span>
                </button>
            )}
        </nav>
    )
}