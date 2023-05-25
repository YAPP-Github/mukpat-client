import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const wrapper = recipe({
	base: {
		padding: '6px 8px',
		textAlign: 'center',
		color: 'white',
		width: 'max-content',
		border: '2px solid',
	},
	variants: {
		color: {
			primary: {
				background: 'purple',
				borderColor: 'purple',
				color: 'purple',
			},
			secondary: {
				background: 'pink',
				borderColor: 'pink',
				color: 'pink',
			},
		},
		shape: {
			squared: { borderRadius: '4px' },
			rounded: { borderRadius: '2rem' },
		},
		hoverable: {
			true: {
				transition: 'all 0.4s ease-in',
				':hover': {
					WebkitFilter: 'brightness(0.8)',
					cursor: 'pointer',
				},
			},
		},
		variant: {
			filled: {
				color: 'white',
			},
			outlined: {
				background: 'transparent',
			},
		},
	},
	defaultVariants: {
		color: 'primary',
		shape: 'squared',
		variant: 'filled',
	},
});

export type BadgeVariants = RecipeVariants<typeof wrapper>;
