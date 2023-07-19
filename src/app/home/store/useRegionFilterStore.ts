import { create } from 'zustand';
import { shallow } from 'zustand/shallow';
import { BoardRegion, BoardProvince } from '@/api/types';

type State = {
  cityId?: BoardRegion['cityId'];
  provinceId?: BoardProvince['provinceId'];
};

type Actions = {
  setCityId: (cityId: State['cityId']) => void;
  setProvinceId: (provinceId: State['provinceId']) => void;
};

export const useRegionsFilterStore = create<State & Actions>((set) => ({
  cityId: undefined,
  provinceId: undefined,
  setCityId: (cityId: State['cityId']) =>
    set((state) => {
      if (cityId) {
        return { ...state, cityId };
      } else {
        return { cityId: undefined, provinceId: undefined };
      }
    }),
  setProvinceId: (provinceId: State['provinceId']) => set((state) => ({ ...state, provinceId })),
}));

// TODO : queryParam 연동으로 새로고침으로 인한 초기화 막기?

export const useRegionsFilter = (regions: BoardRegion[]) => {
  const { cityId, provinceId, setCityId, setProvinceId } = useRegionsFilterStore(
    (state) => ({
      cityId: state.cityId,
      provinceId: state.provinceId,
      setCityId: state.setCityId,
      setProvinceId: state.setProvinceId,
    }),
    shallow,
  );

  const selectedCity = cityId ? regions.find((region) => region.cityId === cityId) : undefined;
  const selectedProvince = selectedCity?.provinces.find((province) => province.provinceId === provinceId);

  return {
    cityId,
    provinceId,
    setCityId,
    setProvinceId,
    selectedCity,
    selectedProvince,
  };
};
