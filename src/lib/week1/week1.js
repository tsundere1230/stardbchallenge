import Question1 from "$lib/week1/Question1.svelte";
import Question2 from "$lib/week1/Question2.svelte";
import Question3 from "$lib/week1/Question3.svelte";
import Question4 from "$lib/week1/Question4.svelte";

let answers = ["9702", "24000", "88050", "cryptic"];

let questions = [Question1, Question2, Question3, Question4];

/** @type {Array<{ [key: string]: string }>} */
let hints = [{}, {}, {}, {}]

let congrats = `👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit
                right👌👌th 👌 ere👌👌👌 right✔there ✔✔if i do ƽaү so my selｆ 💯 i
                say so 💯 thats what im talking about right there right there(chorus:
                    ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠＯOOＯOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯
                👌 👀 👀 👀 👌👌Good shit
                    < br /> <br />Congrats nerd! < br /> Now screenshot this page to prove that
                you have completed the challenge. :) `

let week1 = { questions, answers, congrats, hints };

export default week1;