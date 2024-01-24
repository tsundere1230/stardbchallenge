<script>
    export let answerStore;
    export let validate;

    import Input from "$lib/Input.svelte";
</script>

<div class="markdown">

Welcome to the Season 2! As I (tsun) am learning the javascript ropes (holy I hate javascript), this week's challenge will be a lot simpler :) <br>
Please make sure all your answers are in decimal, without units. Example: $\frac{3}{8}$ is why is this like this $0.375$.<br>
If the answer is a percentage, please give it as a decimal. Example: $52.5\%$ is $0.525$.

Alright, that's all you need to know, good luck!

<br>

# Question 1

We are playing "Honkai: Star Railed" and it is the same game as Honkai: Star Rail, but unlike Star Rail, there is NO soft pity. However, you will be pleased to find out that $50 - 50$ exists per normal.

In "Honkai: Star Railed", the probability of pulling a 5-star character is $[AdoptedChildren_{Yukong}]\%$. You are pulling on the Ruan Mei banner.

1.  Find the probability of obtaining NO 5-star characters in $[PlayableStellaronHunters_{1.6}]$ pulls.
2.  Find the probability of obtaining NO Ruan Mei's in $[PlayableStellaronHunters_{1.6} - 1]$ pulls.

Your password is $10000 \times Ans(1) - Ans(2)$.

</div>

<Input {answerStore} {validate} />
