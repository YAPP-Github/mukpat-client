import queryString from 'query-string';

const EMPTY = '';

/**
 * 주어진 오브젝트를 알맞은 쿼리스트링으로 변환합니다.
 * 해당되는 쿼리스트링이 없다면 빈 문자열을 반환합니다.
 * @param obj
 */
export const getQueryString = (obj?: object) => {
  if (!obj || Object.keys(obj).length === 0) {
    return EMPTY;
  }

  const parsed = queryString.stringify(obj);

  if (parsed === EMPTY) return EMPTY;

  return `?${parsed}`;
};
