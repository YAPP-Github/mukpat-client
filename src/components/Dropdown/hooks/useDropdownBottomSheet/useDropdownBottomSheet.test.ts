import { renderHook } from '@/tests/test-utils';
import useDropdownBottomSheet from './useDropdownBottomSheet';

describe('useDropdownBottomSheet 테스트', () => {
  test('isDropdownOpen 값이 true가 되면 bottomSheetState는 true가 되고 그 반대인 경우에는 false가 된다', () => {
    let openState = false;
    const { result: bottomSheetState, rerender } = renderHook(() =>
      useDropdownBottomSheet({
        isDropdownOpen: openState,
        onClose: () => null,
      }),
    );
    openState = true;
    rerender();
    expect(bottomSheetState.current[1]).toBe(true);

    openState = false;
    rerender();
    expect(bottomSheetState.current[1]).toBe(false);
  });
});
