import { create } from 'zustand';
import { BoardRegion, BoardProvince } from '@/api/types';
import { useEffect, useReducer } from 'react';

type State = {
  cityId?: BoardRegion['cityId'];
  provinceId?: BoardProvince['provinceId'];
};

type Actions = {
  setCityId: (cityId: State['cityId']) => void;
  setProvinceId: (provinceId: State['provinceId']) => void;
  initialize: () => void;
};

type Selector = (state: State & Actions) => Partial<State & Actions>;

export const regionsFilterStore = create<State & Actions>((set) => ({
  cityId: undefined,
  provinceId: undefined,
  setCityId: (cityId: State['cityId']) =>
    set((state) => {
      if (state.cityId && state.cityId !== cityId) {
        return { cityId, provinceId: undefined };
      } else {
        return { ...state, cityId };
      }
    }),
  setProvinceId: (provinceId: State['provinceId']) => set((state) => ({ ...state, provinceId })),
  initialize: () => set({ cityId: undefined, provinceId: undefined }),
}));

export const useRegionsFilterStore = (selector: Selector) => {
  const getValue = () => selector(regionsFilterStore.getState());
  const [value, dispatch] = useReducer(getValue, undefined, getValue);
  useEffect(() => regionsFilterStore.subscribe(dispatch), [selector]);
  return value;
};

export const useRegionsFilter = (regions: BoardRegion[]) => {
  const { cityId, provinceId, setCityId, setProvinceId } = useRegionsFilterStore((state) => ({
    cityId: state.cityId,
    provinceId: state.provinceId,
    setCityId: state.setCityId,
    setProvinceId: state.setProvinceId,
  }));

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
