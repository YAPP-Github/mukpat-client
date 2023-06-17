import { Header } from '@/components/server';
import { Content, Typography } from '@/components';

export default function Home() {
	return (
		<>
			<Header />
			<Content>
				<div style={{ height: '150vh', paddingTop: '120px' }}>
					<Typography variant="heading2" as="h1">
						HOME
					</Typography>
				</div>
			</Content>
		</>
	);
}
