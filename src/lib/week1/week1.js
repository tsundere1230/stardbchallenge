import Question1 from "$lib/week1/Question1.svelte";
import Question2 from "$lib/week1/Question2.svelte";
import Question3 from "$lib/week1/Question3.svelte";
import Question4 from "$lib/week1/Question4.svelte";

let answers = ["9702", "24000", "88050", "cryptic"];

let questions = [Question1, Question2, Question3, Question4];

let week1 = {questions, answers};


export default week1;