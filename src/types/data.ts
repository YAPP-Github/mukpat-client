interface ApiResponse {
	status: number;
	message?: string;
	result?: unknown;
}

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

export { type ApiResponse, type Post, type Profile };
