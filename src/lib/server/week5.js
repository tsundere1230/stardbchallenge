const answers = [/^seismo.*$/i, /^golden\s*hour$/i, /^firefly$/i, /^(hachi\s*dan|八段)$/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^principle(s)?$/i, s: "Normally those are the principles around yin and yang.<br>They also have a different name, telling you how many lines they have :D" },
        { r: /^trigram(s)?$/i, s: "Trigrams have 3 lines, these ones have 6 :think:.<br>What could their name be?" },
        { r: /^hexagram(s)?$/i, s: "<a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Hexagram_(I_Ching)\">https://en.wikipedia.org/wiki/Hexagram_(I_Ching)</a>" },
        { r: /^viewing$/i, s: "You got the first hexagram :D" },
        { r: /^ground$/i, s: "You got the second hexagram :D" },
        { r: /^shake$/i, s: "You got the third hexagram :D" },
        { r: /^force$/i, s: "You got the fourth hexagram :D" },
        { r: /^viewing\s*ground\s*shake\s*force$/i, s: "Well with what do you view the ground shake force?" },
    ],
    [
        { r: /^groundhole$/i, s: "NO BRO NOT LIKE THIS"},
        { r: /^01vynrichter$/i, s: "no, and, how many MC's are there in ToT?"},
        { r: /^01rosa$/i, s: "yes, from tears of themis" },
        { r: /^02coquelic$/i, s: "my love..." },
        { r: /^03hanya$/i, s: "i was worried you would not get this one" },
        { r: /^04horus$/i, s: "if you are a year 1 player this birb carried you far" },
        { r: /^05shalom/i, s: "my love...'s love... sigh... always thirdwheeling" },
        { r: /^05kafka/i, s: "ok youre funny alright!!" },
        { r: /^05makima/i, s: "ok youre funny alright!!" },
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
    ],
    [
        { r: /^one\s*ok\s*rock$/i, s: "<a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/One_Ok_Rock_discography\">https://en.wikipedia.org/wiki/One_Ok_Rock_discography</a>" },
        { r: /^eye\s*of\s*the\s*storm$/i, s: "That's the first album!" },
        { r: /^beam\s*of\s*light$/i, s: "That's the second album!" },
        { r: /^jinsei\s*.\s*boku.$/i, s: "That's the third album!" },
        { r: /^change$/i, s: "That's the first track title!<br>Keep this in mind, when trying to get to the final answer" },
        { r: /^crazy\s*botch$/i, s: "That's the second track title!<br>From now on you should read it as CRAZYBOTCH" },
        { r: /^be\s*the\s*light$/i, s: "That's the third track title!<br>From now on you should read it as BETHELIGHT" },
    ]
];

const congrats = `
no copy pasta, i just wanted to sincerely thank you for making it to the end of this challenge, and any of the challenges before! i hope you will have fun with all the challenges by others to come! :MarchHype:
`;

export default { answers, hints, congrats };
