import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'classnames';
import { wrapper, content, Color, Size } from './Chip.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: Color;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Chip = ({ color = 'grey', size = 'md', children, leftIcon, rightIcon, className = '', ...rest }: Props) => {
  return (
    <div className={clsx(wrapper({ color }), className)} {...rest}>
      {leftIcon}
      <span className={content({ size })}>{children}</span>
      {rightIcon}
    </div>
  );
};

export default Chip;
