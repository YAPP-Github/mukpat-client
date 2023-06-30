import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
	/** icon id (spriteIcons 폴더하에 있는 svg 파일명과 동일함) */
	id: string;
}

const SvgIcon = ({ id, width = 16, height = 16, fill = 'none', ...rest }: Props) => {
	return (
		<svg width={width} height={height} fill={fill} {...rest}>
			<use href={`/sprite.svg#${id}`} />
		</svg>
	);
};

export default SvgIcon;
