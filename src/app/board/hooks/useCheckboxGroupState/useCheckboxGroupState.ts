import { useState, useCallback } from 'react';
/**
 * checkbox group의 상태를 정의하는 함수
 * @param size - checkbox 개수
 */
const useCheckboxGroupState = (size: number) => {
  const [checkboxes, setCheckboxes] = useState(Array.from({ length: size }, () => ({ checked: false, error: false })));

  const validateUnchecked = useCallback(() => {
    setCheckboxes((checkboxes) => checkboxes.map(({ checked }) => ({ checked, error: !checked })));
    return checkboxes.every(({ checked }) => checked);
  }, [checkboxes]);

  const toggleChecked = useCallback((index: number) => {
    setCheckboxes((checkboxes) => {
      checkboxes.splice(index, 1, {
        checked: !checkboxes[index].checked,
        error: !checkboxes[index].checked ? false : checkboxes[index].error,
      });
      return [...checkboxes];
    });
  }, []);

  return [checkboxes, validateUnchecked, toggleChecked] as const;
};

export default useCheckboxGroupState;
