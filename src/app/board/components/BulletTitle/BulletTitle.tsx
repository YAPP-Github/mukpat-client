import { ComponentPropsWithRef, ReactNode } from 'react';
import { Typography } from '@/components';
import { bulletTitle } from './BulletTitle.css';
import cx from 'classnames';

interface Props extends ComponentPropsWithRef<typeof Typography> {
  className?: string;
  children: ReactNode;
}

const BulletTitle = ({ children, className, ...rest }: Props) => {
  return (
    <Typography variant="label2" className={cx(bulletTitle, className)} {...rest}>
      {children}
    </Typography>
  );
};

export default BulletTitle;
