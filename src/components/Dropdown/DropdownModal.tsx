'use client';

import cx from 'classnames';
import { HTMLAttributes, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Modal } from '@/components';
import { useDropdownContext } from './contexts/DropdownContext';
import { type DropdownMenuContextValue, DropdownMenuContextProvider } from './contexts/DropdownMenuContext';
import { modal, modalContent } from './Dropdown.css';

interface Props extends HTMLAttributes<HTMLDivElement>, Partial<DropdownMenuContextValue> {}

export interface DropdownMenuHandle {
  /** menu를 닫는다 */
  close: () => void;
}

const DropdownModal = forwardRef<DropdownMenuHandle, Props>(
  ({ children, className, selectable = false, selectedItemKey = null, onSelectChange = () => null, ...rest }, ref) => {
    const { isOpen, closeDropdown } = useDropdownContext();

    const menuContextValue = useMemo(
      () => ({ selectable, selectedItemKey, onSelectChange, closeDropdown }),
      [selectable, selectedItemKey, onSelectChange, closeDropdown],
    );

    useImperativeHandle(ref, () => ({
      close: closeDropdown,
    }));

    return (
      <DropdownMenuContextProvider value={menuContextValue}>
        {isOpen && (
          <Modal onClose={closeDropdown} className={cx(modal, className)} withBackground={false} {...rest}>
            <Modal.Content size="small" className={modalContent}>
              {children}
            </Modal.Content>
          </Modal>
        )}
      </DropdownMenuContextProvider>
    );
  },
);

DropdownModal.displayName = 'DropdownModal';

export default DropdownModal;
