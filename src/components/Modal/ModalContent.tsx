import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { type ContentSize, contentWrapper } from './Modal.css';

type ModalContentProps = {
  size: ContentSize;
} & HTMLAttributes<HTMLDivElement>;

const ModalContent = ({ size, className, children, ...rest }: ModalContentProps) => {
  return (
    <div className={cx(contentWrapper({ size }), className)} {...rest}>
      {children}
    </div>
  );
};

export default ModalContent;
