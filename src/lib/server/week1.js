// @ts-ignore
import Question1 from "$lib/week1/Question1.svelte.md";
// @ts-ignore
import Question2 from "$lib/week1/Question2.svelte.md";
// @ts-ignore
import Question3 from "$lib/week1/Question3.svelte.md";
// @ts-ignore
import Question4 from "$lib/week1/Question4.svelte.md";
// @ts-ignore
import Congrats from "$lib/week1/Congrats.svelte.md";

const components = [Question1, Question2, Question3, Question4, Congrats];
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

export default { components, answers, hints };
