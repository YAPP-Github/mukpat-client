import PostServerComponent from '@/components/Post/Post.server';

export default function Home() {
	return (
		<div>
			<div>home</div>
			{/* @ts-expect-error Server Component */}
			<PostServerComponent />
		</div>
	);
}
