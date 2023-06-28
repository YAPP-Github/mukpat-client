import clsx from 'classnames';
import { ComponentProps } from 'react';
import { section, Direction } from './Input.css';
import Typography from '../Typography/Typography';

interface SectionProps extends ComponentProps<typeof Typography> {
  label: string;
  direction: Direction;
}

const InputSection = ({ required, variant, children, color = 'primary', as = 'p', label, direction }: SectionProps) => {
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
