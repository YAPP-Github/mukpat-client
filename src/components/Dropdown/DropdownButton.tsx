'use client';

import cx from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { buttonBase, buttonVariant, buttonText, type Size, Color } from './Dropdown.css';
import CaretDownIcon from './Icons/CaretDownIcon';
import DropdownToggle from './DropdownToggle';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 선택된 요소가 없을때 기본적으로 버튼에 표시할 텍스트 @default 선택
   */
  placeholder?: string;

  /**
   * 버튼의 크기를 설정한다. @default medium
   */
  size?: Size;

  /**
   * 에러 상태의 유무 @default false
   */
  isError?: boolean;

  /**
   * DropdownButton의 색상 @default transparent
   */
  color?: Color;
}

const DropdownButton = ({
  children,
  placeholder = '선택',
  onClick,
  isError = false,
  size,
  className,
  color,
  ...rest
}: Props) => {
  return (
    <DropdownToggle
      className={cx(buttonBase, buttonVariant({ isError, size, color }), className)}
      onClick={onClick}
      {...rest}
    >
      <span className={buttonText({ size })}>{children ?? placeholder}</span>
      <span aria-hidden={true}>
        <CaretDownIcon size={24} />
      </span>
    </DropdownToggle>
  );
};

export default DropdownButton;
