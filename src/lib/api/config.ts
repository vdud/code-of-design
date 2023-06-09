export const siteName = 'Code Of Design';
export const siteUrl = 'https://codeofdesign.xyz/';
export const siteTitle = 'Code Of Design';
export const siteDescription = 'Digital garden growing curious minds with articles about HTML, CSS, JavaScript and things related to web development and design.';
export const siteImage = `${siteUrl}social.png`;
export const postImage = 'https://social-share-images.vercel.app/';

// export const twitterHandle = '@joyofcodedev';
// export const twitter = 'https://twitter.com/joyofcodedev';
// export const youtube = 'https://www.youtube.com/c/joyofcodedev';
// export const github = 'https://github.com/mattcroat';

export const api = 'https://api.github.com';
export const owner = 'vdud';
export const repo = 'code-of-design';
export const path = 'posts';

export const categories = {
	javascript: 'JavaScript',
	react: 'React',
	css: 'CSS',
	general: 'General',
	design: 'Design',
	git: 'Git & GitHub',
	next: 'Next.js',
	typescript: 'TypeScript',
	svelte: 'Svelte',
	sveltekit: 'SvelteKit'
};

// https://api.github.com/repos/user/repo/contents/posts
export const postsUrl = `${api}/repos/${owner}/${repo}/contents/${path}`;

// https://github.com/user/repo/blob/main/posts
export const fileUrl = `https://github.com/${owner}/${repo}/blob/main/posts`;

// https://raw.githubusercontent.com/user/repo/main/posts/post-slug/images/image.webp
export const imagesUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/posts`;
