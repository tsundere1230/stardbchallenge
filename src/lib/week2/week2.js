import Question1 from "$lib/week2/Question1.svelte";
import Question2 from "$lib/week2/Question2.svelte";

let answers = ["emergency", "560"];

let questions = [Question1, Question2];

let congrats = `I can't take it anymore. I'm sick of Xiangling. I try to play Diluc. My Xiangling deals more damage. I try to play Yoimiya. My Xiangling deals more damage. I try to play Cyno. My Xiangling deals more damage. I want to play Klee. Her best team has Xiangling. I want to play Raiden, Childe - they both want Xiangling. She grabs me by the throat. I fish for her. I cook for her. I give her the Catch. She isn't satisfied. I pull Engulfing Lightning. "I don't need this much er" She tells me. "Give me more field time." She grabs Bennett and forces him to throw himself off enemies. "You just need to funnel me more. I can deal more damage with Homa." I can't pull for Homa, I don't have enough primogems. She grabs my credit card. It declines. "Guess this is the end." She grabs Gouba. She says "Gouba, get them." There is no hint of sadness in his eyes. Nothing but pure, no icd pyro application. What a cruel world.`;

let week2 = { questions, answers, congrats };

export default week2;