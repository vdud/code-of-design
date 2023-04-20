import { getPosts } from '$lib/api/posts';
import { dataPosts } from '$db/collections';

export const load = async ({ setHeaders }) => {
	const allPosts = await dataPosts.find({}).toArray();
	const posts = await getPosts(allPosts);

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});

	return {
		body: JSON.stringify(posts)
	};
};
