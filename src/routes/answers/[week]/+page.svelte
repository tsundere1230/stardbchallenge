<script>
    // @ts-ignore
    import Answers1 from "$lib/answers/Answers1.svelte.md";
    // import Answers2 from "$lib/answers/Answers2.svelte.md";

    import { page } from "$app/stores";

    let week = parseInt($page.params.week) - 1;
    let answers = [Answers1];
</script>

{#if week < answers.length}
    <h1 class="text-galaxy_purple-250 text-center text-5xl font-bold">
        Star DB Challenge: Season 2 Week Answers {$page.params.week}
    </h1>
    <div class="markdown">
        <svelte:component this={answers[week]} />
    </div>
{:else}
    <h2>
        Week {$page.params.week} answers are not out yet, cheater!! Go away!! :angy:
    </h2>
{/if}
