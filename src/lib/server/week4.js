const answers = [/^Somatotypical Helix$/, /^rosetta\s*(stone)?$/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^01weltjpultimate$/i, s: "d" }, //jp bad
        { r: /^02qingquejpultimate$/i, s: "P" },
        { r: /^03danhengcnultimate$/i, s: "m" }, //cn good
        { r: /^04huohuoen$/i, s: "i" }, //en bad
        { r: /^05drratioen$/i, s: "<space>" },
        { r: /^06luochakrskill$/i, s: "t" }, //kr good
        { r: /^07hanyacnskill$/i, s: "H" },
        { r: /^08ruanmeijpultimate$/i, s: "g" },
        { r: /^09silverwolfjpultimate$/i, s: "s" },
        { r: /^10pelaenultimate$/i, s: "a" },
        { r: /^11jingliucnultimate$/i, s: "e" },
        { r: /^12sushangcnultimate$/i, s: "p" },
        { r: /^13topaz&numbyjpbasic$/i, s: "l" },
        { r: /^14clarajp$/i, s: "r" },
        { r: /^15jingyuancnultimate$/i, s: "a" },
        { r: /^16kafkajpultimate$/i, s: "l" },
        { r: /^17blackswan$/i, s: "<space>" },
        { r: /^18trailblazerkrbasic$/i, s: "a" },
        { r: /^19bladekr$/i, s: "i" },
        { r: /^20guinaifenen$/i, s: "a" },
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

A huge thank you to all the voice actors:<br />
Necro: Welt & Clara<br />
Julius: Silverwolf (yes)<br />
Lightly: Dr Ratio<br />
Nakfr0g: Pela (yes)<br />
Tsun: Ruan Mei & Black Swan<br />
Zorus: Qingque<br />
Minimiz: Dan Heng<br />
Pulsarion: Huohuo<br />
Jay: Luocha<br />
Azazoth: Hanya<br />
Pix: Jingliu<br />
Kama: Sushang<br />
Kaju: Topaz & Numby<br />
Rzd: Jingyuan<br />
Pierrot: Kafka<br />
Xres: Trailblazer<br />
Stellarr: Blade<br />
Merper: Guinaifen
`;

export default { answers, hints, congrats };
