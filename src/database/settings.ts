import { 
    ExploreIcon, 
    Music2Icon, 
    ShoppingIcon, 
    MovieIcon, 
    TrendingIcon,
    SensorsIcon,
    GamingIcon,
    NewsIcon,
    TrophyIcon,
    EducationIcon,
    HangerIcon,
    PodcastIcon,
    GamepadCircleRightIcon,
    StarInsideCircleIcon,
    SwitchAccountIcon,
    SettingsIcon,
    FamilyCenterIcon,
    TranslateIcon,
} from "../components/Icons"

type Setting = {
    type: "setting",
    id: string,
    title: string,
    icon: any,
}

export const accountSettings: Setting[] = [
    {
        type: "setting",
        id: "setting-1",
        title: "General",
        icon: SettingsIcon,
    },
    {
        type: "setting",
        id: "setting-2",
        title: "Switch or manage account",
        icon: SwitchAccountIcon,
    },
    {
        type: "setting",
        id: "setting-3",
        title: "Family Center",
        icon: FamilyCenterIcon,
    },
    {
        type: "setting",
        id: "setting-4",
        title: "Languages",
        icon: TranslateIcon,
    },
    {
        type: "setting",
        id: "setting-5",
        title: "Time management",
        icon: SensorsIcon,
    },
    {
        type: "setting",
        id: "setting-6",
        title: "Notifications",
        icon: GamingIcon,
    },
    {
        type: "setting",
        id: "setting-7",
        title: "Purchases and memberships",
        icon: NewsIcon,
    },
    {
        type: "setting",
        id: "setting-8",
        title: "Billing and payments",
        icon: TrophyIcon,
    },
    {
        type: "setting",
        id: "setting-9",
        title: "Manage all history",
        icon: EducationIcon,
    },
    {
        type: "setting",
        id: "setting-10",
        title: "Your data in Youtube",
        icon: HangerIcon,
    },
    {
        type: "setting",
        id: "setting-11",
        title: "Privacy",
        icon: PodcastIcon,
    },
    {
        type: "setting",
        id: "setting-12",
        title: "Connected apps",
        icon: GamepadCircleRightIcon,
    },
    {
        type: "setting",
        id: "setting-13",
        title: "Try experimental new features",
        icon: StarInsideCircleIcon,
    },
]

const videoAndAudioSettings: Setting[] = [
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Quality",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Playback",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Captions",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Data saving",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Downloads",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Live chat",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Accessibility",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Watch on TV",
        icon: StarInsideCircleIcon,
    },
]

const helpAndPolicySettings: Setting[] = [
    {
        type: "setting",
        id: "help-and-policy-setting-1",
        title: "Help",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "help-and-policy-setting-1",
        title: "Terms of Service",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "help-and-policy-setting-1",
        title: "Send feedback",
        icon: StarInsideCircleIcon,
    },
    {
        type: "setting",
        id: "help-and-policy-setting-1",
        title: "About",
        icon: StarInsideCircleIcon,
    },
]

export const settings = {
    accountSettings,
    videoAndAudioSettings,
    helpAndPolicySettings,
}