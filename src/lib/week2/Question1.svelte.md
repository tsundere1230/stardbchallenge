<script>
    export let answerStore;
    export let validate;

    import Input from "$lib/Input.svelte";
</script>

<div class="markdown">

# Question 1

Hi challengers! Week 2 will be two short geo-location challenges! This will involve opening HSR and finding points on the map, just like in Season 1.<br>
Please head to the Seclusion Zone. Assuming Skaracabaz is the center of the polar coordinate plane, go to a point satisfying the polar coordinates below:

Radius: $PlayableChars + TeleportablePoints\_{HertaSpaceStation}$ meters.

Angle: $TrailBlazePower_{Max} + \sqrt[3]{TBExpReq_{Lv64-65}}$ in degrees.

You can interact with an entity there, and your password is the 4th word it says to you.<br>
You will be able to validate the radius as well as the angle, but round them to the nearest integer before you validate. (E.g. if you think radius is 2, then just enter 2 into the submission box.)

NB: TeleportablePoints means anything you can click teleport on.

</div>

<Input {answerStore} {validate} />
