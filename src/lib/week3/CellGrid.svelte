<script lang="ts">
    import { X, Check } from "lucide-svelte";

    let cellState = {
        blank: 0,
        x: 1,
        check: 2,
    };

    let grid = Array.from({ length: 4 }, () => Array(4).fill(cellState.blank));

    function toggleCell(i: number, j: number) {
        if (grid[i][j] === cellState.blank) {
            grid[i][j] = cellState.x;
        } else if (grid[i][j] === cellState.x) {
            grid[i][j] = cellState.check;
        } else {
            grid[i][j] = cellState.blank;
        }
        grid = [...grid];
    }
</script>

<div
    class="grid h-full grid-cols-4 grid-rows-4 divide-x divide-y bg-galaxy_purple-350"
>
    {#each grid as row, i}
        {#each row as cell, j}
            <button
                class="col-span-1 row-span-1 flex h-full w-full items-center justify-center {i ===
                0
                    ? 'border-l border-t'
                    : ''}"
                on:click={() => toggleCell(i, j)}
            >
                {#if cell === cellState.x}
                    <X class="h-7 w-7 bg-neon_pink" />
                {:else if cell === cellState.check}
                    <Check class="h-7 w-7 bg-neon_green" />
                {/if}
            </button>
        {/each}
    {/each}
</div>
