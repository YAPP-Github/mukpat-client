import { getQueryString } from './queryString';

describe('getQueryString 테스트', () => {
  test('주어진 object를 물음표가 포함된 queryString으로 변환해준다', () => {
    expect(
      getQueryString({
        provinceId: 2,
        cityId: 1,
      }),
    ).toBe('?cityId=1&provinceId=2');
  });

  test('주어진 object가 undefined 이거나 빈 객체이면 빈 문자열을 반환한다', () => {
    expect(getQueryString({})).toBe('');
    expect(getQueryString(undefined)).toBe('');
  });

  test('value가 undefined이면 해당 key는 무시한다 - 1', () => {
    expect(
      getQueryString({
        provinceId: undefined,
      }),
    ).toBe('');
  });

  test('value가 undefined이면 해당 key는 무시한다 - 2', () => {
    expect(
      getQueryString({
        provinceId: undefined,
        cityId: 1,
      }),
    ).toBe('?cityId=1');
  });
});
