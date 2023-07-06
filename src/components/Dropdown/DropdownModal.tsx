'use client';

import cx from 'classnames';
import { HTMLAttributes, useMemo, forwardRef, useImperativeHandle } from 'react';
import { useDropdownContext } from './contexts/DropdownContext';
import { type DropdownMenuContextValue, DropdownMenuContextProvider } from './contexts/DropdownMenuContext';
import { modal } from './Dropdown.css';

interface Props extends HTMLAttributes<HTMLUListElement>, Partial<DropdownMenuContextValue> {
  variant?: 'centerModal' | 'bottomModal';
}

export interface DropdownMenuHandle {
  /** menu를 닫는다 */
  close: () => void;
}

// TODO
// [] variant 처리 (bottomModal, centerModal)

const DropdownModal = forwardRef<DropdownMenuHandle, Props>(
  (
    {
      children,
      //   variant = 'centerModal',
      className,
      selectable = false,
      selectedItemKey = null,
      onSelectChange = () => null,
      ...rest
    },
    ref,
  ) => {
    const { isOpen, closeDropdown, menuId } = useDropdownContext();

    const menuContextValue = useMemo(
      () => ({ selectable, selectedItemKey, onSelectChange }),
      [selectable, selectedItemKey, onSelectChange],
    );

    useImperativeHandle(ref, () => ({
      close: closeDropdown,
    }));

    return (
      <DropdownMenuContextProvider value={menuContextValue}>
        <ul
          className={cx(
            modal({
              open: isOpen,
            }),
            className,
          )}
          aria-hidden={!isOpen}
          role="menu"
          id={menuId}
          {...rest}
        >
          {children}
        </ul>
      </DropdownMenuContextProvider>
    );
  },
);

DropdownModal.displayName = 'DropdownModal';

export default DropdownModal;
