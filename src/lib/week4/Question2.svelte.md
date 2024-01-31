<script>
    export let answerStore;
    export let validate;

    import Input from "$lib/Input.svelte";

    import image from "$lib/assets/week4-greek.png";
    import audio from "$lib/assets/week4-greek.mp3";
</script>

<div class="markdown">

# Question 2/2

(This is a challenge from Julius and has nothing to do with anything before :) )

<br>

## Not my greekest stereo

![]({image})

<audio controls>
    <source src={audio}>
</audio>

</div>

<Input {answerStore} {validate} />
