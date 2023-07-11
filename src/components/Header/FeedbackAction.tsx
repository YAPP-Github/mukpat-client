import { SvgIcon, Typography } from '@/components';
import { feedbackAction } from './Header.css';

const FeedbackAction = () => {
  return (
    <a className={feedbackAction} href="https://forms.gle/mgNnVijeG5YgQL9R8" target="_blank">
      <SvgIcon id="chat" width={18} height={18} />
      <Typography variant="label3" color="secondary">
        피드백
      </Typography>
    </a>
  );
};

export default FeedbackAction;
