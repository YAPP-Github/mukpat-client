'use client';
import { Typography } from '@/components';
import { SegmentedControl } from '@/components';
import { selectorWrapper, selector } from './GenderSelector.css';

type GenderSelectorProps = {
  genderValue: string;
  setGenderValue: (genderValue: string) => void;
};

const GenderSelector = ({ genderValue, setGenderValue }: GenderSelectorProps) => {
  const genderType = [
    { value: 'MEN', label: '남성' },
    { value: 'WOMEN', label: '여성' },
  ];
  return (
    <div className={selectorWrapper}>
      <Typography id="gender-select" color="sub" variant="label3" as="label" required={true}>
        성별
      </Typography>
      <div className={selector}>
        <SegmentedControl
          ariaLabelledby="gender-select"
          data={genderType}
          value={genderValue}
          onChange={setGenderValue}
        />
      </div>
    </div>
  );
};

export default GenderSelector;
