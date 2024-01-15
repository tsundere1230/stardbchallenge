import Question1 from "$lib/week2/Question1.svelte";
import Question2 from "$lib/week2/Question2.svelte";
import Question3 from "$lib/week2/Question3.svelte";
import Congrats from "$lib/week2/Congrats.svelte";

const components = [Question1, Question2, Question3, Congrats];

const answers = [/emergency/i, /540/, /spotlights/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /65/, s: "Correct Radius" },
        { r: /270/, s: "Correct Argument" },
    ],
    [],
    [{ r: /even/, s: "Very good, but that's just the first step :smug:" }],
];

export default { components, answers, hints };
