const answers = [/^Somatotypical Helix$/, /^rosetta\s*(stone)?$/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^01weltjpult(imate)?$/i, s: "[d]" }, //jp bad
        { r: /^02qingquejpult(imate)?$/i, s: "ONEGAI!!!!! [P]" },
        { r: /^03danhengcnult(imate)?$/i, s: "He says 'tch' and leaves... oh and he gives you the letter [m]" }, //cn good
        { r: /^04huohuoenbasic(attack)?$/i, s: "the VA and [i] had a good laugh on this one" }, //en good
        { r: /^05drratioenult(imate)?$/i, s: "He raises his hand to form an [l]. Too bad it's not capitalised." },
        { r: /^06luochakrskill$/i, s: "[o]" }, //kr bad
        { r: /^07hanyacnskill$/i, s: "[t]" },
        { r: /^08ruanmeijpult(imate)?$/i, s: "[g] tsun: Hi! I thought I might give you a hint! There are two words, and the first is at least double the length of the second! *tsun disappears back to bilibili to watch cosplay videos*" },
        { r: /^09silverwolfjpult(imate)?$/i, s: "Suddenly your entire screen gets flashbanged by the letter [s]. You've been hacked!" },
        { r: /^10pelaenult(imate)?$/i, s: "n[a]kfr0g says hi" },
        { r: /^11jingliucnult(imate)?$/i, s: "[e]" },  
        { r: /^12sushangcnult(imate)?$/i, s: "rise [p]-" },       
        { r: /^13topaz&numbyjpbasic(attack)?$/i, s: "Numby thinks Dr Ratio is funny and tries the [l] symbol with its toes(?). Too bad they're too short to actually make the l" }, 
        { r: /^14clarajpskill$/i, s: "Clara hands you the letter r on a piece of paper. How cute!" },
        { r: /^15jingyuancnult(imate)?$/i, s: "[H]" },
        { r: /^16kafkajpult(imate)?$/i, s: "[a]" },
        { r: /^17blackswancnult(imate)?$/i, s: "[o]tsun: Hello! You will probably figure out that some letters are deleted and added again... it means they have swapped places from the first to the second word! *tsun disappears back to her bed because its probably 3am and you wont get hints anymore... unless...*" },
        { r: /^18trailblazerkrbasic(attack)?$/i, s: "[a]" },
        { r: /^19bladejptalent$/i, s: "[i]. tsun: Hello there! Of the 6 CN lines, all characters are from/living on Xianzhou, except the only Penacony character in the list. *tsun disappears back into the sourcecode*" },
        { r: /^20guinaifenenult(imate)*$/i, s: "*** [a]larm!!!!" },
    ],
    [
        { r: /^(rho|zeta)$/i, s: "That's one of the 2 letters" },
        {
            r: /^rho\s*zeta$/i,
            s: "There's a pretty famous stone that was used for deciphering egyptian hieroglyphs.<br>I want it's name.",
        },
    ],
];

const congrats = `
copypasta<br /><br />

A huge thank you to all the voice actors: :marchhype: <br />
Necro: Welt & Clara<br />
Julius: Silverwolf (yes)<br />
Lightly: Dr Ratio<br />
Nakfr0g: Pela (yes)<br />
tsun: Ruan Mei & Black Swan<br />
Zorus: Qingque<br />
Minimiz: Dan Heng<br />
Pulsarion: Huohuo<br />
jayleaf: Luocha<br />
Azazoth: Hanya<br />
Pix: Jingliu<br />
kama: Sushang<br />
Kaju: Topaz & Numby<br />
rzd: Jingyuan<br />
Pierrot: Kafka<br />
xRes: Trailblazer<br />
Stellarr: Blade<br />
Merper: Guinaifen
`;

export default { answers, hints, congrats };
