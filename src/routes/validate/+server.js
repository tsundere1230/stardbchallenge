import weeks from "$lib/server/weeks";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { week, i, answer } = await request.json();

    let message = "omegalul :sobpuddle:";

    if (weeks[week].answers[i].test(answer)) {
        message = "";
    } else {
        for (let hint of weeks[week].hints[i]) {
            if (hint.r.test(answer)) {
                message = hint.s;
                break;
            }
        }
    }

    return new Response(String(JSON.stringify({ message })));
}
