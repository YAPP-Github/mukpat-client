'use client';
import cx from 'classnames';
import React, { useState, useEffect, MouseEvent, ButtonHTMLAttributes } from 'react';
import { iconButton } from './IconButton.css';
import Image, { ImageProps } from 'next/image';
import SvgIcon from '../SvgIcon/SvgIcon';
import { IconType } from './types/IconType';

type Image = Pick<ImageProps, 'width' | 'height'>;

type IconButtonProps = {
  iconType: IconType;
  hover?: boolean;
  active?: boolean;
  error?: boolean;
} & Image &
  ButtonHTMLAttributes<HTMLButtonElement>;

const ICON_STATUS = {
  HOVER: 'hover',
  ACTIVE: 'active',
  DEFAULT: '',
  ERROR: 'error',
  DISABLE: 'disable',
};

const IconButton = ({
  iconType = 'check',
  hover = false,
  active = false,
  error = false,
  disabled = false,
  width = '36',
  height = '36',
  onClick,
  className,
  ...rest
}: IconButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState(ICON_STATUS.DEFAULT);
  const [iconSvgId, setIconSvgId] = useState<string>(iconType);

  useEffect(() => {
    if (!error) return;
    setStatus(error ? ICON_STATUS.ERROR : ICON_STATUS.DEFAULT);
  }, [error, disabled]);

  useEffect(() => {
    setStatus(disabled ? ICON_STATUS.DISABLE : ICON_STATUS.DEFAULT);
  }, [disabled]);

  const handleMouseEnter = () => {
    if (error || disabled || status === ICON_STATUS.ACTIVE) return;
    hover && setStatus(ICON_STATUS.HOVER);
  };

  const handleMouseLeave = () => {
    if (error || disabled || status === ICON_STATUS.ACTIVE) return;
    hover && setStatus(ICON_STATUS.DEFAULT);
  };

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (disabled) return;
    if (active || error) {
      setStatus(isActive ? ICON_STATUS.DEFAULT : ICON_STATUS.ACTIVE);
      setIsActive(!isActive);
    }
    onClick?.(e);
  };
  useEffect(() => {
    const appendDashStatus = status !== ICON_STATUS.DEFAULT ? `-${status}` : '';
    setIconSvgId(`${iconType}${appendDashStatus}`);
  }, [iconType, setIconSvgId, status]);
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cx(iconButton, className)}
      onClick={handleOnClick}
      {...rest}
      data-testid="icon-button"
    >
      <SvgIcon id={iconSvgId} width={width} height={height} />
    </button>
  );
};

export default IconButton;
