import { PostServerComponent } from '@/app/post/components';

export default function Post() {
	return (
		<div>
			<div>post</div>
			{/* @ts-expect-error Server Component */}
			<PostServerComponent />
		</div>
	);
}
