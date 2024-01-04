import weeks from "$lib/weeks.js";

/** @type {import('./$types').RequestHandler} */

export async function POST({request}) {
    let { week, i, answer } = await request.json();
    if (weeks[week].answers[i] == answer.toLowerCase()) {
        i += 1;
    }
    return new Response(String(i));
}