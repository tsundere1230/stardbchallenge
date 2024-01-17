# Q1

Yukong has $[1]$ child. \
There are $[3]$ Stellaron Hunters.

1. The probability of no 5-star in 3 pulls is just losing a coin toss 3 times, except the coin has a $0.99$ chance of landing tails. So the answer is $0.99 \times 0.99 \times 0.99 = 0.970299$ .

The probability of no Ruan Mei in 2 pulls is to either:

-   Get no 5-stars
-   Get one 5-stars and lose the 50-50

2. There is one way to get no 5-stars: $0.99 \times 0.99$.

There are two ways to get 1 5-star and lose 50-50: either get the 5-star first or second.<br>
Each event has a probability of $0.01 \times 0.99 \times 0.5$.

So the total probability to not get Ruan Mei is $0.99 \times 0.99 + 2 \times 0.5 \times 0.01 \times 0.99$ which conveniently equals $0.99$.

# Q2

Demon King is $[60]$ years, according to the Vonwacq set.<br>
Architects is $[150]$ fragments, from the Simulated Universe event.<br>
Aha Stuffed Toy gives $[400]$ fragments, if you're not on Elation.<br>
是否允許更改 is Silverwolf's Skill which causes $[60]$ toughness damage.<br>
KafkaCNVA is Xu Hui which has $[5]$ letters (yeah... this wasn't a very good one).

1.  Himeko's damage on crit is $40000 \times (1+150\%) = 100000$ damage.

2.  The expected value can be found by using the following formula:<br>
    $E(X) = Pr(Crit) \times DMG*{crit} + Pr(NoCrit) \times DMG*{nocrit}$.<br>
    So Himeko's damage is $0.6 \times 100000 + 0.4 \times 40000 = 76000$.

3.  You will find that Himeko's damage won't change.

# Q3

IPC is $[300]$ if you are NOT attempting to advance the achievement "Love and the Emperor".<br>
Some people found it confusing what the NOT was trying to imply, so that's my bad.<br>
The Genius Society people are all numbered... we have:<br>

-   Yu Qingtu: $[55]$
-   Herta: $[83]$
-   Screwllum: $[76]$
-   Polka: $[4]$

You will find that<br>
$CritRate = 5 + x\%$<br>
$CritDMG = 300 - 2x\%$

Performing similar shenanigans as just now... you will get a big equation looking like...<br>
$E(X) = Pr(Crit) \times DMG_{crit} + Pr(NoCrit) \times DMG_{nocrit}$<br>
$= (5+x\%)[(40000)(400-2x\%)] + (95-x\%)(40000)$

You can either plug it into a graphing calculator like desmos.com, actually use calculus (god bless you), or just use the idea that 1:2 crit ratio is optimal (lol).

Either way, you will get $x = 72.5$, and the final damage number is $88050$.

# Q4

As the hint ("C go 3") indicates, you start from the first C and go 3 letters forward, which is [r].<br>
The reason C goes 3 is because C is the 3rd letter of the alphabet.<br>
Using that rule, r goes 18 which gets you y, and you can finish the rest yourself. :)
