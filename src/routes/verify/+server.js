import weeks from "$lib/server/weeks";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { week, i, answer } = await request.json();

    let newi = i;
    let newMessage = "omegalul :sobpuddle:";

    if (weeks[week].answers[i].test(answer)) {
        newi += 1;
        newMessage = "";
    } else {
        for (let hint of weeks[week].hints[i]) {
            if (hint.r.test(answer)) {
                newMessage = hint.s;
                break;
            }
        }
    }

    let { html: newHtml } = weeks[week].components[newi].render();
    let newEnd = newi == weeks[week].components.length - 1;

    return new Response(
        String(JSON.stringify({ newi, newMessage, newHtml, newEnd }))
    );
}
