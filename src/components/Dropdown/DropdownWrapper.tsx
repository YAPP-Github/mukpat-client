import clsx from 'classnames';
import { useClickOutside } from '@/hooks';
import { wrapper } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  disableClickOutside?: boolean;
}

const DropdownWrapper = ({ children, className, disableClickOutside = false, ...rest }: Props) => {
  const { closeDropdown } = useDropdownContext();
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      closeDropdown();
    },
    disabled: disableClickOutside,
  });

  return (
    <div className={clsx(wrapper, className)} ref={ref} {...rest}>
      {children}
    </div>
  );
};

export default DropdownWrapper;
