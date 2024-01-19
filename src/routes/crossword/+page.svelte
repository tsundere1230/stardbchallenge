<script>
    let width = 23;
    let height = 17;

    let crossword = [
        { label: 1, letters: 4, vertical: true, x: 0, y: 0 },
        { label: 2, letters: 3, vertical: false, x: 15, y: 0 },
        { label: 3, letters: 3, vertical: true, x: 4, y: 5 },
        { label: 4, letters: 4, vertical: true, x: 0, y: 10 },
        { label: 5, letters: 5, vertical: false, x: 6, y: 9 },
        { label: 6, letters: 5, vertical: true, x: 8, y: 0 },
        { label: 7, letters: 3, vertical: true, x: 1, y: 5 },
        { label: 8, letters: 4, vertical: false, x: 6, y: 7 },
        { label: 8, letters: 4, vertical: true, x: 22, y: 12 },
        { label: 9, letters: 5, vertical: true, x: 10, y: 0 },
        { label: 10, letters: 5, vertical: true, x: 3, y: 9 },
        { label: 11, letters: 6, vertical: false, x: 0, y: 15 },
        { label: 12, letters: 5, vertical: false, x: 2, y: 3 },
        { label: 13, letters: 6, vertical: true, x: 12, y: 0 },
        { label: 14, letters: 7, vertical: false, x: 12, y: 8 },
        { label: 15, letters: 6, vertical: true, x: 20, y: 9 },
        { label: 16, letters: 3, vertical: true, x: 7, y: 12 },
        { label: 16, letters: 10, vertical: false, x: 13, y: 6 },
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
        console.log(answers.join(""));
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
    <div
        class="grid"
        style={`grid-template-columns: repeat(${width}, 50px); grid-template-rows: repeat(${height}, 50px)`}
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
                        class="w-full h-full border font-bold text-center text-4xl bg-galaxy_purple-400"
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
    </div>
    <button
        class="text-2xl w-fit bottom-4 bg-galaxy_purple-400 px-4 py-2 rounded-sm"
        on:click={submit}>Submit</button
    >
</div>
