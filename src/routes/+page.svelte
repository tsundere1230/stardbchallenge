<script>
    import weeks from "$lib/weeks";
</script>

<div>
    <h1>StarDB Challenges - Season 2</h1>
        {#each weeks as week, i}
            <a href="/challenge/weeks/{i}" class ="list">Week {i}</a><br />
        {/each}
</div>
