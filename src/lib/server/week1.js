const answers = [/^9702$/, /^24000$/, /^88050$/, /^cryptic$/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^1$/, s: "Yukong Children is 1." },
        { r: /^3$/, s: "Playable Stellaron Hunters is 3." },
        {
            r: /^9701.999975$/,
            s: "Lols the beta tester expected this so you're getting this cheeky message!",
        },
    ],
    [
        { r: /^5$/, s: "Kafka's VA is 5" },
        { r: /^60$/, s: "60 is a correct value" },
        { r: /^150$/, s: "150 is a correct value." },
        { r: /^400$/, s: "400 is a correct value." },
    ],
    [
        { r: /^200$/, s: "IPC is NOT 200" },
        { r: /^300$/, s: "IPC is 300" },
    ],
    [],
];

const congrats = `👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌th 👌 ere👌👌👌 right✔there ✔✔if i do ƽaү so my sel ｆ 💯 i say so 💯 thats what im talking about right there right there(chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0Оଠ Ｏ OO Ｏ OОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit
<br /><br />
Congrats nerd!
<br /><br />
Now screenshot this page to prove that you have completed the challenge. :)
`;

export default { answers, hints, congrats };
