const answers = [
    /^firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitscaracabazcat$/i,
];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
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
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitscaracabaz).*/i,
            s: "16 (Horizontal) is wrong",
        },
        {
            r: /^(?!firepigratgoatearthhorsedogwoodwatersnakemetaldragontigermonkeyroosterrabbitscaracabazcat).*/i,
            s: "16 (Vertical) is wrong",
        },
    ],
];

const congrats = ` 
TEMP
`;

export default { answers, hints, congrats };
