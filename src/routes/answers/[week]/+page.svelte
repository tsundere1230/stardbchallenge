<script>
    import Answers1 from "$lib/answers/Answers1.svelte";
    //import Answers2 from "$lib/answers/Answers2.svelte";

    import { page } from "$app/stores";

    let week = parseInt($page.params.week) - 1;
    let answers = [Answers1];
</script>

{#if week < answers.length}
    <svelte:component this={answers[week]} />
{:else}
    <h2>
        Week {$page.params.week} answers are not out yet, cheater!! Go away!! :angy:
    </h2>
{/if}
