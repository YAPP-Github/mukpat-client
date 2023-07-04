'use client';
import { Button } from '@/components';
import { wrapper } from './BottomButton.css';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  debounceDelay?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BottomButton = ({ children = 'button', disabled, onClick, debounceDelay = 200, className }: ButtonProps) => {
  return (
    <div className={wrapper}>
      <Button disabled={disabled} className={className} debounceDelay={debounceDelay} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

export default BottomButton;
