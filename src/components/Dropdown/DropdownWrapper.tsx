import clsx from 'classnames';
import { useClickOutside } from '@/hooks';
import { wrapper } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';

type Props = React.HTMLAttributes<HTMLDivElement>;

const DropdownWrapper = ({ children, className, ...rest }: Props) => {
	const { closeDropdown } = useDropdownContext();
	const ref = useClickOutside<HTMLDivElement>({
		onClickOutside: () => {
			closeDropdown();
		},
	});

	return (
		<div className={clsx(wrapper, className)} ref={ref} {...rest}>
			{children}
		</div>
	);
};

export default DropdownWrapper;
