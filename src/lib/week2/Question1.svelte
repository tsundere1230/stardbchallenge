<script>
    import { math } from "mathlifier";
</script>

<h1>Star DB Challenge: Season 2 Week 2</h1>

<h2>Part 1/2</h2>

<p>
    Hi challengers! Week 2 will be two short geo-location challenges! This will involve opening
    HSR and finding points on the map, just like in Season 1.
</p>

<p>
    Please head to the Seclusion Zone. Assuming Skaracabaz is the center of the
    polar coordinate plane, go to a point satisfying the polar coordinates
    below:
</p>

<p>
    Radius: {@html math(
        "PlayableChars + TeleportablePoints_{HertaSpaceStation})" ,
    )} meters.
</p>

<p>
    Angle: {@html math("TrailBlazePower_{Max} + \\sqrt[3]{TBPReq_{Lv64-65}}")}
    in degrees.
</p>

<p>
    You can interact with an entity there, and your password is the 4th word it
    says to you.
</p>

<p>
    You will be able to validate the radius as well as the angle, but round
    them to the nearest 5 before you validate. (E.g. if you think radius is 2, then just enter 2
    into the submission box.)
</p>

<p>
    NB: TeleportablePoints means anything you can click teleport on.
</p>