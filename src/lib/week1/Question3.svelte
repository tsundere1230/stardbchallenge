<script>
    import { math } from "mathlifier";
</script>

<h1>Star DB Challenge Season 2 Week 1</h1>

<h2>Question 3</h2>

<p>
    Suppose I can freely choose my substats, and I can build Himeko to have a
    crit rate of <br />
    {@html math("\\frac{[Yu Qingtu]}{[Herta]-[Screwllum]+[Polka]} + x)\\%")} and
    a crit damage of {@html math("(IPC_{Preservation, LimitedPower} - 2x)\\%")}
    , where {@html math("x \\in \\mathbb{R}\\setminus\\mathbb{R}^-")}.
</p>

<p>
    To explain the formula: I could put all substats into CritDMG, and x would
    be 0; or vice versa, and x would be a large number. But each CritRate
    substat would decrease the CritDMG.
</p>

<p>
    Using calculus, given the constraints above, your password is the maximum
    expected damage of Himeko (assume a non-crit is still 40000 damage).
</p>
