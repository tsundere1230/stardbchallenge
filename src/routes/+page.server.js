import weeks from '$lib/server/weeks';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return { length: weeks.length };
}