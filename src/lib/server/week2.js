const answers = [
    /^emergency$/i,
    /^(52[5-9]|5[34][0-9]|55[0-5])$/,
    /^spotlights$/i,
];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^6[34]$/, s: "Correct Radius" },
        { r: /^270$/, s: "Correct Angle" },
    ],
    [],
    [{ r: /^even$/i, s: "Very good, but that's just the first step :smug:" }],
];

const congrats = `
I can't take it anymore 😩😩😩 I'm sick of Remembrance 😩😩😩 I try to play HUNT. 🏹🏹🏹 My ❄️D1ss0c1at10n❄️ deals more 💪🏿💪🏿damage. I try to play PROPAGATION. My ❄️D1ss0c1at10n❄️ deals more 💪🏻💪🏻damage. I try to play NIHILITY. My ❄️D1ss0c1at10n❄️ deals more 💪💪damage. I want to play 🫣🫣🫣Ruan Mei🫣🫣🫣. Her best path is ❄️D1ss0c1at10n❄️. I want to play 👓Pela,🤝 Jingliu - they both want ❄️D1ss0c1at10n❄️. Fuli grabs me by the ✊throat✊. I discard Celestial🔫Annihilation for all the Rememberance ✨✨blessings. I spend all my cosmic fragments for 🎲rerolls🎲. He isn't satisfied. "Give me more EHR." He grabs Jingliu and ✊forces✊ her to run a defensive set. "You just need to survive👌👌👌. I can deal more damage with ❄️D1ss0c1at10n❄️." I can't pull for 🫣🫣Ruan Mei🫣🫣, I don't have enough ✨jades✨. He grabs my 💳credit card💳. It declines. "Guess this is the end." He ✊grabs ✊ Argenti👨‍🦰👨‍🦰. He says "Argenti👨‍🦰👨‍🦰, one shot them on D5 Con12." There is no hint of sadness in his 👀eyes👀. Nothing but pure, 30% max health damage. What a cruel world🌍🌍.
<br /><br />
Congrats 🤓🤓nerd! 
<br /><br />
Now screenshot this 📃📃page to prove that you have completed✅✅ the ✖️challenge➗
`;

export default { answers, hints, congrats };
