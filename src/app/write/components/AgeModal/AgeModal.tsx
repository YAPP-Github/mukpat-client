import { Control, FieldValues, useFormContext } from 'react-hook-form';
import { HTMLAttributes, useCallback } from 'react';
import { Button, Modal, ModalContent, ModalFooter, ModalHeader, SvgIcon } from '@/components';
import { useBooleanState, useOverlay } from '@/hooks';
import {
  openButton,
  modalContent,
  modalContentWrapper,
  buttonWrapper,
} from '@/app/write/components/AgeModal/AgeModal.css';
import AgeController from './AgeController';
import BirthYear from './BirthYear';
import AgeClearButton from './AgeClearButton';
import { MAX_AGE, MIN_AGE } from '../../constants';

type ModalProps<T extends FieldValues> = {
  control: Control<T>;
} & HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AgeModal = ({ control }: ModalProps<any>) => {
  const [openModal, closeModal] = useOverlay();
  const [save, setSave] = useBooleanState(false);
  const { formState } = useFormContext();
  const handleSave = useCallback(() => {
    setSave();
    closeModal();
  }, [setSave, closeModal]);

  const renderModal = () => {
    return (
      <Modal onClose={closeModal} overflow={true} size="large">
        <ModalHeader type="input" title="참여 가능 나이를 선택해 주세요." />
        <ModalContent className={modalContentWrapper} size="large">
          <BirthYear control={control} />
          <div className={modalContent}>
            <AgeController placeholder={'최소 나이 제한'} name={MIN_AGE} control={control} />
            <SvgIcon width={10} id="bar" />
            <AgeController placeholder={'최대 나이 제한'} name={MAX_AGE} control={control} />
          </div>
        </ModalContent>
        <ModalFooter type="vertical">
          <Button onClick={handleSave} type="button">
            저장하기
          </Button>
          <Button onClick={closeModal} type="button" color="text">
            취소하기
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <div className={buttonWrapper}>
      <button className={openButton} type="button" onClick={() => openModal(renderModal())}>
        나이 제한 걸기
      </button>
      {save && formState.dirtyFields['minAge'] && formState.dirtyFields['maxAge'] && <AgeClearButton />}
    </div>
  );
};

export default AgeModal;
