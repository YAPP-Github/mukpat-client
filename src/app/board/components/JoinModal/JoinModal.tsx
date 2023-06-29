'use client';

import cx from 'classnames';
import { Modal, ModalContent, ModalFooter, ModalHeader, IconButton, Typography, Button, CheckBox } from '@/components';
import { BulletTitle } from '@/app/board/components';
import { useCheckboxGroupState } from '@/app/board/hooks';
import { JOIN_MODAL_TEXT } from '@/app/board/constants';
import {
  modalHeader,
  modalContent,
  buttonGroup,
  bulletTitleBottomSpace,
  bodyBottomSpace,
  checkBoxGroup,
  lineBreak,
} from './JoinModal.css';

const { INSTURCTION, CHECKBOX, BUTTON } = JOIN_MODAL_TEXT;

interface Props {
  onClose: () => void;
}

// TODO
// [x] clipboard 관련 훅 작성
// [x] checkbox state 훅 정의하기 (toggle, error)
// [x] useCheckboxGroupState 테스트 코드
// [x] 메시지 상수화..?
// [ ] query 불러오기 + 버튼 이벤트 연동하기(오픈채팅방 이동, 링크 복사)
// [ ] 참여하기 이벤트 연동하기(API 호출 + 토스트 호출)

const JoinModal = ({ onClose }: Props) => {
  const [checkBoxGroupState, validateUnchecked, toggleChecked] = useCheckboxGroupState(2);

  const handleClickJoinButton = () => {
    validateUnchecked();
  };

  return (
    <Modal onClose={onClose} size="large">
      <ModalHeader title="참여 신청 안내" type="infoWithClose" className={modalHeader}>
        <IconButton iconType="close" active={false} hover onClick={onClose} />
      </ModalHeader>
      <ModalContent size="large" className={modalContent}>
        <div>
          <BulletTitle className={bulletTitleBottomSpace}>{INSTURCTION.CHAT_INFO_TITLE}</BulletTitle>
          <Typography variant="body3" color="secondary" className={cx(bodyBottomSpace, lineBreak)}>
            {INSTURCTION.CHAT_INFO_DETAIL}
          </Typography>
          <div className={buttonGroup}>
            <Button color="enabled" size="micro">
              {BUTTON.OPENCHAT_SHORTCUT}
            </Button>
            <IconButton iconType="link" width={44} height={44} active={false} hover />
          </div>
        </div>
        <div>
          <BulletTitle className={bulletTitleBottomSpace}>{INSTURCTION.ETIQUETTE_TITLE}</BulletTitle>
          <Typography variant="body3" color="secondary" className={lineBreak}>
            {INSTURCTION.ETIQUETTE_DETAIL}
          </Typography>
        </div>
        <div className={checkBoxGroup}>
          {[CHECKBOX.CHECK_CHATLINK, CHECKBOX.CHECK_INSTRUCTION].map((message, index) => (
            <CheckBox
              key={index}
              variant="filled"
              checked={checkBoxGroupState[index].checked}
              error={checkBoxGroupState[index].error}
              onChange={() => toggleChecked(index)}
            >
              {message}
            </CheckBox>
          ))}
        </div>
      </ModalContent>
      <ModalFooter type="single">
        <Button color="primary" onClick={handleClickJoinButton}>
          {BUTTON.JOIN}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default JoinModal;
