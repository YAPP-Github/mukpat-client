import { type Post } from '@/types/data';
import ky from 'ky';

export const fetchPosts = async () => {
	// const res = await fetch('http://localhost:5000/posts');
	// return res.json();
	return ky.get('http://localhost:5000/posts').json();
};

const PostServerComponent = async () => {
	const post = (await fetchPosts()) as Post[];

	return (
		<ul>
			{post.map((postItem) => (
				<li key={postItem.id}>{postItem.title}</li>
			))}
		</ul>
	);
};

export default PostServerComponent;
