<script>
    import Katex from 'svelte-katex'
</script>


<h1>Star DB Challenge Season 2 Week 1</h1>

<h2>Question 3</h2>

<p>
    Suppose I can freely choose my substats, and I can build Himeko to have a crit rate of <br/>
    <Katex>(\frac{"{[Yu Qingtu]}{[Herta]-[Screwllum]+[Polka]}"} + x)\%</Katex> and a crit damage of <Katex>(IPC_{"{Preservation, LimitedPower}"} - 2x)\%</Katex>
    , where <Katex>x \in \mathbb{"{R}"}\setminus\mathbb{"{R}"}^-</Katex>.
</p>

<p>
    To explain the formula: I could put all substats into CritDMG, and <Katex>x</Katex> would be <Katex>0</Katex>; or vice versa,
    and <Katex>x</Katex> would be a large number. But each CritRate substat would decrease the CritDMG.
</p>

<p>
    Using calculus, given the constraints above, your password is the maximum expected damage of Himeko
    (assume a non-crit is still <Katex>40000</Katex> damage).
</p>