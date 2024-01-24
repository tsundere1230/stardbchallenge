<script>
    /** @type {import("svelte/store").Writable<string>} */
    export let answerStore;
    /** @type {() => Promise<void>} */
    export let validate;

    let width = 23;
    let height = 21;

    let crossword = [
        { label: 1, letters: 4, vertical: true, x: 0, y: 0 }, // fire
        { label: 2, letters: 3, vertical: false, x: 15, y: 0 }, // pig
        { label: 3, letters: 3, vertical: true, x: 4, y: 5 }, // rat
        { label: 4, letters: 4, vertical: true, x: 0, y: 10 }, // goat
        { label: 5, letters: 5, vertical: false, x: 6, y: 9 }, // earth
        { label: 6, letters: 5, vertical: true, x: 8, y: 0 }, // horse
        { label: 7, letters: 3, vertical: true, x: 1, y: 5 }, // dog
        { label: 8, letters: 4, vertical: false, x: 6, y: 7 }, // wood
        { label: 8, letters: 5, vertical: true, x: 22, y: 12 }, // water
        { label: 9, letters: 5, vertical: true, x: 10, y: 0 }, // snake
        { label: 10, letters: 5, vertical: true, x: 3, y: 9 }, // metal
        { label: 11, letters: 6, vertical: false, x: 0, y: 15 }, // dragon
        { label: 12, letters: 5, vertical: false, x: 2, y: 3 }, // tiger
        { label: 13, letters: 6, vertical: true, x: 12, y: 0 }, // monkey
        { label: 14, letters: 7, vertical: false, x: 12, y: 8 }, // rooster
        { label: 15, letters: 6, vertical: true, x: 20, y: 9 }, // rabbit
        { label: 16, letters: 10, vertical: false, x: 13, y: 6 }, // scaracabaz
        { label: 16, letters: 3, vertical: true, x: 7, y: 12 }, // cat
    ];

    let indexMap = new Map();

    {
        let index = 0;

        for (let i = 0; i < crossword.length; i++) {
            for (let j = 0; j < crossword[i].letters; j++) {
                indexMap.set(`${i}${j}`, index);
                index++;
            }
        }
    }

    let letters = crossword
        .flatMap(({ letters }) => letters)
        .reduce((a, b) => a + b);
    let answers = Array(letters).fill("");

    async function submit() {
        answerStore.set(answers.join(""));

        await validate();
    }

    /** @param {number} index */
    async function next(index) {
        if (!answers[index]) return;

        let element = /** @type {HTMLInputElement} */ (
            document.getElementById(`${index + 1}`)
        );

        if (!element) return;

        element.focus();
        element.select();
    }

    /** @param { KeyboardEvent } e @param {number} index */
    async function keydown(e, index) {
        if (e.key != "Backspace") return;

        e.preventDefault();

        if (answers[index]) {
            answers[index] = "";
        } else {
            let element = /** @type {HTMLInputElement} */ (
                document.getElementById(`${index - 1}`)
            );

            if (!element) return;
            element.focus();
            element.select();
        }
    }
</script>

<div class="flex flex-col items-center">
    <p class="pb-2">
        You've asked for it... and here it is... The unnconnect Crossword?
    </p>
    <div
        class="grid"
        style={`grid-template-columns: repeat(${width}, 35px); grid-template-rows: repeat(${height}, 35px)`}
    >
        {#each crossword as { label, letters, vertical, x, y }, i}
            {#each { length: letters } as _, j}
                {@const index = indexMap.get(`${i}${j}`)}
                <div
                    style={`grid-column-start: ${
                        x + (vertical ? 0 : j) + 1
                    }; grid-row-start: ${y + (vertical ? j : 0) + 1}`}
                >
                    {#if j == 0}
                        <label for={`${index}`} class="absolute pl-1"
                            >{label}</label
                        >
                    {/if}
                    <input
                        class="w-full h-full border font-bold text-center text-3xl bg-galaxy_purple-400"
                        id={`${index}`}
                        type="text"
                        minlength="1"
                        maxlength="1"
                        bind:value={answers[index]}
                        on:keydown={(e) => keydown(e, index)}
                        on:input={() => next(index)}
                    />
                </div>
            {/each}
        {/each}

        <p
            class="flex justify-center items-center col-start-10 row-start-12 col-span-4 row-span-1 border"
        >
            Horizontal
        </p>
        <div
            class="flex flex-col justify-center items-center p-2 text-center col-start-10 row-start-13 col-span-4 row-span-8 border text-sm"
        >
            <p>2. Trotter</p>
            <p>5. Holds and absorbs</p>
            <p>8. Starts and separates</p>
            <p>11. Long</p>
            <p>12. Boxing Gym</p>
            <p>14. The missing animal</p>
            <p>16. Bull Beetle</p>
        </div>
        <p
            class="flex justify-center items-center col-start-[14] row-start-12 col-span-5 border"
        >
            Vertical
        </p>
        <div
            class="flex flex-col justify-center items-center p-2 text-center col-start-[14] row-start-13 col-span-5 row-span-8 border text-sm"
        >
            <p>1. Creates and melts</p>
            <p>3. He who jumped off the beetle's head to win the race</p>
            <p>4. Lan</p>
            <p>6. Voidranger Trampler</p>
            <p>7. Peppy</p>
            <p>8. Feeds and puts out</p>
            <p>9. Oroboros</p>
            <p>10. Carries and chops</p>
            <p>13. Malefic Ape</p>
            <p>15. Aha</p>
            <p>16. Yaoshi</p>
        </div>
    </div>
    <button
        class="text-2xl w-fit bg-galaxy_purple-400 px-4 py-2 rounded-sm"
        on:click={submit}>Submit</button
    >
</div>
