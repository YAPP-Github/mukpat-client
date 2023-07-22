'use client';
import { IconButton, Typography } from '@/components';
import { agreeWrapper, agreeText } from './AgreeButton.css';

type AgreeButtonProps = {
  error: boolean;
  text: string;
  onClick: () => void;
  name: 'service' | 'privacy';
};

const AgreeButton = ({ onClick, error, text, name }: AgreeButtonProps) => {
  const type = {
    service: 'https://shining-tartan-756.notion.site/86b9fb5734eb47f29dfaaf840726a9da',
    privacy: 'https://shining-tartan-756.notion.site/7a672c66be404ce78e192db5b893b66c',
  };
  const onClickAgreeText = () => {
    window.open(type[name]);
  };
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
        (필수){' '}
        <span className={agreeText} onClick={() => onClickAgreeText()}>
          {text}
        </span>{' '}
        동의
      </Typography>
    </div>
  );
};

export default AgreeButton;
