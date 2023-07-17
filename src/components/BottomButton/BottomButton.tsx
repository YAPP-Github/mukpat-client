'use client';
import { Button } from '@/components';
import { wrapper, error, button } from './BottomButton.css';
import { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

type ButtonProps = {
  debounceDelay?: number;
  errorMsg?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BottomButton = ({ children, errorMsg, disabled, onClick, className, debounceDelay = 200 }: ButtonProps) => {
  return (
    <div className={cx(wrapper, className)}>
      {errorMsg && <div className={error}>{errorMsg}</div>}
      <Button
        size="mobileBottom"
        disabled={disabled}
        className={button}
        debounceDelay={debounceDelay}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default BottomButton;
