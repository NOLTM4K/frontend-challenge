import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { email } = await request.json();
    // regex accepting emails of format anystring@anystring.anystring
    const regex = /^\S+@\S+\.\S+$/;

    if (!regex.test(email)) {
        return json({ error: 'Invalid email format. Please update and resubmit.' }, { status: 400 });
    }

    // Placeholder for saving the email to a database or sending a confirmation email
    // For demonstration purposes, let's assume the save operation was successful
    const saveSuccessful = true;

    if (!saveSuccessful) {
        return json({ error: 'Email could not be saved. Please try again later.' }, { status: 500 });
    }

    return json({ message: 'Newsletter subscription successful!' }, { status: 200 });
}