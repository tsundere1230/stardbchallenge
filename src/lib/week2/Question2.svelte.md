<script>
    export let answerStore;
    export let validate;

    import Input from "$lib/Input.svelte";
</script>

<div class="markdown">

# Question 2

Please now leave the Seclusion Zone go to a map that fulfills the following
conditions:

-   There exist three (almost) co-linear SPACE ANCHORS [this is "The Line"].
-   The space anchors must be on the same floor of the map.
-   On the map, there is EXACTLY one point of interest that you can click 'Navigate' on. This does not have to be on "The Line".
-   The exit markers that would allow you to be sent to a different area does not count as a point of interest.

Your task is now to measure the distance between the two teleport points on the ends of The Line.<br>
Your password is $Length\_{Line}$ in feet (round it to an integer).

There is no validation for this question :sobpuddle: (but there is a small range of values accepted).

</div>

<Input {answerStore} {validate} />
