<script>
    export let answerStore;
    export let validate;

    import Input from "$lib/Input.svelte";
    import img01 from "$lib/assets/week501.jpg";
    import img02 from "$lib/assets/week502.jpg";
    import img03 from "$lib/assets/week503.jpg";
    import img04 from "$lib/assets/week504.jpg";
    import img05 from "$lib/assets/week505.jpg";
    import img06 from "$lib/assets/week506.jpg";
    import img07 from "$lib/assets/week507.jpg";
    import img08 from "$lib/assets/week508.jpg";
    import img09 from "$lib/assets/week509.jpg";
    import img10 from "$lib/assets/week510.jpg";

    let images = [
    { text: "01: The missing one", src: img01 },
    { text: "02: The one in the mirror", src: img02 },
    { text: "03: The Harmony one", src: img03 },
    { text: "04: Birb, he's the God of something, but answer his one-word name", src: img04 },
    { text: "05: One on the left", src: img05 },
    { text: "06: Advanced QQ", src: img06 },
    { text: "07: I don't play this game help", src: img07 },
    { text: "08: She has a trillion outfits, good luck", src: img08 },
    { text: "09: The non-genderbent one", src: img09 },
    { text: "10: Use the spelling with a 'u' if there is ambiguity", src: img10 },
    ];
</script>

<div class="markdown">

# Question 1
- Q1 answer format is lower case English letters only, no spaces.
- Image sources are eitherthe game's fandom wiki, an official art or given on the next page in the challenge.
- As per request, here is a weekly challenge involving other mobile/gacha games
- But the final answer is HSR themed!
- When in doubt, given name first, surname last

<div class="grid grid-cols-2">
    {#each images as image, i}
    <div class="text-center m-8">
        {image.text}
    </div>
    <img class="w-60" src={image.src}>
    {/each}
</div>

</div>
<Input {answerStore} {validate} />
