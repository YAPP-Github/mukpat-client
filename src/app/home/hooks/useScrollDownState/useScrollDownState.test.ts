import { renderHook, fireEvent } from '@/tests/test-utils';

import useScrollDownState from './useScrollDownState';

describe('useScrollDownState 테스트', () => {
  test('초기값은 false이다.', () => {
    const { result } = renderHook(() => useScrollDownState());
    expect(result.current).toBe(false);
  });
  test('scroll을 내리면 isScrollDown이 true가 된다.', () => {
    const { result } = renderHook(() => useScrollDownState());
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    fireEvent.scroll(window, { target: { scrollY: 101 } });
    expect(result.current).toBe(true);
  });
  test('scroll을 올리면 isScrollDown이 false가 된다.', () => {
    const { result } = renderHook(() => useScrollDownState());
    fireEvent.scroll(window, { target: { scrollY: 101 } });
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(result.current).toBe(false);
  });
});
