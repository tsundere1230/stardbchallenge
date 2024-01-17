import weeks from "$lib/server/weeks";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let week = parseInt(params.week) - 1;
    let { html } = weeks[week].components[0].render();

    return { html };
}
