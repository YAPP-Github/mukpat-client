import { Header } from '@/components/server';
import { Content, Typography } from '@/components';
import { LoginForm } from '@/app/login/components';

const login = () => {
	return (
		<>
			<Header actionRequired={false} />
			<Content>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<Typography variant="heading2" as="h1">
						로그인 테스트
					</Typography>
					<LoginForm />
				</div>
			</Content>
		</>
	);
};

export default login;
