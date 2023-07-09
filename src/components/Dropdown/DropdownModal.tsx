'use client';

import cx from 'classnames';
import { HTMLAttributes, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Modal } from '@/components';
import { useDropdownContext } from './contexts/DropdownContext';
import { type DropdownMenuContextValue, DropdownMenuContextProvider } from './contexts/DropdownMenuContext';
import { modal, modalContent } from './Dropdown.css';

interface Props extends HTMLAttributes<HTMLDivElement>, Partial<DropdownMenuContextValue> {
  variant?: 'centerModal' | 'bottomModal';
}

export interface DropdownMenuHandle {
  /** menu를 닫는다 */
  close: () => void;
}

// TODO
// [] bottomsheet랑 같이 넣어보기

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
    const { isOpen, closeDropdown } = useDropdownContext();

    const menuContextValue = useMemo(
      () => ({ selectable, selectedItemKey, onSelectChange }),
      [selectable, selectedItemKey, onSelectChange],
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
