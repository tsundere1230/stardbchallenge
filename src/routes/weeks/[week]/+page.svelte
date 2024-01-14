<script>
    export let data;

    import { tweened } from "svelte/motion";
    import { page } from "$app/stores";

    let timer = tweened(0);
    let week = parseInt($page.params.week) - 1;
    let i = 0;
    let answer = "";
    let end = false;
    let html = data.html;

    setInterval(() => {
        if ($timer > 0) $timer--;
    }, 1000);

    /** @param { KeyboardEvent } e */
    async function enter(e) {
        if (e.key == "Enter") {
            validate();
        }
    }

    async function validate() {
        answer = "";

        if ($timer > 0) {
            return;
        }

        let response = await fetch("/challenge/verify", {
            method: "POST",
            body: JSON.stringify({ week, i, answer }),
        });

        let { newi, message, newHtml, newEnd } = await response.json();

        if (newi != i) {
            i = newi;
            html = newHtml;
            end = newEnd;
        } else {
            alert(message);
            timer = tweened(20);
        }
    }
</script>

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
