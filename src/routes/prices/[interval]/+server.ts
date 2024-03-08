import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
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
    return response;
}