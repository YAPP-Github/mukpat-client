import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { type FooterType, footerWrapper } from './Modal.css';

type ModalFooterProps = {
	type: FooterType;
} & HTMLAttributes<HTMLDivElement>;

const ModalFooter = ({ type, className, children, ...rest }: ModalFooterProps) => {
	return (
		<div className={cx(footerWrapper({ type }), className)} {...rest}>
			{children}
		</div>
	);
};

export default ModalFooter;
