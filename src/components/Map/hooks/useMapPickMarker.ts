/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useMapContext } from '../contexts/MapContextProvider';
import { removeMarkers, setMarkerPlaceInfo } from '../utils/mapMarkerUtils';
import { Place } from '@/types/map';

interface MapPickMarkerProps {
  map: any;
  marker: React.MutableRefObject<any>;
  markers: React.MutableRefObject<any[]>;
}
const useMapPickMarker = ({ map, marker, markers }: MapPickMarkerProps) => {
  const { setKeyword, setSearchedPlaces, markerPlace, setMarkerPlace, setSelectedPlace } = useMapContext();
  const handleOnClickOnlyList = (placeIndex: number) => {
    setSelectedPlace(markerPlace[placeIndex]);
    removeMarkers(markers);
  };

  useEffect(() => {
    if (markerPlace?.length === 0) return;
    removeMarkers(markers);
    setSelectedPlace({} as Place);
  }, [markerPlace, markers, setSelectedPlace]);

  useEffect(() => {
    const pickMarker = () => {
      window.kakao.maps.event.addListener(map, 'click', async (mouseEvent: any) => {
        setSearchedPlaces([]);
        setKeyword('직접입력');
        const latlng = mouseEvent.latLng;
        marker.current.setPosition(latlng);
        const markerPlace = await setMarkerPlaceInfo(latlng.getLat(), latlng.getLng());
        const markerPlaceList = [markerPlace];
        setMarkerPlace(markerPlaceList);
      });
    };
    map && pickMarker();
  }, [map, marker, setKeyword, setMarkerPlace, setSearchedPlaces]);

  return { handleOnClickOnlyList };
};

export default useMapPickMarker;
