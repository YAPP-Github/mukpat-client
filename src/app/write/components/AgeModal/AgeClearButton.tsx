import { IconButton } from '@/components';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { MAX_AGE, MIN_AGE } from '../../constants';

const AgeClearButton = () => {
  const { resetField } = useFormContext();
  const resetValues = useCallback(() => {
    resetField(MIN_AGE);
    resetField(MAX_AGE);
  }, [resetField]);
  return <IconButton type="button" width={36} height={36} iconType="close" onClick={resetValues} />;
};

export default AgeClearButton;
