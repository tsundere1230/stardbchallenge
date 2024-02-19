const answers = [/^golden\s*hour$/i, /^firefly$/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^01rosa$/i, s: "yes, from tears of themis" },
        { r: /^02coquelic$/i, s: "my love..." },
        { r: /^03hanya$/i, s: "i was worried you would not get this one"},
        { r: /^04horus$/i, s: "if you are a year 1 player this birb carried you far" },
        { r: /^05shalom/i, s: "my love...'s love... sigh... always thirdwheeling" },
        { r: /^06yuiyagi/i, s: "mahjong good" },
        { r: /^07redhood/i, s: "yes, and i don't play nikke so i apologise if she has alternate names" },
        { r: /^08shizukuhinomori$/i, s: "yes" },
        { r: /^09wriothesley$/i, s: "yes" },
        { r: /^10mashukyrielight/i, s: "yes and sometimes the spelling can differ based on who you ask, sorry :(" },
    ],
    [
        { r: /^(chentingting)|(tingtingchen)$/i, s: "that is indeed Sushang.c" },
        { r: /^suzieyeung$/i, s: "that is indeed Makima.e" },
        { r: /^(kusunokitomori)|(tomorikusunoki)$/i, s: "that is Makima.j" },
        { r: /^(yuhye(-)?ji)$/i, s: "that is Yaoyao.k" },
        { r: /^(songyuanyuan|yuanyuansong)$/i, s: "that is Barbara.c" },
    ]
];

const congrats = `
no copy pasta, i just wanted to sincerely thank you for making it to the end of this challenge, and any of the challenges before! i hope you will have fun with all the challenges by others to come! :MarchHype:
`;

export default { answers, hints, congrats };
