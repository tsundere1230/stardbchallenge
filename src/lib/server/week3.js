const answers = [
    /^wood\s*ox\s*1985$/i,
    /^2341830930900800$/,
    /^star$/i,
    /^firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitskaracabazcat$/i,
    /^brains$/i,
];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [],
    [
        { r: /^(?!2).*/i, s: "Xicui floor is wrong" },
        { r: /^(?!23).*/i, s: "Yanming floor is wrong" },
        { r: /^(?!234).*/i, s: "Yukong floor is wrong" },
        { r: /^(?!2341).*/i, s: "Wen Furui floor is wrong" },
        { r: /^(?!2341830).*/i, s: "Xicui time is wrong" },
        { r: /^(?!2341830930).*/i, s: "Yanming time is wrong" },
        { r: /^(?!2341830930900).*/i, s: "Yukong time is wrong" },
        { r: /^(?!2341830930900800).*/i, s: "Wen Furui time is wrong" },
    ],
    [],
    [
        { r: /^(?!fire).*/i, s: "1 is wrong" },
        { r: /^(?!firepig).*/i, s: "2 is wrong" },
        { r: /^(?!firepigrat).*/i, s: "3 is wrong" },
        { r: /^(?!firepigratgoat).*/i, s: "4 is wrong" },
        { r: /^(?!firepigratgoatearth).*/i, s: "5 is wrong" },
        { r: /^(?!firepigratgoatearthhorse).*/i, s: "6 is wrong" },
        { r: /^(?!firepigratgoatearthhorsedog).*/i, s: "7 is wrong" },
        {
            r: /^(?!firepigratgoatearthhorsedogwood).*/i,
            s: "8 (Horizontal) is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwater).*/i,
            s: "8 (Vertical) is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnake).*/i,
            s: "9 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetal).*/i,
            s: "10 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragon).*/i,
            s: "11 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontiger).*/i,
            s: "12 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkey).*/i,
            s: "13 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyrooster).*/i,
            s: "14 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbit).*/i,
            s: "15 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitskaracabaz).*/i,
            s: "16 (Horizontal) is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitskaracabazcat).*/i,
            s: "16 (Vertical) is wrong",
        },
    ],
    [
        {
            r: /^skip*/i,
            s: "After some consideration I have come to the conclusion, that you should work at least a little to pass :D<br/>For starters how about adding the magic word (don't overthink this) before skip",
        },
        {
            r: /^please\s*skip*/i,
            s: "Good good. Beg some more hehe 😏. Double the amount of magic words!",
        },
        {
            r: /^please\s*please\s*skip*/i,
            s: "😳 Double it again!",
        },
        {
            r: /^please\s*please\s*please\s*please\s*skip*/i,
            s: "well, thiS sHouldn't be too eAsy, becuase i put in a lot of work in My challEnge. 😈",
        },
        {
            r: /^please\s*please\s*please\s*please\s*please\s*please\s*please\s*please\s*skip*/i,
            s: "WOAH. Too much!!! Go back go back!!! 😱",
        },
        {
            r: /^shame/i,
            s: "Yes. You should feel shame 🥺. Well to make it up you better know my favourite fruit!",
        },
        {
            r: /^apple/i,
            s: "Really..? 😔",
        },
        {
            r: /^mango/i,
            s: "Have you ever asked yourself, how long this will go on? 🤔<br/>Having to wait 20sec every time. Might've been faster to just do the challenge.<br/>Either way go check my roles on discord",
        },
        {
            r: /^competitive\s*fox\s*enjoyer/i,
            s: "Well since you're already on discord, you might as well execute chive bots /register command with 420 as the uid 😎👌",
        },
        {
            r: /^💧$/,
            s: "Did you know, that koalas have smooth _ _ _ _ _ _? Maybe you should use yours too! (Okay sorry that way rude)",
        },
        {
            r: /^brain$/i,
            s: "Use the plural form 😌",
        },
        {
            r: /^morse$/i,
            s: "We do indeed need morse code to solve this challenge",
        },
        {
            r: /^(?=[einort]{6}$)(?!.*(.).*\1).*$/i,
            s: "Good good. You found the six letters, that are contained in each word.<br/>Try replacing them with blanks",
        },
    ],
];

const congrats = ` 
TEMP
`;

export default { answers, hints, congrats };
