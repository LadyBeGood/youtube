import { settings } from "../database/settings";

const sectionTitles: Record<string, string> = {
    accountSettings: "Account",
    videoAndAudioSettings: "Video and Audio",
    helpAndPolicySettings: "Help and Policy",
};

export default function Settings() {
    return (
        <div className="py-8 w-full overflow-x-hidden space-y-8 no-scrollbar">
            {Object.entries(settings).map(([settingType, typeSettings]) => 
                <div key={settingType}>
                    <div className="text-xl font-medium mb-3 px-4">{sectionTitles[settingType] ?? settingType}</div>
                    
                    <div className="">
                        {typeSettings.map(setting => 
                            <button key={setting.id} className="flex h-13 items-center gap-4 hover:bg-white/20 w-full px-4">
                                <setting.icon size={28} />
                                <div>
                                    {setting.title}
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
