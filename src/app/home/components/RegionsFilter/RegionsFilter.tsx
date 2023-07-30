'use client';

import { useCallback } from 'react';
import { Dropdown } from '@/components';
import { useDetectSticky, useScrollDownState } from '@/app/home/hooks';
import { useBoardRegions } from '@/api/hooks';
import { useRegionsFilter } from '@/store';
import * as styles from './RegionsFilter.css';

const RegionsFilter = () => {
  const { data: regions } = useBoardRegions();
  const [ref, isSticky] = useDetectSticky();
  const isScrollDown = useScrollDownState();

  const { selectedCity, selectedProvince, setCityId, setProvinceId } = useRegionsFilter(regions);

  const handleSelectCity = useCallback(
    (cityId: string | null) => {
      setCityId?.(cityId ? Number(cityId) : undefined);
    },
    [setCityId],
  );

  const handleSelectProvince = useCallback(
    (provinceId: string | null) => {
      setProvinceId?.(provinceId ? Number(provinceId) : undefined);
    },
    [setProvinceId],
  );

  return (
    <>
      <div ref={ref}></div>
      <div className={styles.background({ isSticky, isScrollDown })}>
        <div className={styles.wrapper}>
          <Dropdown className={styles.dropdown}>
            <Dropdown.Button disabled={regions.length <= 0} color="darken" size="small" placeholder="전체 지역">
              {selectedCity?.cityName}
            </Dropdown.Button>
            <Dropdown.Menu selectable selectedItemKey={String(selectedCity?.cityId)} onSelectChange={handleSelectCity}>
              {regions.map(({ cityId, cityName, sumByCity }) => (
                <Dropdown.Item key={cityId} itemKey={String(cityId)}>
                  <div className={styles.itemText}>
                    {cityName}
                    <span
                      className={styles.itemCountText({
                        active: sumByCity > 0,
                        selected: cityId === selectedCity?.cityId,
                      })}
                    >
                      {sumByCity}
                    </span>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={styles.dropdown}>
            <Dropdown.Button color="darken" size="small" placeholder="전체 구/군" disabled={!selectedCity}>
              {selectedProvince?.provinceName}
            </Dropdown.Button>
            <Dropdown.Menu
              selectable
              selectedItemKey={String(selectedProvince?.provinceId)}
              onSelectChange={handleSelectProvince}
            >
              {selectedCity?.provinces.map(({ provinceId, provinceName, sumByProvince }) => (
                <Dropdown.Item key={provinceId} itemKey={String(provinceId)}>
                  <div className={styles.itemText}>
                    {provinceName}
                    <span
                      className={styles.itemCountText({
                        active: sumByProvince > 0,
                        selected: provinceId === selectedProvince?.provinceId,
                      })}
                    >
                      {sumByProvince}
                    </span>
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default RegionsFilter;
