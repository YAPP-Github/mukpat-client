/**
 * 주어진 px 값을 rem으로 변환하여 반환한다.
 * @param size - 변환할 px 값(문자열, 숫자)
 */
const sizeProp = (size: unknown) => {
  if (typeof size === 'number') {
    return `${size / 16}rem`;
  }
  if (typeof size === 'string') {
    const replaced = size.replace('px', '');
    if (!Number.isNaN(Number(replaced))) {
      return `${Number(replaced) / 16}rem`;
    }
  }
  return size as string;
};

export default sizeProp;
