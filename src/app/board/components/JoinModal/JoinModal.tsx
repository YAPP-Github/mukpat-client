'use client';

import cx from 'classnames';
import { useClipBoard, useOverlay } from '@/hooks';
import { useJoinBoard } from '@/api/hooks';
import { Modal, IconButton, Typography, Button, CheckBox, Toast } from '@/components';
import { BulletTitle } from '@/app/board/components';
import { useCheckboxGroupState } from '@/app/board/hooks';
import { JOIN_MODAL_TEXT, TOAST_TEXT } from '@/app/board/constants';
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
  /** 먹팟 게시물 boardId */
  boardId: number;

  /** 먹팟 오픈채팅방 링크 */
  chatLink: string;

  /** 참가 성공 시 호출되는 함수 */
  onSuccessJoin?: () => void;

  /** 참가 실패 시 호출되는 함수 */
  onFailureJoin?: (errorMessage: string) => void;

  /** 모달을 닫을때 호출되는 함수 */
  onClose: () => void;
}

const JoinModal = ({ boardId, chatLink, onSuccessJoin, onFailureJoin, onClose }: Props) => {
  const [checkBoxGroupState, validateUnchecked, toggleChecked] = useCheckboxGroupState(2);
  const [, copy] = useClipBoard();
  const [openToast, closeToast] = useOverlay();
  const { mutate: joinBoard } = useJoinBoard(boardId);

  const handleClickJoinButton = () => {
    if (!validateUnchecked()) return;

    joinBoard(boardId, {
      onSuccess: () => {
        onSuccessJoin?.();
      },
      onError: (err) => {
        onFailureJoin?.(err?.message || TOAST_TEXT.FAILURE_JOIN);
      },
      onSettled: () => {
        onClose();
      },
    });
  };

  const handleClickOpenChatButton = () => {
    window.open(chatLink, '_blank');
  };

  const handleClickCopyChatLinkButton = () => {
    copy(chatLink);
    openToast(<Toast type="success" message={TOAST_TEXT.COPY_OPENCHAT_LINK} onClose={closeToast} />);
  };

  return (
    <Modal onClose={onClose} size="large">
      <Modal.Header title="참여 신청 안내" type="infoWithClose" className={modalHeader}>
        <IconButton iconType="close" active={false} hover onClick={onClose} />
      </Modal.Header>
      <Modal.Content size="large" className={modalContent}>
        <div>
          <BulletTitle className={bulletTitleBottomSpace}>{INSTURCTION.CHAT_INFO_TITLE}</BulletTitle>
          <Typography variant="body3" color="secondary" className={cx(bodyBottomSpace, lineBreak)}>
            {INSTURCTION.CHAT_INFO_DETAIL}
          </Typography>
          <div className={buttonGroup}>
            <Button color="sub" size="paddingSmall" onClick={handleClickOpenChatButton}>
              {BUTTON.OPENCHAT_SHORTCUT}
            </Button>
            <IconButton
              iconType="link"
              width={44}
              height={44}
              active={false}
              hover
              onClick={handleClickCopyChatLinkButton}
            />
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
      </Modal.Content>
      <Modal.Footer type="single">
        <Button color="primary" onClick={handleClickJoinButton}>
          {BUTTON.JOIN}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JoinModal;
