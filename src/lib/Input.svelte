<script>
    import { onMount } from "svelte";

    /** @type {import("svelte/store").Writable<string>} */
    export let answerStore;
    /** @type {() => Promise<void>} */
    export let validate;

    let lock = false;

    /** @param { KeyboardEvent } e */
    async function enter(e) {
        if (lock) return;

        lock = true;

        answerStore.set(answerString);

        if (e.key == "Enter") {
            await validate();
        }

        lock = false;
    }

    let answerString = "";

    answerStore.subscribe((value) => {
        answerString = value;
    });

    onMount(() => {
        document.getElementById("input")?.focus();
    });
</script>

<input
    id="input"
    class="bg-galaxy_purple-400 placeholder:text-galaxy_purple-100 p-2"
    type="text"
    bind:value={answerString}
    placeholder="Type your answer here"
    on:keydown={enter}
/>
<br />
