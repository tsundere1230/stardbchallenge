<script>
    export let answerStore;
    export let validate;

    import Input from "$lib/Input.svelte";
    
    import audio02 from "$lib/assets/week4-02.mp3";
    import audio03 from "$lib/assets/week4-03.mp3";
    import audio05 from "$lib/assets/week4-05.mp3";
    import audio06 from "$lib/assets/week4-06.mp3";
    import audio07 from "$lib/assets/week4-07.mp3";
    import audio08 from "$lib/assets/week4-08.mp3";
    import audio09 from "$lib/assets/week4-09.mp3";
    import audio10 from "$lib/assets/week4-10.mp3";
    import audio11 from "$lib/assets/week4-11.mp3";
    import audio12 from "$lib/assets/week4-12.mp3";
    import audio13 from "$lib/assets/week4-13.mp3";
    import audio15 from "$lib/assets/week4-15.mp3";
    import audio16 from "$lib/assets/week4-16.mp3";
    import audio18 from "$lib/assets/week4-18.mp3";

    let audios = [
      audio02, 
      audio03,  
      audio05, 
      audio06, 
      audio07, 
      audio08, 
      audio09, 
      audio10, 
      audio11, 
      audio12, 
      audio13, 
      audio15, 
      audio16, 
      audio18
    ];
</script>

<div class="markdown">

# Question 1/2

Welcome to the Week 4 challenge! This week, the organisers and a group of brave volunteers have each voiced one or more characters in HSR. Each character only appears once in the list. Note that some volunteers do not speak the language they were asked to voice, so please be mindful of that when it comes to pronunciation. Voice acting credits will be given on the congrats page as well as the week 4 answers when they release.

A total of 21 submissions are accepted into the answer box below. The format of the first 20 submissions is [2 digit number][character's name][language][voice line type] , where...

-   2 digit number: from 01 to 20 [they were randomised, nothing to do with answer]
-   Name: character's full name without punctuation/spaces (e.g. drratio, danhengimbibitorlunae, topaz&numby)
-   Language: en/cn/jp/kr
-   Voice line type: Go figure that out yourself :)

If you think that audio clip 1 is Caelus's ult in english, please put: "01trailblazerenultimate" . Of course, that is an example; trailblazer speaks Korean.

The last accepted submission is the final answer, which is caps/space/format/punctuation SENSITIVE.

When you have correctly guessed 8 or more voice lines, open a ticket and show proof to receive an extra hint about the harder ones.

Everything above this line is just information for the challenge.

---

<br>

<p class="!text-center !text-lg">Ultimately, you will need skill and talent to discern basically, no technique required. But none of that matters... separate goodspeak from badspeak, and the anwsre will appear imminently.</p>

<p class="!text-center !text-3xl"> Syllogistic Paradox </p>

<div class="grid grid-cols-4">
  {#each audios as audio, i}
    <div>
      {i + 1}
      <audio controls>
        <source src={audio}>
      </audio>
    </div>
  {/each}
</div>

</div>

<Input {answerStore} {validate} />
