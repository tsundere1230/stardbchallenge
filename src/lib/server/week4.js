const answers = [/^Somatotypical Helix$/, /^rosetta\s*(stone)?$/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^01weltjpult(imate)*$/i, s: "d" }, //jp bad
        { r: /^02qingquejpult(imate)*$/i, s: "P" },
        { r: /^03danhengcnult(imate)*$/i, s: "m" }, //cn good
        { r: /^04huohuoenbasic(attack)*$/i, s: "i" }, //en bad
        { r: /^05drratioenult(imate)*$/i, s: "<space>" },
        { r: /^06luochakrskill$/i, s: "t" }, //kr good
        { r: /^07hanyacnskill$/i, s: "H" },
        { r: /^08ruanmeijpult(imate)*$/i, s: "g" },
        { r: /^09silverwolfjpult(imate)*$/i, s: "s" },
        { r: /^10pelaenult(imate)*$/i, s: "a" },
        { r: /^11jingliucnult(imate)*$/i, s: "e" },
        { r: /^12sushangcnult(imate)*$/i, s: "p" },
        { r: /^13topaz&numbyjpbasic(attack)*$/i, s: "l" },
        { r: /^14clarajpskill$/i, s: "r" },
        { r: /^15jingyuancnult(imate)*$/i, s: "a" },
        { r: /^16kafkajpult(imate)*$/i, s: "l" },
        { r: /^17blackswan$/i, s: "<space>" },
        { r: /^18trailblazerkrbasic(attack)*$/i, s: "a" },
        { r: /^19bladekr$/i, s: "i" },
        { r: /^20guinaifenenult(imate)*$/i, s: "a" },
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
