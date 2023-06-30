/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useMapContext } from '../contexts/MapContextProvider';
import { Place } from '../types';
import { removeMarkers, addMarkers } from '../utils/mapMarkerUtils';

interface MapListMarkersProps {
  map: any;
  markers: React.MutableRefObject<any[]>;
}

const useMapListMarkers = ({ map, markers }: MapListMarkersProps) => {
  const { searchedPlaces, setSelectedPlace } = useMapContext();

  const handleOnClickListWithMarkers = (placeIndex: number) => {
    if (!searchedPlaces) return;
    setSelectedPlace(searchedPlaces[placeIndex]);
    removeMarkers(markers);
    const markersTotal = addMarkers([searchedPlaces[placeIndex]], map);
    markers.current = markersTotal;
  };

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
