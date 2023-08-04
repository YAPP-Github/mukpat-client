'use client';

import cx from 'classnames';
import { Typography, Button, IconButton, CheckBox, Toast } from '@/components';
import { useOverlay, useClipBoard } from '@/hooks';
import { BulletTitle } from '@/app/board/components';
import { JOIN_MODAL_TEXT, TOAST_TEXT } from '@/app/board/constants';
import * as styles from './JoinForm.css';

const { INSTURCTION, CHECKBOX, BUTTON } = JOIN_MODAL_TEXT;

interface Props {
  chatLink: string;
  checkBoxGroupState: { checked: boolean; error: boolean }[];
  toggleChecked: (index: number) => void;
}

const JoinForm = ({ chatLink, checkBoxGroupState, toggleChecked }: Props) => {
  const [openToast, closeToast] = useOverlay();
  const [, copy] = useClipBoard();

  const handleClickOpenChatButton = () => {
    window.open(chatLink, '_blank');
  };

  const handleClickCopyChatLinkButton = () => {
    copy(chatLink);
    openToast(<Toast type="success" message={TOAST_TEXT.COPY_OPENCHAT_LINK} onClose={closeToast} />);
  };

  return (
    <>
      <div>
        <BulletTitle className={styles.bulletTitleBottomSpace}>{INSTURCTION.CHAT_INFO_TITLE}</BulletTitle>
        <Typography variant="body3" color="secondary" className={cx(styles.bodyBottomSpace, styles.lineBreak)}>
          {INSTURCTION.CHAT_INFO_DETAIL}
        </Typography>
        <div className={styles.buttonGroup}>
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
        <BulletTitle className={styles.bulletTitleBottomSpace}>{INSTURCTION.ETIQUETTE_TITLE}</BulletTitle>
        <Typography variant="body3" color="secondary" className={styles.lineBreak}>
          {INSTURCTION.ETIQUETTE_DETAIL}
        </Typography>
      </div>
      <div className={styles.checkBoxGroup}>
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
    </>
  );
};

export default JoinForm;
