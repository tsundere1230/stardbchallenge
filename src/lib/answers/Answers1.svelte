<script>
    import { math } from "mathlifier";
</script>

<h1>Star DB Challenge: Season 2 Week 1 - Answers</h1>

<p>Q1:<br /></p>
<p class="answerkey">
    <br />
    Yukong has {@html math("[1]")} child.<br />
    There are {@html math("[3]")} Stellaron Hunters.
</p>

<p class="answerkey">
    <br />
    a) The probability of no 5-star in 3 pulls is just losing a coin toss 3 times,
    except the coin has a {@html math("0.99")} chance of landing tails. So the answer
    is {@html math("0.99 \\times 0.99 \\times 0.99 = 0.970299")} .
</p>

<p class="answerkey">The probability of no Ruan Mei in 2 pulls is to either:</p>
<br />
<ul class="answerkey">
    <li>Get no 5-stars</li>
    <li>Get one 5-stars and lose the 50-50</li>
</ul>
<p class="answerkey">
    <br />
    b) There is one way to get no 5-stars: {@html math("0.99 \\times 0.99")} .
    <br />
    There are two ways to get 1 5-star and lose 50-50: either get the 5-star first
    or second.<br />
    Each event has a probability of {@html math(
        "0.01 \\times 0.99 \\times 0.5",
    )}<br />
    So the total probability to not get Ruan Mei is<br />
    {@html math("0.99 \\times 0.99 + 2 \\times 0.5 \\times 0.01 \\times 0.99")} which
    conveniently equals {@html math("0.99")} .
</p>

<p><br />Q2:<br /></p>
<p class="answerkey">
    <br />
    Demon King is {@html math("[60]")} years, according to the Vonwacq set.<br
    />
    Architects is {@html math("[150]")} fragments, from the Simulated Universe event.<br
    />
    Aha Stuffed Toy gives {@html math("[400]")} fragments, if you're not on Elation.<br
    />
    是否允許更改 is Silverwolf's Skill which causes {@html math("[60]")} toughness
    damage.<br />
    KafkaCNVA is Xu Hui which has {@html math("[5]")} letters (yeah... this wasn't
    a very good one).
</p>

<p class="answerkey">
    <br />
    a) Himeko's damage on crit is {@html math(
        "40000 \\times (1+150\\%) = 100000",
    )} damage.
</p>

<p class="answerkey">
    <br />
    b) The expected value can be found by using the following formula:<br />
    {@html math(
        "E(X) = Pr(Crit) \\times DMG_{crit} + Pr(NoCrit) \\times DMG_{nocrit}",
    )} . <br />
    So Himeko's damage is {@html math(
        "0.6 \\times 100000 + 0.4 \\times 40000 = 76000",
    )} .
</p>

<p class="answerkey">
    <br />
    c) You will find that Himeko's damage won't change.
</p>

<p><br />Q3: <br /></p>
<p class="answerkey">
    <br />
    IPC is {@html math("[300]")} if you are NOT attempting to advance the achievement
    "Love and the Emperor". <br />
    Some people found it confusing what the NOT was trying to imply, so that's my
    bad. <br />
    The Genius Society people are all numbered... we have: <br />
</p>

<ul class="answerkey">
    <br />
    Yu Qingtu: {@html math("[55]")} <br />
    Herta: {@html math("[83]")} <br />
    Screwllum: {@html math("[76]")} <br />
    Polka: {@html math("[4]")} <br />
</ul>

<p class="answerkey">
    <br />
    You will find that {@html math("CritRate = 5 + x\\%")} , and <br />
    {@html math("CritDMG = 300 - 2x\\%")}
</p>

<p class="answerkey">
    <br />
    Performing similar shenanigans as just now... you will get a big equation looking
    like...<br />
    {@html math(
        "E(X) = Pr(Crit) \\times DMG_{crit} + Pr(NoCrit) \\times DMG_{nocrit}",
    )} <br />
    {@html math("= (5+x\\%)[(40000)(400-2x\\%)] + (95-x\\%)(40000)")}
</p>

<p class="answerkey">
    <br />
    You can either plug it into a graphing calculator like desmos.com, actually use
    calculus (god bless you), or just use the idea that 1:2 crit ratio is optimal
    (lol).
</p>

<p class="answerkey">
    <br />
    Either way, you will get {@html math("x = 72.5")}, and the final damage
    number is {@html math("88050")} .
</p>

<p><br />Q4: <br /></p>

<p class="answerkey">
    <br />
    As the hint ("C go 3") indicates, you start from the first C and go 3 letters
    forward, which is [r]. <br />
    The reason C goes 3 is because C is the 3rd letter of the alphabet. <br />
    Using that rule, r goes 18 which gets you y, and you can finish the rest yourself.
    :)
</p>
