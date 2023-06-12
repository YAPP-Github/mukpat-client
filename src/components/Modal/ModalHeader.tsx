import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { type HeaderType, headerWrapper } from './Modal.css';

type ModalHeaderProps = {
	type: HeaderType;
	title: string;
} & HTMLAttributes<HTMLDivElement>;

const ModalHeader = ({ type, title = '', className, children, ...rest }: ModalHeaderProps) => {
	return (
		<div className={cx(headerWrapper({ type }), className)} {...rest}>
			<div>{title}</div>
			{children}
		</div>
	);
};

export default ModalHeader;
