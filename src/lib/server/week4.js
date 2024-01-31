const answers = [
    /^Somatotypical Helix$/, /^Julius$/,
];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^01weltjpultimate$/i, s: "d" },
        { r: /^02qingquejpultimate$/i, s: "P" },
        { r: /^03danhengcnultimate$/i, s: "m" },
        { r: /^04huohuoen$/i, s: "i" },
        { r: /^05drratioen$/i, s: "<space>" },
        { r: /^06luochakrskill$/i, s: "t" },
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
    [],
];

const congrats = `
copypasta

A huge thank you to all the voice actors:
Necro: Welt & Clara
Julius: Silverwolf
Lightly: Dr Ratio
Nakfr0g: Pela (yes)
Tsun: Ruan Mei & Black Swan
Zorus: Qingque
Minimiz: Dan Heng
Pulsarion: Huohuo
Jay: Luocha
Azazoth: Hanya
Pix: Jingliu
Kama: Sushang
Kaju: Topaz & Numby
Rzd: Jingyuan
Pierrot: Kafka
Xres: Trailblazer
Stellarr: Blade
Merper: Guinaifen
`;

export default { answers, hints, congrats };
