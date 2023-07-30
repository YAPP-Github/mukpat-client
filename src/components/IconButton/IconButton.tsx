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
  initActive?: boolean;
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
  initActive = false,
  width = '36',
  height = '36',
  onClick,
  className,
  ...rest
}: IconButtonProps) => {
  const [isActive, setIsActive] = useState(initActive);
  const [status, setStatus] = useState(ICON_STATUS.DEFAULT);
  const [iconSvgId, setIconSvgId] = useState<string>(iconType);

  useEffect(() => {
    switch (true) {
      case error:
        setStatus(ICON_STATUS.ERROR);
        break;
      case disabled:
        setStatus(ICON_STATUS.DISABLE);
        break;
      case active:
        initActive && setStatus(ICON_STATUS.ACTIVE);
        break;
      default:
        setStatus(ICON_STATUS.DEFAULT);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, disabled]);

  const updateClickStatus = () => {
    switch (true) {
      case error:
        setStatus(ICON_STATUS.ACTIVE);
        setIsActive(true);
        break;
      case active:
        setStatus(isActive ? ICON_STATUS.DEFAULT : ICON_STATUS.ACTIVE);
        setIsActive(!isActive);
        break;
      default:
        setStatus(ICON_STATUS.DEFAULT);
        break;
    }
  };
  const isPossibleHover = () => !error && !disabled && status !== ICON_STATUS.ACTIVE && hover;

  const handleMouseEnter = () => {
    if (isPossibleHover()) {
      setStatus(ICON_STATUS.HOVER);
    }
  };

  const handleMouseLeave = () => {
    if (isPossibleHover()) {
      setStatus(ICON_STATUS.DEFAULT);
    }
  };

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
    updateClickStatus();
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
