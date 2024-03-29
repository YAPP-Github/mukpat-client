'use client';

import { HTMLAttributes, useMemo, forwardRef, useImperativeHandle, useEffect } from 'react';
import clsx from 'classnames';
import { menu, Placement } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';
import { type DropdownMenuContextValue, DropdownMenuContextProvider } from './contexts/DropdownMenuContext';
import { getComputedPlacement } from './utils/placement';

interface Props extends HTMLAttributes<HTMLUListElement>, Partial<DropdownMenuContextValue> {
  /**
   * Menu를 표시할 기준 위치를 선정하는 값
   */
  placement?: Placement;
}

export interface DropdownMenuHandle {
  /** menu를 닫는다 */
  close: () => void;
}

const DropdownMenu = forwardRef<DropdownMenuHandle, Props>(
  (
    {
      children,
      className,
      selectable = false,
      selectedItemKey = null,
      onSelectChange = () => null,
      placement = 'bottom',
      ...rest
    },
    ref,
  ) => {
    const { isOpen, closeDropdown, yplacement: systemYPlacement, menuRef, menuId } = useDropdownContext();

    const menuContextValue = useMemo(
      () => ({ selectable, selectedItemKey, onSelectChange, closeDropdown }),
      [selectable, selectedItemKey, onSelectChange, closeDropdown],
    );

    const computedPlacement = useMemo(
      () => getComputedPlacement(placement, systemYPlacement),
      [placement, systemYPlacement],
    );

    useImperativeHandle(ref, () => ({
      close: closeDropdown,
    }));

    useEffect(() => {
      window.addEventListener('scroll', closeDropdown);
      return () => {
        window.removeEventListener('scroll', closeDropdown);
      };
    }, [closeDropdown]);

    return (
      <DropdownMenuContextProvider value={menuContextValue}>
        <ul
          aria-hidden={!isOpen}
          id={menuId}
          role="menu"
          tabIndex={-1}
          ref={menuRef}
          className={clsx(menu({ placement: computedPlacement, open: isOpen }), className)}
          {...rest}
        >
          {children}
        </ul>
      </DropdownMenuContextProvider>
    );
  },
);

DropdownMenu.displayName = 'DropdownMenu';

export default DropdownMenu;
