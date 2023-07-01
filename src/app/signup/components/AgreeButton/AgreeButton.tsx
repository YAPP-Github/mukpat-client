'use client';
import { IconButton, Typography } from '@/components';
import { agreeWrapper, agreeText } from './AgreeButton.css';

type AgreeButtonProps = {
  error: boolean;
  text: string;
  onClick: () => void;
};

const AgreeButton = ({ onClick, error, text }: AgreeButtonProps) => {
  return (
    <div className={agreeWrapper}>
      <IconButton
        iconType="check"
        width={24}
        height={24}
        hover={false}
        active={true}
        error={error}
        onClick={onClick}
        type="button"
      />
      <Typography variant="label2" as="p" color="sub">
        (필수) <span className={agreeText}>{text}</span> 동의
      </Typography>
    </div>
  );
};

export default AgreeButton;
