import { Typography, IconButton } from '@/components';
import { useIsMobile } from '@/hooks';
import { title } from './WriteTitle.css';

interface TitleProps {
  prevStep: () => void;
}

const WriteTitle = ({ prevStep }: TitleProps) => {
  const mobile = useIsMobile();
  return (
    <div className={title}>
      <IconButton onClick={prevStep} iconType={mobile ? 'chevronleft' : 'goback'} />
      <Typography variant={mobile ? 'title1' : 'heading1'} as="p" color="primary500">
        우리 회사 먹팟 만들기
      </Typography>
    </div>
  );
};

export default WriteTitle;
