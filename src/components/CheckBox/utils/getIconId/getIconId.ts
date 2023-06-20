import { Variant } from '../../CheckBox.css';

interface Props {
	variant: Variant;
	checked: boolean;
	error: boolean;
}

const getIconId = ({ variant, checked, error }: Props) => {
	if (checked) return 'check-active';
	if (variant === 'default' && error) return 'check-error';
	return 'check';
};

export { getIconId };
