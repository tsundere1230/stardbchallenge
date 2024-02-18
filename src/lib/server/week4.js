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
        { r: /^(rho|zeta)$/i, s: "That's one of the 2 letters" },
        {
            r: /^rho\s*zeta|zeta\s*rho$/i,
            s: "There's a pretty famous stone that was used for deciphering egyptian hieroglyphs.<br>I want it's name.",
        },
    ],
];

const congrats = `
ruan mei can we honestly date? you’re so beautiful. You always make me laugh, you always make me smile. You literally make me want to become a better person… I really enjoy every moment we spend together. My time has no value unless its spent with you. I tell everyone of my irls how awesome you are. Thank you for being you. Whenever you need someone to be there for you, know that i’ll always be right there by your side. I love you so much. I don’t think you ever realize how amazing you are sometimes. Life isn’t as fun when you’re not around. You are truly stunning. I want you to be my soulmate. I love the way you smile, your eyes are absolutely gorgeous. If I had a star for everytime you crossed my mind i could make the entire galaxy. Your personality is as pretty as you are and thats saying something. I love you, please date me. I am not even calling it e-dating anymore because I know we will meet soon enough heart OK I ADMIT IT I LOVE YOU OK i fucking love you and it breaks my heart when i see you play with someone else or anyone commenting in your profile i just want to be your girlfriend and put a heart in my profile linking to your profile and have a walltext of you commenting cute things i want to play video games talk in discord all night and watch a movie together but you just seem so uninsterested in me it hecking kills me and i cant take it anymore i want to remove you but i care too much about you so please i’m begging you to eaither love me back or remove me and never contact me again it hurts so much to say this because i need you by my side but if you dont love me then i want you to leave because seeing your icon in my friendlist would kill me everyday of my pathetic life.
<br /><br />

A huge thank you to all the voice actors! :marchhype: <br />
Necro: Welt and Clara<br />
Julius: Silverwolf (yes)<br />
Lightly: Dr Ratio<br />
Nakfr0g: Pela (yes)<br />
tsun: Ruan Mei, Black Swan, and Blade <- i had to sub in for someone and god i regret that<br />
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
Merper: Guinaifen
`;

export default { answers, hints, congrats };
