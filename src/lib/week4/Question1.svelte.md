<script>
    export let answerStore;
    export let validate;

    import Input from "$lib/Input.svelte";
    import audio01 from "$lib/assets/week4-01.mp3";
    import audio02 from "$lib/assets/week4-02.mp3";
    import audio03 from "$lib/assets/week4-03.mp3";
    import audio04 from "$lib/assets/week4-04.mp3";
    import audio05 from "$lib/assets/week4-05.mp3";
    import audio06 from "$lib/assets/week4-06.mp3";
    import audio07 from "$lib/assets/week4-07.mp3";
    import audio08 from "$lib/assets/week4-08.mp3";
    import audio09 from "$lib/assets/week4-09.mp3";
    import audio10 from "$lib/assets/week4-10.mp3";
    import audio11 from "$lib/assets/week4-11.mp3";
    import audio12 from "$lib/assets/week4-12.mp3";
    import audio13 from "$lib/assets/week4-13.mp3";
    import audio14 from "$lib/assets/week4-14.mp3";
    import audio15 from "$lib/assets/week4-15.mp3";
    import audio16 from "$lib/assets/week4-16.mp3";
    import audio17 from "$lib/assets/week4-17.mp3";
    import audio18 from "$lib/assets/week4-18.mp3";
    import audio19 from "$lib/assets/week4-19.mp3";
    import audio20 from "$lib/assets/week4-20.mp3";

    let audios = [
      audio01, audio02, audio03, audio04, audio05, 
      audio06, audio07, audio08, audio09, audio10, 
      audio11, audio12, audio13, audio14, audio15, 
      audio16, audio17, audio18, audio19, audio20,
    ];
</script>

<div class="markdown">

# Question 1/2

Welcome to the Week 4 voice acting challenge! Firstly, voice acting credits will be given on the congrats page as well as the week 4 answers when they release. Then, please read the instructions VERY carefully as it contains a lot of hints for the challenge.

A total of 21 submissions are accepted into the answer box below. The format of the first 20 submissions is [2 digit number][character's name][language][voice line type] , where...

-   2 digit number: from 01 to 20 [they were randomised, nothing to do with answer]
-   Name: character's EN full name without punctuation/spaces (e.g. drratio, danhengimbibitorlunae, topaz&numby). Each character can only appear ONCE on the list!
-   Language: en/cn/jp/kr
-   Voice line type: Go figure that out yourself :)

If you think that audio clip 01 is Caelus's ult in english, please put: "01trailblazerenultimate". Of course, that is an example; Trailblazer is one of the two Korean speakers alongside an Abundance character.

The 21st accepted submission is the final answer, **which is caps/space/format/punctuation sensitive**.

Everything above this line is just instructions for the challenge, there is no Julius-level reading in between the lines here.

---

<br>

<p class="!text-center !text-lg">Basically, you will need skill and talent to decipher the speech, ultimately no technique is required. But all of that does not matter in the end. <br><br>

Once you decipher the voice recordings, the number, character and type of voice line no longer matters. Two languages whose letters you should delete, two languages whose letters you should add...<br><br></p>

<p class="!text-center !text-3xl"> Syllogistic Paradox </p>

<p class="!text-center !text-lg"> Your final answer should be two words, capitalised like above.
The first word is long, and cannot be found in a typical anagram scrambler (suggesting you work with word 2 here). </p>

<p class="!text-center !text-lg">
  When you are adding letters back, use a certain hint in the challenge to figure out the letters you know where to place first. You should be left with 5 letters that you might be uncertain of the placement of.
</p>

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
