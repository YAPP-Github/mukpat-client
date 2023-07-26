'use client';

import { ComponentProps } from 'react';
import { DropdownContextProvider } from './contexts/DropdownContext';
import DropdownWrapper from './DropdownWrapper';

type Props = ComponentProps<typeof DropdownWrapper>;

const Dropdown = ({ children, ...rest }: Props) => {
  return (
    <DropdownContextProvider>
      <DropdownWrapper {...rest}>{children}</DropdownWrapper>
    </DropdownContextProvider>
  );
};

export default Dropdown;
