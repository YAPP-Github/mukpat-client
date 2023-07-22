import cx from 'classnames';
import { HTMLAttributes } from 'react';
import { wrapper, Radius, Color } from './Skeleton.css';
import { sizeProp } from '@/utils/sizeProp';

interface Props extends HTMLAttributes<HTMLDivElement> {
  /** 스켈레톤 넓이 (css width에서 사용가능한 값) */
  width?: number | string;

  /** 스켈레톤 높이 (css height에서 사용가능한 값) */
  height?: number | string;

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
  mt,
  ml,
  mr,
  mb,

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
        ...(width && { width: sizeProp(width) }),
        ...(height && { height: sizeProp(height) }),
        ...(mt && { marginTop: sizeProp(mt) }),
        ...(mb && { marginBottom: sizeProp(mb) }),
        ...(ml && { marginLeft: sizeProp(ml) }),
        ...(mr && { marginRight: sizeProp(mr) }),
      }}
      {...rest}
    />
  );
};

export default Skeleton;
