import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { wrapper, VerticalCenter } from './Content.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * 수직 방향의 가운데 여부를 결정
   * @default true
   */
  verticalCenter?: VerticalCenter;
}

const Content = ({ verticalCenter = true, className, ...rest }: Props) => {
  return <main className={cx(wrapper({ verticalCenter }), className)} {...rest} />;
};

export default Content;
