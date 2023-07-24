import { HTMLAttributes, forwardRef } from 'react';
import cx from 'classnames';
import { IconButton } from '@/components';
import { useLockScroll } from '@/hooks';
import { titleWrapper, background, wrap, itemWrapper } from './BottomSheet.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** BottomSheet 제목으로 표시할 텍스트 */
  title?: string;

  /** bottomsheet 열림/닫힘 상태 */
  isOpen: boolean;

  /** bottomsheet 닫을때 호출되는 함수 */
  onClose: () => void;
}

const BottomSheetView = forwardRef<HTMLDivElement, Props>(
  ({ title, isOpen, children, onClose, className, ...rest }, ref) => {
    useLockScroll(isOpen);

    return (
      <>
        <div className={cx(background({ open: isOpen }))} data-testid="outside" onClick={onClose}></div>
        <div className={cx(wrap({ open: isOpen }), className)} {...rest} ref={ref}>
          <div className={titleWrapper}>
            <div>{title}</div>
            <IconButton iconType="close" width={36} height={36} onClick={onClose}></IconButton>
          </div>
          <div className={itemWrapper}>{children}</div>
        </div>
      </>
    );
  },
);

BottomSheetView.displayName = 'BottomSheetView';

export default BottomSheetView;
