import { Control, FieldValues, Controller } from 'react-hook-form';
import { HTMLAttributes, useMemo } from 'react';
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  SvgIcon,
} from '@/components';
import { useOverlay } from '@/hooks';
import clsx from 'clsx';
import { openButton, modalContent, modalContentWrapper, birthText } from './AgeModal.css';
import getAgeList from './getAgeList';
import useBirthYear from './useBirthYear';

type ModalProps<T extends FieldValues> = {
  control: Control<T>;
} & HTMLAttributes<HTMLDivElement>;

const AgeModal = ({ control }: ModalProps<any>) => {
  const [openModal, closeModal] = useOverlay();
  const list = useMemo(() => getAgeList(20, 100), []);
  const { minBirthYear, maxBirthYear } = useBirthYear();
  const renderModal = () => {
    return (
      <Modal onClose={closeModal} size="large">
        <ModalHeader type="input" title="참여 가능 나이를 선택해 주세요." />
        <ModalContent className={modalContentWrapper} size="large">
          <div className={clsx(modalContent, birthText)}>
            {minBirthYear}년생 - {maxBirthYear}년생
          </div>
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
          <Button onClick={closeModal} type="button">
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
    <div>
      <button className={openButton} type="button" onClick={() => openModal(renderModal())}>
        나이 제한 걸기
      </button>
    </div>
  );
};

export default AgeModal;
