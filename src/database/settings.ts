import type { ComponentType } from "react"
import {
    SensorsIcon,
    SwitchAccountIcon,
    SettingsIcon,
    FamilyCenterIcon,
    TranslateIcon,
    LeaderboardIcon,
    HelpIcon,
    CommentIcon,
    ContractIcon,
    InfoIcon,
    DownloadIcon,
    LeafIcon,
    CaptionIcon,
    PlayIcon,
    HDIcon,
    AccessibilityIcon,
    TVIcon,
    NotificationsIcon,
    ExperimentalIcon,
    ConnectedIcon,
    LockIcon,
    IdentityIcon,
    HistoryIcon,
    ATMCardIcon,
    SellIcon,
    type IconProps,
} from "../components/Icons/Icons"



type Setting = {
    type: "setting",
    id: `${string}-setting-${number}`,
    title: string,
    icon: ComponentType<IconProps>,
}

export const accountSettings: Setting[] = [
    {
        type: "setting",
        id: "account-setting-1",
        title: "General",
        icon: SettingsIcon,
    },
    {
        type: "setting",
        id: "account-setting-2",
        title: "Switch or manage account",
        icon: SwitchAccountIcon,
    },
    {
        type: "setting",
        id: "account-setting-3",
        title: "Family Center",
        icon: FamilyCenterIcon,
    },
    {
        type: "setting",
        id: "account-setting-4",
        title: "Languages",
        icon: TranslateIcon,
    },
    {
        type: "setting",
        id: "account-setting-5",
        title: "Time management",
        icon: LeaderboardIcon,
    },
    {
        type: "setting",
        id: "account-setting-6",
        title: "Notifications",
        icon: NotificationsIcon,
    },
    {
        type: "setting",
        id: "account-setting-7",
        title: "Purchases and memberships",
        icon: SellIcon,
    },
    {
        type: "setting",
        id: "account-setting-8",
        title: "Billing and payments",
        icon: ATMCardIcon,
    },
    {
        type: "setting",
        id: "account-setting-9",
        title: "Manage all history",
        icon: HistoryIcon,
    },
    {
        type: "setting",
        id: "account-setting-10",
        title: "Your data in Youtube",
        icon: IdentityIcon,
    },
    {
        type: "setting",
        id: "account-setting-11",
        title: "Privacy",
        icon: LockIcon,
    },
    {
        type: "setting",
        id: "account-setting-12",
        title: "Connected apps",
        icon: ConnectedIcon,
    },
    {
        type: "setting",
        id: "account-setting-13",
        title: "Try experimental new features",
        icon: ExperimentalIcon,
    },
]

const videoAndAudioSettings: Setting[] = [
    {
        type: "setting",
        id: "video-and-audio-setting-1",
        title: "Quality",
        icon: HDIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-2",
        title: "Playback",
        icon: PlayIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-3",
        title: "Captions",
        icon: CaptionIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-4",
        title: "Data saving",
        icon: LeafIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-5",
        title: "Downloads",
        icon: DownloadIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-6",
        title: "Live chat",
        icon: SensorsIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-7",
        title: "Accessibility",
        icon: AccessibilityIcon,
    },
    {
        type: "setting",
        id: "video-and-audio-setting-8",
        title: "Watch on TV",
        icon: TVIcon,
    },
]

const helpAndPolicySettings: Setting[] = [
    {
        type: "setting",
        id: "help-and-policy-setting-1",
        title: "Help",
        icon: HelpIcon,
    },
    {
        type: "setting",
        id: "help-and-policy-setting-2",
        title: "Terms of Service",
        icon: ContractIcon,
    },
    {
        type: "setting",
        id: "help-and-policy-setting-3",
        title: "Send feedback",
        icon: CommentIcon,
    },
    {
        type: "setting",
        id: "help-and-policy-setting-4",
        title: "About",
        icon: InfoIcon,
    },
]

export const settings = {
    accountSettings,
    videoAndAudioSettings,
    helpAndPolicySettings,
}