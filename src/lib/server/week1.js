import Question1 from "$lib/week1/Question1.svelte";
import Question2 from "$lib/week1/Question2.svelte";
import Question3 from "$lib/week1/Question3.svelte";
import Question4 from "$lib/week1/Question4.svelte";
import Congrats from "$lib/week1/Congrats.svelte";

const components = [Question1, Question2, Question3, Question4, Congrats];
const answers = ["9702", "24000", "88050", "cryptic"];

/** @type {{ [key: string]: string }[]} */
const hints = [
    { "1": "Yukong Children is 1.", "3": "Playable Stellaron Hunters is 3.", "9701.999975": "Lols the beta tester expected this so you're getting this cheeky message!" },
    { "5": "Kafka's VA is 5", "60": "60 is a correct value", "150": "150 is a correct value.", "400": "400 is a correct value." },
    { "200": "IPC is NOT 200", "300": "IPC is 300" },
    {}
];

export default { components, answers, hints };