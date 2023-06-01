'use client';

import { DropdownContextProvider } from './contexts/DropdownContext';
import DropdownWrapper from './DropdownWrapper';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Dropdown = ({ children, ...rest }: Props) => {
	return (
		<DropdownContextProvider>
			<DropdownWrapper {...rest}>{children}</DropdownWrapper>
		</DropdownContextProvider>
	);
};

export default Dropdown;
