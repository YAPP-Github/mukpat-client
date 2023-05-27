import { usePostQuery } from '@/app/post/hooks';

const PostClientComponent = () => {
	const { data: post } = usePostQuery();

	return (
		<ul>
			{post.map((postItem) => (
				<li key={postItem.id}>{postItem.title}</li>
			))}
		</ul>
	);
};

export default PostClientComponent;
