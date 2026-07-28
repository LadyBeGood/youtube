import { NavLink } from "react-router";
import { explores, type Explore } from "../../database/explores";
import { moreFromYoutube, type MoreFromYoutube } from "../../database/moreFromYoutube";
import { HomeIcon } from "../Icons/Icons";
import { routes, type Route } from "../../database/routes";




export default function SideBar() {
    return (
        <div className={"flex flex-col overflow-auto no-scrollbar transition-all pb-8 space-y-8"}>
            {
                Object.entries({ 
                    "": routes,
                    "Explore": explores, 
                    "More from Youtube": moreFromYoutube,
                }).map(([key, value]) =>
                    <div key={key}>
                        {key !== "" && 
                            <div className="text-xl font-medium mb-3 px-4">
                                {key}
                            </div>
                        }

                        {/* Too much hassel */}
                        {value.map((item: any) =>
                            <NavLink to={item.link ?? "#"} key={item.id} className={`flex h-14 items-center gap-4 hover:bg-white/20 w-full px-4`}>
                                {({ isActive }) => <>
                                    {isActive && item.filledIcon
                                        ? <item.filledIcon size={26} /> 
                                        : <item.icon size={26} /> 
                                    }

                                    <p>{item.title}</p>
                                </>}
                            </NavLink>
                        )}
                    </div>
                )
            }
        </div>
    )
}  