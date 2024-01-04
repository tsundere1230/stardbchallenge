import weeks from "$lib/server/weeks";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { week, i, answer } = await request.json();

    let newi = i;
    let message = "omegalul :sobpuddle:";

    if (weeks[week].answers[i] == answer.toLowerCase()) {
        newi += 1;
    } else if (weeks[week].hints[i][answer]) {
        message = weeks[week].hints[i][answer];
    }

    return new Response(String(JSON.stringify({ newi, message })));
}