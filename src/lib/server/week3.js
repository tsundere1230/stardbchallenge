const answers = [
    /^woodox1985$/i,
    /^2341830930900800$/,
    /^star$/i,
    /^firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitskaracabazcat$/i,
    /^brains$/i,
];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [],
    [
        { r: /^(?!2).*$/i, s: "Xicui floor is wrong" },
        { r: /^(?!23).*$/i, s: "Yanming floor is wrong" },
        { r: /^(?!234).*$/i, s: "Yukong floor is wrong" },
        { r: /^(?!2341).*$/i, s: "Wen Furui floor is wrong" },
        { r: /^(?!2341830).*$/i, s: "Xicui time is wrong" },
        { r: /^(?!2341830930).*$/i, s: "Yanming time is wrong" },
        { r: /^(?!2341830930900).*$/i, s: "Yukong time is wrong" },
        { r: /^(?!2341830930900800).*$/i, s: "Wen Furui time is wrong" },
    ],
    [],
    [
        { r: /^(?!fire).*$/i, s: "1 is wrong" },
        { r: /^(?!firepig).*$/i, s: "2 is wrong" },
        { r: /^(?!firepigrat).*$/i, s: "3 is wrong" },
        { r: /^(?!firepigratgoat).*$/i, s: "4 is wrong" },
        { r: /^(?!firepigratgoatearth).*$/i, s: "5 is wrong" },
        { r: /^(?!firepigratgoatearthhorse).*$/i, s: "6 is wrong" },
        { r: /^(?!firepigratgoatearthhorsedog).*$/i, s: "7 is wrong" },
        {
            r: /^(?!firepigratgoatearthhorsedogwood).*$/i,
            s: "8 (Horizontal) is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwater).*$/i,
            s: "8 (Vertical) is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnake).*$/i,
            s: "9 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetal).*$/i,
            s: "10 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragon).*$/i,
            s: "11 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontiger).*$/i,
            s: "12 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkey).*$/i,
            s: "13 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyrooster).*$/i,
            s: "14 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbit).*$/i,
            s: "15 is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitskaracabaz).*$/i,
            s: "16 (Horizontal) is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitskaracabazcat).*$/i,
            s: "16 (Vertical) is wrong",
        },
    ],
    [
        {
            r: /^skip$/i,
            s: "After some consideration I have come to the conclusion, that you should work at least a little to pass :D<br/>For starters how about adding the magic word (don't overthink this) before skip",
        },
        {
            r: /^pleaseskip$/i,
            s: "Good good. Beg some more hehe 😏. Double the amount of magic words!",
        },
        {
            r: /^pleasepleaseskip$/i,
            s: "😳 Double it again!",
        },
        {
            r: /^pleasepleasepleasepleaseskip$/i,
            s: "well, thiS sHouldn't be too eAsy, becuase i put in a lot of work in My challEnge. 😈",
        },
        {
            r: /^pleasepleasepleasepleasepleasepleasepleasepleaseskip$/i,
            s: "WOAH. Too much!!! Go back go back!!! 😱",
        },
        {
            r: /^shame$/i,
            s: "Yes. You should feel shame 🥺. Well to make it up you better know my favourite fruit!",
        },
        {
            r: /^apple$/i,
            s: "Really..? 😔",
        },
        {
            r: /^mango$/i,
            s: "Have you ever asked yourself, how long this will go on? 🤔<br/>Having to wait 20sec every time. Might've been faster to just do the challenge.<br/>Either way go check my roles on discord",
        },
        {
            r: /^competitivefoxenjoyer$/i,
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
I am down 😩😩 CATACLYSMIC 😩😩😩 for silver wolf 🐺🐺. Her monotone 😏😏 smugness 😏😏, her just barely not 🫓🫓 flat 🫓🫓 chest, her cute face 😳😳😳. But all of those combined do ❎❎ nothing ❎❎❎ to me compared to her 🩳🩳 shorts 🩳🩳🩳. Sure there's the obvious of them framing her 🍑🍑 tight butt 🍑🍑  perfectly 🔥🔥🔥🔥, but this just scratches the surface 😳😳. Them being casually unbuttoned 😳😳, ready to slip 🍌🍌off at any time. The little straps 🎀🎀 hugging her delicious thighs 🦶🦶. But what really gets me going? The sides are 🐟🐟 fish 🐟🐟 nets. The sides of her 🩳🩳 shorts 🩳🩳 are 🐟 🥅 f i s h n e t s 🐟 🥅. You can see everything 😳😳. Might as well be wearing a qipao. What kind of 🩳🩳 shorts🩳🩳 are like that? 🔥🔥🔥 Its so slutty for no reason. She isn't wearing 🩲🩲 panties 🩲🩲 . When she 🏃‍♀️🏃‍♀️ sprints 🏃‍♀️🏃‍♀️ you can really tell how much of her 🍑🍑 cheeks 🍑🍑they show. It's amazing. I can't even play as her in 🌍🌍 overworld 🌍🌍 cause i get so horny😳😳. Mihoyo are truly geniuses 🧠🧠. Someone help me I just can't stop staring  at Silver Wolf's shorts 🐺🩳
<br /><br />
Are you wondering WTF did you just read? well me too...anyways you have completed the challenge!!
<br /><br />
Now take the screenshot of....whatever this is and send it in the ticket...oh and don't be naughty!
`;

export default { answers, hints, congrats };
