'use client';

import { HTMLAttributes, useCallback } from 'react';
import { FieldValues, Control } from 'react-hook-form';
import { BottomSheet, BottomButton, Typography } from '@/components';
import { useOverlay, useBooleanState } from '@/hooks';
import BirthYear from './BirthYear';
import AgeController from './AgeController';
import AgeClearButton from './AgeClearButton';
import { buttonWrapper, modalContent, openButton } from './AgeModal.css';
import { MAX_AGE, MIN_AGE } from '../../constants';

type TControl<T extends FieldValues> = {
  /**  Input을 제어하는 컨트롤입니다. */
  control: Control<T>;
  /** 유효성검사에서 해당 Input이 invalid할 경우 error message의 표시 여부를 설정합니다. @default true*/
  showError?: boolean;
} & HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AgeBottomSheet = ({ ...props }: TControl<any>) => {
  const [save, setSave] = useBooleanState(false);
  const [openBottomSheet, closeBottomSheet] = useOverlay();
  const { control } = props;

  const handleSave = useCallback(() => {
    setSave();
    closeBottomSheet();
  }, [setSave, closeBottomSheet]);

  const renderBottomSheet = () => {
    return (
      <BottomSheet onClose={closeBottomSheet} title={'참여 가능 나이를 선택해주세요.'}>
        <div>
          <BirthYear control={control} />
          <div>
            <div className={modalContent}>
              <Typography variant="label3" color="sub">
                최소 나이 선택
              </Typography>
              <AgeController placeholder={'최소 나이 제한'} name={MIN_AGE} control={control} />
            </div>
            <div className={modalContent}>
              <Typography variant="label3" color="sub">
                최대 나이 선택
              </Typography>
              <AgeController placeholder={'최대 나이 제한'} name={MAX_AGE} control={control} />
            </div>
          </div>
          <BottomButton onClick={handleSave} type="button">
            저장하기
          </BottomButton>
        </div>
      </BottomSheet>
    );
  };

  return (
    <div className={buttonWrapper}>
      <button className={openButton} type="button" onClick={() => openBottomSheet(renderBottomSheet())}>
        나이 제한 걸기
      </button>
      {save && control.getFieldState(MAX_AGE).isDirty && <AgeClearButton />}
    </div>
  );
};

export default AgeBottomSheet;
