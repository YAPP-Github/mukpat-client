import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
	title: '먹팟',
	description: '점심 랜덤 모임',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body>{children}</body>
		</html>
	);
}
