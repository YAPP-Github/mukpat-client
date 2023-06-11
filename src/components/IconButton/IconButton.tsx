'use client';
import cx from 'classnames';
import React, { useState, useEffect, MouseEvent, ButtonHTMLAttributes } from 'react';
import { getIconUrl, IconType } from '@/utils/getIconUrl';
import { iconButton } from './IconButton.css';
import Image, { ImageProps } from 'next/image';

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
	DEFAULT: 'default',
	ERROR: 'error',
	DISABLE: 'disable',
};

const IconButton = ({
	iconType = 'check',
	hover = true,
	active = true,
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

	useEffect(() => {
		setStatus(error ? ICON_STATUS.ERROR : disabled ? ICON_STATUS.DISABLE : ICON_STATUS.DEFAULT);
	}, [error, disabled]);

	const handleMouseEnter = () => {
		if (error || disabled || status === ICON_STATUS.ACTIVE) return;
		hover && setStatus(ICON_STATUS.HOVER);
	};

	const handleMouseLeave = () => {
		if (error || disabled || status === ICON_STATUS.ACTIVE) return;
		hover && setStatus(ICON_STATUS.DEFAULT);
	};

	const handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		if (error || disabled) return;
		if (active) {
			setStatus(isActive ? ICON_STATUS.DEFAULT : ICON_STATUS.ACTIVE);
			setIsActive(!isActive);
		}
		onClick?.(e);
	};

	return (
		<button
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={cx(iconButton, className)}
			onClick={handleOnClick}
			{...rest}
			data-testid="icon-button"
		>
			<Image src={getIconUrl(iconType, status)} alt={'Icon'} width={width} height={height} />
		</button>
	);
};

export default IconButton;
