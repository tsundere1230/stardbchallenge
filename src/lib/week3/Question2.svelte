<script>
    /** @type {import("svelte/store").Writable<string>} */
    export let answerStore;
    /** @type {() => Promise<void>} */
    export let validate;

    import CellGrid from "./CellGrid.svelte";

    let clues = [
        "The highest floor delivers tickets 30 minutes earlier than Yanming",
        "Xicui, delivers tickets later than Wen Furui",
        "Xicui delivers tickets in the 2nd Floor",
        "The lowest floor officer delivers tickets at 8:00 PM",
        "The officer who delivers tickets at 8:30 PM is either on the 2nd floor or Yanming",
    ];
    let cluesDone = Array(clues.length).fill(false);

    async function submit() {
        answerStore.set(floors.join("") + times.join(""));

        await validate();
    }

    let officers = ["Xicui", "Yanming", "Yukong", "Wen Furui"];
    let floors = Array(officers.length).fill("");
    let times = Array(officers.length).fill("");
</script>

<h1 class="text-2xl font-bold text-galaxy_purple-50">
    Logic Grid Challenge 2/5
</h1>
<p class="text-lg my-4">
    You’ve made it! You’re now eligible to attend this year’s Wood Dragon
    Celebration! Based on your entry ticket number…<br />
    Please approach the correct official to pick up your entrance tickets! Solve
    the following Logic Grid!
</p>
<div class="flex flex-col justify-around items-center">
    <div class="flex space-x-10 justify-around">
        <div
            class="grid grid-cols-[200px_repeat(2,150px)] grid-rows-[200px_repeat(2,150px)] gap-1 text-space_dark"
        >
            <div class="col-span-1 row-span-1"></div>
            <div class="relative col-span-1 row-span-1 bg-galaxy_purple-200">
                <p
                    class="absolute flex w-full justify-center bg-galaxy_purple-700 py-1 text-lg font-bold text-off_white"
                >
                    Floor
                </p>
                <div class="grid h-full grid-cols-4 divide-x font-medium">
                    <p
                        class="flex flex-col items-end justify-center pb-2"
                        style="writing-mode: vertical-lr"
                    >
                        1st
                    </p>
                    <p
                        class="flex flex-col items-end justify-center pb-2"
                        style="writing-mode: vertical-lr"
                    >
                        2nd
                    </p>
                    <p
                        class="flex flex-col items-end justify-center pb-2"
                        style="writing-mode: vertical-lr"
                    >
                        3rd
                    </p>
                    <p
                        class="flex flex-col items-end justify-center pb-2"
                        style="writing-mode: vertical-lr"
                    >
                        4th
                    </p>
                </div>
            </div>

            <div class="relative col-span-1 row-span-1 bg-galaxy_purple-200">
                <p
                    class="absolute flex w-full justify-center bg-galaxy_purple-700 py-1 text-lg font-bold text-off_white"
                >
                    Time
                </p>
                <div class="grid h-full grid-cols-4 divide-x font-medium">
                    <p
                        class="flex flex-col items-end justify-center pb-2"
                        style="writing-mode: vertical-lr"
                    >
                        8:00 PM
                    </p>
                    <p
                        class="flex flex-col items-end justify-center pb-2"
                        style="writing-mode: vertical-lr"
                    >
                        8:30 PM
                    </p>
                    <p
                        class="flex flex-col items-end justify-center pb-2"
                        style="writing-mode: vertical-lr"
                    >
                        9:00 PM
                    </p>
                    <p
                        class="flex flex-col items-end justify-center pb-2"
                        style="writing-mode: vertical-lr"
                    >
                        9:30 PM
                    </p>
                </div>
            </div>

            <div class="col-span-1 row-span-1 bg-galaxy_purple-200">
                <div class="flex h-full">
                    <p
                        class="flex justify-center bg-galaxy_purple-700 px-1 text-lg font-bold text-off_white"
                        style="writing-mode: vertical-lr"
                    >
                        Officer
                    </p>
                    <div class="grid w-full grid-rows-4 divide-y font-medium">
                        <p class="flex items-center pl-2">Xicui</p>
                        <p class="flex items-center pl-2">Yanming</p>
                        <p class="flex items-center pl-2">Yukong</p>
                        <p class="flex items-center pl-2">Wen Furui</p>
                    </div>
                </div>
            </div>

            <div class="col-span-1 row-span-1">
                <CellGrid />
            </div>
            <div class="col-span-1 row-span-1">
                <CellGrid />
            </div>

            <div class="col-span-1 row-span-1 bg-galaxy_purple-200">
                <div class="flex h-full">
                    <p
                        class="flex justify-center bg-galaxy_purple-700 px-1 text-lg font-bold text-off_white"
                        style="writing-mode: vertical-lr"
                    >
                        Time
                    </p>
                    <div class="grid w-full grid-rows-4 divide-y font-medium">
                        <p class="flex items-center pl-2">8:00 PM</p>
                        <p class="flex items-center pl-2">8:30 PM</p>
                        <p class="flex items-center pl-2">9:00 PM</p>
                        <p class="flex items-center pl-2">9:30 PM</p>
                    </div>
                </div>
            </div>

            <div class="col-span-1 row-span-1">
                <CellGrid />
            </div>
        </div>
        <div class="flex flex-col justify-around">
            <div>
                <p class="text-xl font-semibold text-off_white">Clues:</p>
                {#each clues as clue, i}
                    <div class="mb-2 flex items-center">
                        <button
                            class="mr-3 mt-1.5 h-6 w-6 shrink-0 border-2 {cluesDone[
                                i
                            ]
                                ? 'bg-galaxy_purple-800 text-galaxy_purple-800'
                                : ''}"
                            on:click={() => (cluesDone[i] = !cluesDone[i])}
                        ></button>
                        <p
                            class={cluesDone[i]
                                ? "line-through text-galaxy_purple-800"
                                : "text-off_white"}
                        >
                            {clue}
                        </p>
                    </div>
                {/each}
            </div>
            <div>
                <table class="border">
                    <tr class="border-b">
                        <th
                            class="text-left text-galaxy_purple-50 px-4 text-nowrap"
                            >Officer</th
                        >
                        <th class="text-left text-galaxy_purple-50 px-4"
                            >Floor</th
                        >
                        <th class="text-left text-galaxy_purple-50 px-4"
                            >Time</th
                        >
                    </tr>
                    {#each { length: 4 } as _, i}
                        <tr>
                            <td class="px-4">
                                <p>{officers[i]}</p>
                            </td>
                            <td class="px-4">
                                <select
                                    class="bg-space_dark border-none"
                                    bind:value={floors[i]}
                                >
                                    <option value="" selected disabled
                                        >None</option
                                    >
                                    <option value="1">1st</option>
                                    <option value="2">2nd</option>
                                    <option value="3">3rd</option>
                                    <option value="4">4th</option>
                                </select>
                            </td>
                            <td class="px-4">
                                <select
                                    class="bg-space_dark border-none"
                                    bind:value={times[i]}
                                >
                                    <option value="" selected disabled
                                        >None</option
                                    >
                                    <option value="800">8:00 PM</option>
                                    <option value="830">8:30 PM</option>
                                    <option value="900">9:00 PM</option>
                                    <option value="930">9:30 PM</option>
                                </select>
                            </td>
                        </tr>
                    {/each}
                </table>
            </div>
        </div>
    </div>
    <button
        class="text-2xl w-fit bg-galaxy_purple-400 px-4 py-2 rounded-sm"
        on:click={submit}>Submit</button
    >
</div>
