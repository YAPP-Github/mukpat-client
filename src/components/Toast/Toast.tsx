'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HTMLAttributes, useEffect } from 'react';
import { Typography } from '@/components';
import { wrapper } from './Toast.css';
import { getIconUrl } from '../IconButton/utils/getIconUrl';

// TODO : type에 따라 다른 아이콘 구성하기 : warn, success

interface Props extends HTMLAttributes<HTMLDivElement> {
	/** 토스트 종류 */
	type: 'success' | 'warn';
	/** 토스트 메시지 */
	message: string;
	/** 토스트가 닫힐때 호출되는 함수 */
	onClose: () => void;
	/** 몇 초뒤에 Toast가 자동으로 닫히게 할 건지 (default : 2) */
	closeAfter?: number;
}

const Toast = ({ type, message, onClose, closeAfter = 2 }: Props) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, closeAfter * 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [onClose, closeAfter]);

	return (
		<motion.div className={wrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Image src={getIconUrl('toast', type)} alt="" width={24} height={24} />
			<Typography variant="body2" as="span" color="white">
				{message}
			</Typography>
		</motion.div>
	);
};

export default Toast;
