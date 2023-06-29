import { getIconId } from './getIconId';

describe('getIconId testing', () => {
  test('checked가 true면 check-active를 반환한다.', () => {
    expect(getIconId({ checked: true, variant: 'default', error: false })).toBe('check-active');
  });

  test('checked는 false고 variant가 default이고 error가 true면 check-error를 반환한다.', () => {
    expect(getIconId({ checked: false, variant: 'default', error: true })).toBe('check-error');
  });

  test('그 외에는 check를 반환한다', () => {
    expect(getIconId({ checked: false, variant: 'filled', error: true })).toBe('check');
  });
});
