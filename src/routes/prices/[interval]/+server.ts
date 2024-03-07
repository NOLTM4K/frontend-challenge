import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ params }) {
    console.log(JSON.stringify(params));
    const response = await fetch(`https://n8n.thearc.dev/webhook/pricing`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'content-type': 'application/json'
        }
    })
    .catch(error => {
        console.log(error);
        return new Response(JSON.stringify(error));
    });
    console.log(response);
    return response;
}