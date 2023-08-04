'use client';

import cx from 'classnames';
import BottomSheetView from '@/components/BottomSheet/BottomSheetView';
import { HTMLAttributes, useMemo, forwardRef, useImperativeHandle, ComponentProps } from 'react';
import { useDropdownContext } from './contexts/DropdownContext';
import { type DropdownMenuContextValue, DropdownMenuContextProvider } from './contexts/DropdownMenuContext';
import useDropdownBottomSheet from './hooks/useDropdownBottomSheet/useDropdownBottomSheet';

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    Partial<DropdownMenuContextValue>,
    Omit<ComponentProps<typeof BottomSheetView>, 'isOpen' | 'onClose'> {}

export interface DropdownMenuHandle {
  /** menu를 닫는다 */
  close: () => void;
}

const DropdownBottomSheet = forwardRef<DropdownMenuHandle, Props>(
  ({ children, className, selectable = false, selectedItemKey = null, onSelectChange = () => null, ...rest }, ref) => {
    const { isOpen: isDropdownOpen, closeDropdown } = useDropdownContext();

    const [bottomSheetRef, isBottmSheetOpen, , closeBottomSheet] = useDropdownBottomSheet({
      isDropdownOpen,
      onClose: closeDropdown,
    });

    const menuContextValue = useMemo(
      () => ({ selectable, selectedItemKey, onSelectChange, closeDropdown: closeBottomSheet }),
      [selectable, selectedItemKey, onSelectChange, closeBottomSheet],
    );

    useImperativeHandle(ref, () => ({
      close: closeBottomSheet,
    }));

    return (
      <DropdownMenuContextProvider value={menuContextValue}>
        <BottomSheetView
          ref={bottomSheetRef}
          isOpen={isBottmSheetOpen}
          onClose={closeBottomSheet}
          className={cx(className)}
          {...rest}
        >
          {children}
        </BottomSheetView>
      </DropdownMenuContextProvider>
    );
  },
);

DropdownBottomSheet.displayName = 'DropdownBottomSheet';

export default DropdownBottomSheet;
