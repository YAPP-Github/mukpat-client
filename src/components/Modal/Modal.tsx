'use client';
import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { type Size, modalWrapper, backgroundWrapper } from './Modal.css';
import { useClickOutside, useBooleanState } from '@/hooks';

type ModalProps = {
	size?: Size;
	isModalOpen: boolean;
	setIsModalOpen: (value: boolean) => void;
} & HTMLAttributes<HTMLDivElement>;

const Modal = ({ size, isModalOpen, setIsModalOpen, className, children, ...rest }: ModalProps) => {
	const [isOpen, , closeModal] = useBooleanState(isModalOpen);

	const ref = useClickOutside<HTMLDivElement>({
		onClickOutside: () => {
			setIsModalOpen(false);
			closeModal();
		},
	});

	if (!isOpen) return null;

	return (
		<div className={cx(backgroundWrapper)}>
			<div className={cx(modalWrapper({ size }), className)} ref={ref} {...rest}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
