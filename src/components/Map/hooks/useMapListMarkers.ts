/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from 'react';
import { useMapContext } from '../contexts/MapContextProvider';
import { removeMarkers, addMarkers, getPlaceInfo } from '../utils/mapMarkerUtils';

interface MapListMarkersProps {
  map: any;
  markers: React.MutableRefObject<any[]>;
}

const useMapListMarkers = ({ map, markers }: MapListMarkersProps) => {
  const { mapState, mapDispatch } = useMapContext();
  const { searchedPlaces } = mapState;
  const handleOnClickListWithMarkers = useCallback(
    async (placeIndex: number) => {
      const { searchedPlaces } = mapState;
      if (!searchedPlaces) return;
      const searchPlace = searchedPlaces[placeIndex];
      const searchResult = await getPlaceInfo(searchPlace?.y.toString(), searchPlace?.x.toString());
      mapDispatch({
        type: 'handleClickPlaceResult',
        payload: searchResult,
      });
      removeMarkers(markers);
      const markersTotal = addMarkers([searchedPlaces[placeIndex]], map);
      markers.current = markersTotal;
    },
    [mapState, mapDispatch, markers, map],
  );
  useEffect(() => {
    if (!searchedPlaces || searchedPlaces?.length === 0) return;
    removeMarkers(markers);
    const markersTotal = addMarkers(searchedPlaces, map);
    markers.current = markersTotal;
  }, [searchedPlaces, markers, map]);

  return { handleOnClickListWithMarkers };
};

export default useMapListMarkers;
