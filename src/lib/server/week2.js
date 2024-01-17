import Question1 from "$lib/week2/Question1.svelte.md";
import Question2 from "$lib/week2/Question2.svelte.md";
import Question3 from "$lib/week2/Question3.svelte.md";
import Congrats from "$lib/week2/Congrats.svelte.md";

const components = [Question1, Question2, Question3, Congrats];

const answers = [/^emergency$/i, /^540$/, /^spotlights$/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^6[34]$/, s: "Correct Radius" },
        { r: /^270$/, s: "Correct Angle" },
    ],
    [{ r: /^(52[5-9]|5[34][0-9]|55[0-5])$/, s: "Correct, the answer is 540." }],
    [{ r: /^even$/i, s: "Very good, but that's just the first step :smug:" }],
];

export default { components, answers, hints };
