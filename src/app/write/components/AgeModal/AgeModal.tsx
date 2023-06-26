import { Control, FieldValues, Controller, useFormContext, useWatch } from 'react-hook-form';
import { HTMLAttributes, useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  IconButton,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  SvgIcon,
} from '@/components';
import { useBooleanState, useOverlay } from '@/hooks';
import clsx from 'clsx';
import { openButton, modalContent, modalContentWrapper, birthText, buttonWrapper } from './AgeModal.css';
import getAgeList from './getAgeList';

type ModalProps<T extends FieldValues> = {
  control: Control<T>;
} & HTMLAttributes<HTMLDivElement>;

const BirthYear = ({ control }: ModalProps<any>) => {
  const results = useWatch({ control, name: ['minAge', 'maxAge'] });
  const year = dayjs().year();
  const min = parseInt(results[0]) || 20;
  const max = parseInt(results[1]) || 30;
  const minBirthYear = (year - min).toString().slice(2, 4);
  const maxBirthYear = (year - max).toString().slice(2, 4);

  return (
    <div className={clsx(modalContent, birthText)}>
      {minBirthYear}년생 - {maxBirthYear}년생
    </div>
  );
};

const AgeApply = () => {
  const { getValues, resetField } = useFormContext();
  const min = getValues('minAge') || '20세';
  const max = getValues('maxAge') || '30세';
  const resetValues = useCallback(() => {
    resetField('minAge');
    resetField('maxAge');
  }, [resetField]);
  return (
    <>
      <div className={buttonWrapper}>
        <button className={openButton} type="button">
          {min} - {max}
        </button>
        <IconButton width={36} height={36} iconType="close" onClick={resetValues} />
      </div>
    </>
  );
};

const AgeModal = ({ control }: ModalProps<any>) => {
  const [openModal, closeModal] = useOverlay();
  const [save, setSave] = useBooleanState();
  const { formState } = useFormContext();
  const handleSave = useCallback(() => {
    setSave();
    closeModal();
  }, [setSave, closeModal]);
  const list = useMemo(() => getAgeList(20, 100), []);

  const renderModal = () => {
    return (
      <Modal onClose={closeModal} size="large">
        <ModalHeader type="input" title="참여 가능 나이를 선택해 주세요." />
        <ModalContent className={modalContentWrapper} size="large">
          <BirthYear control={control} />
          <div className={modalContent}>
            <Controller
              defaultValue={'20세'}
              control={control}
              name={'minAge'}
              render={({ field: { value, onChange } }) => (
                <Dropdown style={{ width: '100%' }}>
                  <DropdownButton placeholder={'20세'}>{value}</DropdownButton>
                  <DropdownMenu selectable selectedItemKey={value} onSelectChange={onChange}>
                    {list.map((v) => (
                      <DropdownItem key={v} itemKey={v}>
                        {v}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              )}
            />
            <SvgIcon width={10} id="bar" />
            <Controller
              defaultValue={'30세'}
              control={control}
              name={'maxAge'}
              render={({ field: { value, onChange } }) => (
                <Dropdown style={{ width: '100%' }}>
                  <DropdownButton placeholder={'30세'}>{value}</DropdownButton>
                  <DropdownMenu selectable selectedItemKey={value} onSelectChange={onChange}>
                    {list.map((v) => (
                      <DropdownItem key={v} itemKey={v}>
                        {v}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              )}
            />
          </div>
        </ModalContent>
        <ModalFooter type="vertical">
          <Button onClick={handleSave} type="button">
            저장하기
          </Button>
          <Button onClick={closeModal} type="button" color="none">
            취소하기
          </Button>
        </ModalFooter>
      </Modal>
    );
  };
  return (
    <>
      {(save && formState.dirtyFields['minAge']) || formState.dirtyFields['maxAge'] ? (
        <AgeApply />
      ) : (
        <div className={buttonWrapper}>
          <button className={openButton} type="button" onClick={() => openModal(renderModal())}>
            나이 제한 걸기
          </button>
        </div>
      )}
    </>
  );
};

export default AgeModal;
