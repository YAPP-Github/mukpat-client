import clsx from 'classnames';
import { ReactNode } from 'react';
import { section, Direction } from './Input.css';
import Typography from '../Typography/Typography';
import { type Variant, type Color } from '../Typography/Typography.css';

type sectionProps = {
  required?: boolean;
  label?: string;
  direction?: Direction;
  children: ReactNode;
  variant?: Variant;
  color?: Color;
  as?: 'code' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';
};

const InputSection = ({ required, variant, children, color = 'primary', as = 'p', label, direction }: sectionProps) => {
  return (
    <div className={clsx(section({ direction }))}>
      <Typography required={required} variant={variant} color={color} as={as}>
        {label}
      </Typography>
      {children}
    </div>
  );
};

export default InputSection;
