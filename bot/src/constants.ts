export const enum LobbyRegion {
    ASIA = "Asia",
    NORTH_AMERICA = "North America",
    EUROPE = "Europe",
}

export const enum SessionState {
    LOBBY = "lobby",
    PLAYING = "playing",
    DISCUSSING = "discussing",
}

export const SERVER_IPS = {
    [LobbyRegion.EUROPE]: "172.105.251.170",
    [LobbyRegion.NORTH_AMERICA]: "198.58.99.71",
    [LobbyRegion.ASIA]: "139.162.111.196",
};

export const SHORT_REGION_NAMES = {
    [LobbyRegion.EUROPE]: "EU",
    [LobbyRegion.NORTH_AMERICA]: "NA",
    [LobbyRegion.ASIA]: "AS",
};

export const COLOR_EMOTES: { [key: number]: string } = {
    [0]: process.env.crewmate_red!,
    [1]: process.env.crewmate_blue!,
    [2]: process.env.crewmate_green!,
    [3]: process.env.crewmate_pink!,
    [4]: process.env.crewmate_orange!,
    [5]: process.env.crewmate_yellow!,
    [6]: process.env.crewmate_black!,
    [7]: process.env.crewmate_white!,
    [8]: process.env.crewmate_purple!,
    [9]: process.env.crewmate_brown!,
    [10]: process.env.crewmate_cyan!,
    [11]: process.env.crewmate_lime!,
};

export const DEAD_COLOR_EMOTES: { [key: number]: string } = {
    [0]: process.env.crewmate_red_dead!,
    [1]: process.env.crewmate_blue_dead!,
    [2]: process.env.crewmate_green_dead!,
    [3]: process.env.crewmate_pink_dead!,
    [4]: process.env.crewmate_orange_dead!,
    [5]: process.env.crewmate_yellow_dead!,
    [6]: process.env.crewmate_black_dead!,
    [7]: process.env.crewmate_white_dead!,
    [8]: process.env.crewmate_purple_dead!,
    [9]: process.env.crewmate_brown_dead!,
    [10]: process.env.crewmate_cyan_dead!,
    [11]: process.env.crewmate_lime_dead!,
};

export const BOT_INVITE_LINK =
    "https://discord.com/api/oauth2/authorize?client_id=755520374510321745&permissions=21261521&scope=bot";

export const COLOR_EMOTE_IDS = Object.values(COLOR_EMOTES).map(x => x.split(":")[1]);

export const EMOTE_IDS_TO_COLOR: { [key: string]: number } = {};
Object.entries(COLOR_EMOTES).forEach(x => (EMOTE_IDS_TO_COLOR[x[1].split(":")[1]] = +x[0]));

export const GROUPING_DISABLED_EMOJI = process.env.GROUPING_DISABLED_EMOJI!;
export const GROUPING_ENABLED_EMOJI = process.env.GROUPING_ENABLED_EMOJI!;
export const GROUPING_TOGGLE_EMOJI = process.env.GROUPING_TOGGLE_EMOJI!;
export const LEAVE_EMOJI = process.env.LEAVE_EMOJI!;
