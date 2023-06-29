import { gradient, type Color } from './GradientText.css';

interface Props {
  text: string;
  color: Color;
}

const GradientText = ({ text, color }: Props) => {
  return (
    <span
      className={gradient({
        color,
      })}
    >
      {text}
    </span>
  );
};

export default GradientText;
