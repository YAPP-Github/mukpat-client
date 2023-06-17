import { ReactNode } from 'react';
import { wrapper } from './Content.css';

const Content = ({ children }: { children: ReactNode }) => {
	return <main className={wrapper}>{children}</main>;
};

export default Content;
