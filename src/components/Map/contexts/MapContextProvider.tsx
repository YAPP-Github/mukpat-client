'use client';

import { useContext, createContext, ReactNode, useState } from 'react';
import { Place, PlaceList } from '@/types/map';

interface MapContextValue {
  keyword: string;
  searchedPlaces: PlaceList | undefined;
  markerPlace: PlaceList;
  selectedPlace: Place;
  loading: boolean;
  setKeyword: (keyword: string) => void;
  setSearchedPlaces: (places: PlaceList) => void;
  setMarkerPlace: (places: PlaceList) => void;
  setSelectedPlace: (places: Place) => void;
  setLoading: (loading: boolean) => void;
}
const MapContext = createContext<MapContextValue | null>(null);

const MapContextProvider = ({ children }: { children: ReactNode }) => {
  const [keyword, setKeyword] = useState('');
  const [searchedPlaces, setSearchedPlaces] = useState<PlaceList>();
  const [markerPlace, setMarkerPlace] = useState<PlaceList>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place>({} as Place);
  const [loading, setLoading] = useState(false);

  const contextValue: MapContextValue = {
    keyword,
    searchedPlaces,
    setKeyword,
    setSearchedPlaces,
    markerPlace,
    setMarkerPlace,
    selectedPlace,
    setSelectedPlace,
    loading,
    setLoading,
  };

  return <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>;
};

const useMapContext = () => {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error('Cannot find MapContext. It should be wrapped within MapContextProvider.');
  return ctx;
};

export { MapContextProvider, useMapContext };
