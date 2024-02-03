<script>
    import { page } from "$app/stores";
    import answers from "$lib/answers/answers";

    let week = parseInt($page.params.week) - 1;
</script>

{#if week < answers.length}
    <h1 class="text-galaxy_purple-250 text-center text-5xl font-bold">
        Star DB Challenge: Season 2 Week Answers {$page.params.week}
    </h1>
    <div class="markdown">
        <svelte:component this={answers[week]} />
    </div>
{:else}
    <p>
        Week {$page.params.week} answers are not out yet, cheater!! Go away!! :angy:
    </p>
{/if}
