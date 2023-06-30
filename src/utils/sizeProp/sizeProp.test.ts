import pxToRem from './sizeProp';

describe('pxToRem 테스팅', () => {
  test('px이 붙은 문자열 주어질 경우 rem으로 변환된 값을 반환한다.', () => {
    expect(pxToRem('16px')).toBe('1rem');
    expect(pxToRem('40px')).toBe('2.5rem');
  });

  test('숫자값이 주어질 경우 rem으로 변환된 값을 반환한다.', () => {
    expect(pxToRem(16)).toBe('1rem');
    expect(pxToRem(40)).toBe('2.5rem');
  });

  test('그 외 규격에 벗어난 경우 주어진 값을 그대로 반환한다.', () => {
    expect(pxToRem('16cm')).toBe('16cm');
    expect(pxToRem('100%')).toBe('100%');
  });
});
