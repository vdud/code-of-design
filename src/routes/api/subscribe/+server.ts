import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { subscriber } from '$db/collections';

export const POST: RequestHandler = async ({ request }) => {
	const email = await request.json();

	if (!email) {
		return json(
			{ error: 'You forget the email. 😊' },
			{
				status: 400
			}
		);
	}

	const allSubscribers = await subscriber.find({}).toArray();

	const isSubscribed = allSubscribers.find((subscriber) => subscriber.email === email);

	if (isSubscribed) {
		return json(
			{ error: `You're already subscribed. 😊` },
			{
				status: 400
			}
		);
	}

	await subscriber.insertOne({ email });

	return json(
		{ success: 'Thank you for subscribing! 🥳' },
		{
			status: 201,
			headers: { location: '/' }
		}
	);
};
