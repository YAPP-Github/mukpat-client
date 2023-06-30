import cx from 'classnames';
import { HTMLAttributes } from 'react';
import { wrapper, Radius, Color } from './Skeleton.css';
import { sizeProp } from '@/utils/sizeProp';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** 스켈레톤 넓이 (css width에서 사용가능한 값) */
  width: number | string;

  /** 스켈레톤 높이 (css height에서 사용가능한 값) */
  height: number | string;

  /** 스켈레톤 색상 */
  color?: Color;

  /** 스켈레톤 모서리 둥글기 */
  radius?: Radius;

  /** margin top */
  mt?: number | string;

  /** margin left */
  ml?: number | string;

  /** margin right */
  mr?: number | string;

  /** margin bottom */
  mb?: number | string;
}

const Skeleton = ({
  width,
  height,
  color,
  radius,
  className,
  mt = 0,
  ml = 0,
  mr = 0,
  mb = 0,

  ...rest
}: Props) => {
  return (
    <div
      className={cx(
        wrapper({
          color,
          radius,
        }),
        className,
      )}
      style={{
        width: sizeProp(width),
        height: sizeProp(height),
        marginTop: sizeProp(mt),
        marginLeft: sizeProp(ml),
        marginRight: sizeProp(mr),
        marginBottom: sizeProp(mb),
      }}
      {...rest}
    />
  );
};

export default Skeleton;
