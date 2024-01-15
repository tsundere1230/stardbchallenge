import Question1 from "$lib/week2/Question1.svelte";
import Question2 from "$lib/week2/Question2.svelte";
import Question3 from "$lib/week2/Question3.svelte";
import Congrats from "$lib/week2/Congrats.svelte";

const components = [Question1, Question2, Question3, Congrats];

const answers = ["emergency", "540", "spotlights"];

/** @type {{ [key: string]: string }[]} */
const hints = [{ "65": "Correct Radius", "270": "Correct Argument" }, {}, { "even": "Very good, but that's just the first step :smug:" }]

export default { components, answers, hints };