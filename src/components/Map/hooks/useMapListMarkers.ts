/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from 'react';
import { useMapContext } from '../contexts/MapContextProvider';
import { Place } from '@/types/map';
import { removeMarkers, addMarkers, getPlaceInfo } from '../utils/mapMarkerUtils';

interface MapListMarkersProps {
  map: any;
  markers: React.MutableRefObject<any[]>;
}

const useMapListMarkers = ({ map, markers }: MapListMarkersProps) => {
  const { searchedPlaces, setSelectedPlace } = useMapContext();

  const handleOnClickListWithMarkers = useCallback(
    async (placeIndex: number) => {
      if (!searchedPlaces) return;
      const searchPlace = searchedPlaces[placeIndex];
      const searchResult = await getPlaceInfo(searchPlace.y.toString(), searchPlace.x.toString());
      setSelectedPlace(searchResult);
      removeMarkers(markers);
      const markersTotal = addMarkers([searchedPlaces[placeIndex]], map);
      markers.current = markersTotal;
    },
    [map, markers, searchedPlaces, setSelectedPlace],
  );

  useEffect(() => {
    if (!searchedPlaces || searchedPlaces?.length === 0) return;
    removeMarkers(markers);
    setSelectedPlace({} as Place);
    const markersTotal = addMarkers(searchedPlaces, map);
    markers.current = markersTotal;
  }, [searchedPlaces, markers, map, setSelectedPlace]);

  return { handleOnClickListWithMarkers };
};

export default useMapListMarkers;
