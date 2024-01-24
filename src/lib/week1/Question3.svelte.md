<script>
    export let answerStore;
    export let validate;

    import Input from "$lib/Input.svelte";
</script>

<div class="markdown">

# Question 3

Suppose I can freely choose my substats, and I can build Himeko to have a crit rate of

$(\frac{[Yu Qingtu]}{[Herta]-[Screwllum]+[Polka]} + x)\%$ and a crit damage of $(IPC\_{Preservation, LimitedPower} - 2x)\%$, where $x \in \mathbb{R} \setminus\mathbb{R}^-$.

To explain the formula: I could put all substats into CritDMG, and x would be 0; or vice versa, and x would be a large number. But each CritRate substat would decrease the CritDMG.

Using calculus, given the constraints above, your password is the maximum expected damage of Himeko (assume a non-crit is still 40000 damage).

</div>

<Input {answerStore} {validate} />
