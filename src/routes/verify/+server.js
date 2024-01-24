import weeks from "$lib/server/weeks";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { week, answers } = await request.json();

    let congrats = weeks[week].congrats;

    for (let i = 0; i < answers.length; i++) {
        if (!weeks[week].answers[i].test(answers[i].trim())) {
            congrats = "You Cheated Not Only the Game, But Yourself";
            break;
        }
    }

    return new Response(String(JSON.stringify({ congrats })));
}
