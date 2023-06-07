import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const { color, borderRadius, zIndices } = themeTokens;

export const modalWrapper = recipe({
	base: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		boxShadow: '0px 14px 28px -7px rgba(0, 0, 0, 0.04)',
		borderRadius: borderRadius.xl,
		backgroundColor: color.white,
		zIndex: zIndices.modal,
		overflow: 'auto',
	},
	variants: {
		size: {
			large: {
				width: '472px',
			},
			small: {
				width: '320px',
			},
		},
	},
	defaultVariants: {
		size: 'large',
	},
});
export const backgroundWrapper = style({
	width: '100%',
	height: '100%',
	top: '0',
	left: '0',
	position: 'absolute',
	background: '#000000',
	opacity: '0.3',
	zIndex: zIndices.overlay,
});

export type ModalVariants = RecipeVariants<typeof modalWrapper>;
export type Size = NonNullable<ModalVariants>['size'];
