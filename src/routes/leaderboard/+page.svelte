<script>
    import challengers from "$lib/challengers.json";

    let leaderboard = challengers.reduce(
        (/** @type {{completed: number, names: string[]}[]}*/ curr, val) => {
            let group = curr.find((g) => g.completed == val.completed);
            if (group) {
                group.names.push(val.name);
            } else {
                curr.push({ completed: val.completed, names: [val.name] });
            }
            return curr;
        },
        [],
    );
</script>

<div class="space-y-10">
    <h2 class="text-galaxy_purple-250 text-center text-5xl font-bold">
        Leaderboard
    </h2>
    <table>
        <tr>
            <th class="text-left text-galaxy_purple-50 px-4"
                >Completed Challenges</th
            >
            <th class="text-left text-galaxy_purple-50 px-4">Challenger</th>
        </tr>
        {#each leaderboard as entry}
            <tr>
                <td class="px-4">{entry.completed}</td>
                <td class="px-4">{entry.names.join(", ")}</td>
            </tr>
        {/each}
    </table>
</div>
