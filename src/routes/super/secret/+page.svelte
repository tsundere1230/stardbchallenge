<script>
    import { tweened } from "svelte/motion";
    let timer = tweened(0);
    setInterval(() => {
        if ($timer > 0) $timer--;
    }, 1000);

    import { writable, get } from "svelte/store";
    let answerStore = writable("");

    import { page } from "$app/stores";
    let week = parseInt($page.params.week) - 1;

    import questions from "$lib/superSecret.js";

    let answers = Array(questions.length).fill("");
    let congrats = "";
    let message = "";

    let i = 0;

    async function validate() {
        if ($timer > 0) {
            return;
        }

        let answer = get(answerStore);

        let response = await fetch("/challenge/validate", {
            method: "POST",
            body: JSON.stringify({ week: 3, i, answer }),
        });

        ({ message } = await response.json());

        if (!message) {
            answers[i++] = answer;

            if (i >= questions.length) {
                let response = await fetch("/challenge/verify", {
                    method: "POST",
                    body: JSON.stringify({ week, answers }),
                });

                ({ congrats } = await response.json());
            }
        } else {
            timer = tweened(0);
        }

        answerStore.set("");
    }
</script>

{#if message}
    <div class="flex flex-col justify-center fixed w-screen h-screen z-10">
        <dialog
            class="font-bold text-xl bg-galaxy_purple-400 text-space_dark space-y-5 text-center border-2 rounded-md border-galaxy_purple-50"
            open
        >
            <div class="m-4 space-y-2">
                <p>{@html message}</p>
                <form method="dialog">
                    <button on:click={() => (message = "")}>OK</button>
                </form>
            </div>
        </dialog>
    </div>
{/if}

<div class="space-y-10 md:mx-36 sm:mx-12 mx-4">
    <h1 class="text-galaxy_purple-250 text-center text-5xl font-bold">
        Star DB Challenge: Season 2 Week {$page.params.week}
    </h1>

    {#if questions.length > i}
        <svelte:component this={questions[i]} {answerStore} {validate} />
        {#if $timer > 0}
            <p class="fixed bottom-4 right-4">Come back in {$timer}s</p>
        {/if}
    {:else}
        <div class="text-4xl">
            {@html congrats}
        </div>
    {/if}
</div>
