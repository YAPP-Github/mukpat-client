import { act, renderHook } from '@/tests/test-utils';
import useCheckboxGroupState from './useCheckboxGroupState';

describe('useCheckboxGroupState', () => {
  test('validateUnchecked는 체크되지 않은 state의 에러 필드를 true로 바꾼다', () => {
    const { result } = renderHook(() => useCheckboxGroupState(2));
    const [, validateUnchecked] = result.current;
    act(() => validateUnchecked());
    expect(result.current[0]).toEqual([
      { checked: false, error: true },
      { checked: false, error: true },
    ]);
  });

  test('toggleChecked는 해당 index의 checked를 toggle한다', () => {
    const { result } = renderHook(() => useCheckboxGroupState(2));
    const [, , toggleChecked] = result.current;
    act(() => toggleChecked(0));
    const [checkboxes] = result.current;
    expect(checkboxes[0]).toEqual({
      checked: true,
      error: false,
    });

    act(() => toggleChecked(0));
    expect(checkboxes[0]).toEqual({
      checked: false,
      error: false,
    });
  });
});
