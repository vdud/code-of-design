import { json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

import { dataPosts } from '$db/collections';

export const POST = (async ({ request }) => {
	const data = await request.json();

	const allData = await dataPosts.find({}).toArray();

	return json(allData);
}) satisfies RequestHandler;
