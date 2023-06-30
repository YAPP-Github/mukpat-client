'use client';
import { type Color, Size, buttonWrapper } from './Button.css';
import { ButtonHTMLAttributes, useCallback } from 'react';
import cx from 'classnames';
import { debounce } from 'lodash';

type ButtonProps = {
  color?: Color;
  size?: Size;
  debounceDelay?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children = 'button',
  size,
  color,
  disabled,
  onClick,
  debounceDelay = 200,
  className,
  ...rest
}: ButtonProps) => {
  const handleClick = useCallback(
    debounce((event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }
    }, debounceDelay),
    [onClick, debounceDelay],
  );

  return (
    <button
      {...rest}
      className={cx(buttonWrapper({ color, size }), className)}
      disabled={disabled}
      onClick={handleClick}
    >
      <div>{children}</div>
    </button>
  );
};

export default Button;
