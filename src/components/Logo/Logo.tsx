import Link from 'next/link';
import { logo } from './Logo.css';

const Logo = () => {
	return (
		<Link href="/">
			<div className={logo}>로고</div>
		</Link>
	);
};

export default Logo;
