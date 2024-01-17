<script>
    import { tweened } from "svelte/motion";
    import { page } from "$app/stores";

    export let data;

    let week = parseInt($page.params.week) - 1;

    let timer = tweened(0);
    setInterval(() => {
        if ($timer > 0) $timer--;
    }, 1000);

    let i = 0;
    let answer = "";
    let end = false;
    let html = data.html;
    let message = "";

    /** @param { KeyboardEvent } e */
    async function enter(e) {
        if (e.key == "Enter") {
            validate();
        }
    }

    async function validate() {
        if ($timer > 0) {
            return;
        }

        let response = await fetch("/challenge/verify", {
            method: "POST",
            body: JSON.stringify({ week, i, answer }),
        });

        let { newi, newMessage, newHtml, newEnd } = await response.json();

        if (newi == i) {
            timer = tweened(20);
        }

        i = newi;
        message = newMessage;
        html = newHtml;
        end = newEnd;

        answer = "";
    }
</script>

<div class="space-y-10 md:mx-36 sm:mx-12 mx-4">
    <h1 class="text-galaxy_purple-250 text-center text-5xl font-bold">
        Star DB Challenge: Season 2 Week {$page.params.week}
    </h1>
    {#if message}
        <dialog
            class="bg-galaxy_purple-400 text-galaxy_purple-100 space-y-5 text-center border rounded-md"
            open
        >
            <div class="m-4 space-y-2">
                <p>{message}</p>
                <form method="dialog">
                    <button>OK</button>
                </form>
            </div>
        </dialog>
    {/if}
    <div class="question">
        {@html html}
    </div>
    <!-- <div class="question">
        <SvelteMarkdown {source} {options} {renderers} />
    </div> -->
    <div>
        {#if !end}
            {#if $timer > 0}
                <p>Come back in {$timer}s</p>
            {/if}
            <input
                class="bg-galaxy_purple-400 placeholder:text-galaxy_purple-100 p-2"
                type="text"
                bind:value={answer}
                placeholder="Type your answer here"
                on:keydown={enter}
            />
            <br />
        {/if}
    </div>
</div>

<style lang="postcss">
    .question :global(h1) {
        @apply text-2xl font-bold text-galaxy_purple-50;
    }

    .question :global(h2) {
        @apply text-xl font-bold text-galaxy_purple-50;
    }

    .question :global(p) {
        @apply text-lg my-4;
    }

    .question :global(ol li) {
        @apply ml-10 list-decimal;
    }

    .question :global(ul li) {
        @apply ml-10 list-disc;
    }
</style>
