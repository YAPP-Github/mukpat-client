interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface Profile {
	userId: number;
	nickName: string;
}

export { type Post, type Profile };
