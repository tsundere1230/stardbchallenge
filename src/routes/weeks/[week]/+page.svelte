<script>
    import weeks from "$lib/weeks";
    import { tweened } from "svelte/motion";
    import { page } from "$app/stores";
    let week = parseInt($page.params.week) -1;

    let timer = tweened(0);

    setInterval(() => {
        if ($timer > 0) $timer--;
    }, 1000);

    let i = 0;

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

        let {newi, message} = await response.json();

        if (newi != i) {
            answer = "";
            i = newi;
        } /* else if ((answer == "9701.999975" || answer == "9899.26") && i == 0) {
            alert(
                "HAHAHAHAHAHAHAHAHAHA NO (the beta tester did expect this answer so you're getting this cheeky message kekw)",
            );
        } else if (answer == "") {
            alert("try something bro");
        } else if (!/^-?\d+(\.\d+)?$/.test(answer) && i != 3) {
            // -
            // ? = optionally
            // \d+ means any amount of digits
            alert("my favourite number is " + answer);
            timer = tweened(20);
        } */ else {
            alert(message);
            timer = tweened(1);
        }
    }
    let answer = "";
</script>

{#if i < weeks[week].questions.length}
    <svelte:component this={weeks[week].questions[i]} />
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

    <button on:click={validate}> submit </button>
{:else}
    <span class="congrats">
        {@html weeks[week].congrats}
    </span>
{/if}
