'use client';

import { Typography } from '@/components';
import ToastIcon from './ToastIcon';
import { wrapper } from './Toast.css';

interface Props {
	message: string;
}

const Toast = ({ message }: Props) => {
	return (
		<div className={wrapper}>
			<ToastIcon />
			<Typography variant="body2" as="span" color="white">
				{message}
			</Typography>
		</div>
	);
};

export default Toast;
