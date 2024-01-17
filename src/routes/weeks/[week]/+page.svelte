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

{#if message}
    <dialog open>
        <p>{message}</p>
        <form method="dialog">
            <button>OK</button>
        </form>
    </dialog>
{/if}
{@html html.html}
{#if !end}
    {#if $timer > 0}
        <p>Come back in {$timer}s</p>
    {/if}
    <input
        type="text"
        bind:value={answer}
        placeholder="Type your answer here"
        on:keydown={enter}
    />
    <br />
{/if}
