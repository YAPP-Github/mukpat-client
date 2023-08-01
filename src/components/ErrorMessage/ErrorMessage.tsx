import { SvgIcon, Typography } from '@/components';
import { wrapper, footer } from './ErrorMessage.css';
import { ReactNode } from 'react';

interface Props {
  title?: ReactNode;
  subTitle?: ReactNode;
  children: ReactNode;
}

const ErrorMessage = ({ title, subTitle, children }: Props) => {
  return (
    <div className={wrapper}>
      <SvgIcon id="info" width={60} height={60} />
      {title && (
        <Typography as="h1" variant="title1" color="secondary">
          {title}
        </Typography>
      )}
      {subTitle && (
        <Typography as="p" variant="body2" color="primary">
          {subTitle}
        </Typography>
      )}
      <div className={footer}>{children}</div>
    </div>
  );
};

export default ErrorMessage;
