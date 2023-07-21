'use client';

import { Dropdown } from '@/components';
import { background, wrapper, dropdown } from './RegionsFilter.css';

const RegionsFilterLoading = () => {
  return (
    <div className={background({})}>
      <div className={wrapper}>
        <Dropdown className={dropdown}>
          <Dropdown.Button disabled color="darken" size="small" placeholder="전체 지역" />
        </Dropdown>
        <Dropdown className={dropdown}>
          <Dropdown.Button disabled color="darken" size="small" placeholder="전체 구/군" />
        </Dropdown>
      </div>
    </div>
  );
};

export default RegionsFilterLoading;
