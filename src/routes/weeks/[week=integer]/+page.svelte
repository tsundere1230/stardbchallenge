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

    import weeks from "$lib/weeks.js";

    let answers = Array((weeks[week] || []).length).fill("");
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
            body: JSON.stringify({ week, i, answer }),
        });

        ({ message } = await response.json());

        if (!message) {
            answers[i++] = answer;

            if (i >= weeks[week].length) {
                let response = await fetch("/challenge/verify", {
                    method: "POST",
                    body: JSON.stringify({ week, answers }),
                });

                ({ congrats } = await response.json());
            }
        } else {
            timer = tweened(20);
        }

        answerStore.set("");
    }
</script>

{#if message}
    <div class="flex flex-col justify-center fixed w-screen h-screen z-50">
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

{#if weeks.length > week}
    <div class="space-y-10 md:mx-36 sm:mx-12 mx-4">
        <h1 class="text-galaxy_purple-250 text-center text-5xl font-bold">
            Star DB Challenge: Season 2 Week {$page.params.week}
        </h1>

        {#if weeks[week].length > i}
            <svelte:component this={weeks[week][i]} {answerStore} {validate} />
            {#if $timer > 0}
                <p class="fixed bottom-4 right-4">Come back in {$timer}s</p>
            {/if}
        {:else}
            <div class="text-4xl">
                {@html congrats}
            </div>
        {/if}
    </div>
{:else}
    <p>
        Well well well. Trying to take a sneak peek at week {$page.params.week} are
        we? :hertaSmug:
    </p>
{/if}
