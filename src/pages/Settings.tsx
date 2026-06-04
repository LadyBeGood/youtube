import { settings } from "../database/settings";

const sectionTitles: Record<string, string> = {
    accountSettings: "Account",
    videoAndAudioSettings: "Video and Audio",
    helpAndPolicySettings: "Help and Policy",
};

export default function Settings() {
    return (
        <div className="py-8 w-full overflow-x-hidden space-y-12 no-scrollbar px-4">
            {Object.entries(settings).map(([settingType, typeSettings]) => 
                <div key={settingType}>
                    <div className="text-xl font-medium mb-5">{sectionTitles[settingType] ?? settingType}</div>
                    
                    <div className="space-y-6">
                        {typeSettings.map(setting => 
                            <button key={setting.id} className="flex items-center gap-4">
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
