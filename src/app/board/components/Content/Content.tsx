import cx from 'classnames';
import { ComponentProps, PropsWithChildren } from 'react';
import { Content as PageContent } from '@/components';
import { contentPadding } from './Content.css';

interface Props extends PropsWithChildren, ComponentProps<typeof PageContent> {}

const Content = ({ className, ...rest }: Props) => {
  return <PageContent className={cx(contentPadding, className)} {...rest} />;
};

export default Content;
