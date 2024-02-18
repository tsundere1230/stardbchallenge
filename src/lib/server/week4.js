const answers = [/^Somatotypical Helix$/, /^rosetta\s*(stone)?$/i];

/** @type {  {r: RegExp,  s: string}[][]} */
const hints = [
    [
        { r: /^01weltjpult(imate)?$/i, s: "[d]addy welt" },
        { r: /^02qingquejpult(imate)?$/i, s: "If Pompom played mahjong he'd always win on toitoi because he is [P]on-pon (get it)" },
        { r: /^03danhengcnult(imate)?$/i, s: "[m]" },
        { r: /^04huohuoenbasic(attack)?$/i, s: "the VA and [i] had a good laugh on this one" },
        { r: /^05drratioenult(imate)?$/i, s: "He raises his hand to form an [l]. Too bad it's not capitalised." },
        { r: /^06luochakrskill$/i, s: "[o]" },
        { r: /^07hanyacnskill$/i, s: "[t]" },
        { r: /^08ruanmeijpult(imate)?$/i, s: "[g] tsun: Hi! I thought I might give you a hint! There are two words in the final answer, and the first is more than double the length of the second! *tsun disappears back to bilibili to watch cosplay videos*" },
        { r: /^09silverwolfjpult(imate)?$/i, s: "Suddenly your entire screen gets flashbanged by the letter [s]. You've been hacked!" },
        { r: /^10pelaenult(imate)?$/i, s: "n[a]kfr0g says hi" },
        { r: /^11jingliucnult(imate)?$/i, s: "[e]" },
        { r: /^12sushangcnult(imate)?$/i, s: "rise [p]-" },
        { r: /^13topaz(&numby)?jpbasic(attack)?$/i, s: "[l]" },
        { r: /^14clarajpskill$/i, s: "Clara hands you the letter [r] on a piece of paper. How cute!" },
        { r: /^15jingyuancnult(imate)?$/i, s: "kingyu[a]n" },
        { r: /^16kafkajpult(imate)?$/i, s: "[a]" },
        { r: /^17blackswancnult(imate)?$/i, s: "[o] tsun: Hello! This is the biggest hint in the game, so listen up! Two goodspeak and badspeak... what does that mean? I've heard of that from 1984... newspeak meant new language or something... Ok and next! and next! Some letter(s) belong to both a goodspeak and a badspeak... it means that the letter jumps from the first word to the second, and vice versa! Finally, when performing the action corresponding to badspeak, start from the back! *tsun disappears to bed as it is 3AM*" },
        { r: /^18trailblazerkrbasic(attack)?$/i, s: "[a]" },
        { r: /^19bladejptalent$/i, s: "[i] tsun: Hello! *in a horrible blade voice* Of the 6 CN lines, all characters are from/living on Xianzhou, except the only Penacony character in the list. *tsun disappears back into the sourcecode*" },
        { r: /^20guinaifenenult(imate)*$/i, s: "[H]appy new year!" },
    ],
    [
        { r: /^rho|zeta$/i, s: "That's one of the 2 letters" },
        {
            r: /^rho\s*zeta|zeta\s*rho$/i,
            s: "There's a pretty famous stone that was used for deciphering egyptian hieroglyphs.<br>I want it's name.",
        },
    ],
];

const congrats = `
There is no soul in this god damn universe who can describe how spectacularly erect I am for Fu Xuan. And I'm not even exaggerating. I would be shocked if there is someone out there who can be more erect for Fu Xuan. Heck I stay erect for hours...days even whenever I even think of Fu Xuan. All this pent up frustration because of my erection leads me to furiously masturbate for hours while thinking about aggressively I would fuck Fu Xuan. I masturbated at home, at work, in public wherever you name. I even lost my job when I was masturbating at my work. But despite that, I still masturbate thinking about how I will have sex with Fu Xuan. I even drew Fu Xuan using my own cum and masturbated to that as well. I just cannot stop masturbating. I feel immense anger whenever I see a Fu Xuan x Jing Yuan fan art. But even then, I masturbate to that art...furiously...thinking about how me and Jing Yuan would absolutely fuck the shit out of Fu Xuan with out massive cocks. It's been few months now and I got diagnosed with testicular cancer. But even then, I want to bust all of my cancerous load into Fu Xuan's little cunt. I know my habits are not healthy and I should seek help but no one in this universe deserves to fuck Fu Xuan as much as I do.
<br /><br />

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
