import Question1 from "$lib/week2/Question1.svelte";
import Question2 from "$lib/week2/Question2.svelte";

let answers = ["emergency", "560"];

let questions = [Question1, Question2];

let congrats = `I can't take it anymore 😩😩😩 I'm sick of Remembrance 😩😩😩 I try to play HUNT. 🏹🏹🏹 My ❄️D1ss0c1at10n❄️ deals more 💪🏿💪🏿damage. I try to play PROPAGATION. My ❄️D1ss0c1at10n❄️ deals more 💪🏻💪🏻damage. I try to play NIHILITY. My ❄️D1ss0c1at10n❄️ deals more 💪💪damage. I want to play 🫣🫣🫣Ruan Mei🫣🫣🫣. Her best path is ❄️D1ss0c1at10n❄️. I want to play 👓Pela,🤝 Jingliu - they both want ❄️D1ss0c1at10n❄️. Fuli grabs me by the ✊throat✊. I discard Celestial🔫Annihilation for all the Rememberance ✨✨blessings. I spend all my cosmic fragments for 🎲rerolls🎲. He isn't satisfied. "Give me more EHR." He grabs Jingliu and ✊forces✊ her to run a defensive set. "You just need to survive👌👌👌. I can deal more damage with ❄️D1ss0c1at10n❄️." I can't pull for 🫣🫣Ruan Mei🫣🫣, I don't have enough ✨jades✨. He grabs my 💳credit card💳. It declines. "Guess this is the end." He ✊grabs ✊ Argenti👨‍🦰👨‍🦰. He says "Argenti👨‍🦰👨‍🦰, one shot them on D5 Con12." There is no hint of sadness in his 👀eyes👀. Nothing but pure, 30% max health damage. What a cruel world🌍🌍.

<br/> Congrats 🤓🤓nerd!  Now screenshot this 📃📃page to prove that you have completed✅✅ the ✖️challenge➗`

/** @type {Array<{ [key: string]: string }>} */
let hints = [{ "65": "Correct Radius", "270": "Correct Argument" }, {}]

let week2 = { questions, answers, congrats, hints };

export default week2;