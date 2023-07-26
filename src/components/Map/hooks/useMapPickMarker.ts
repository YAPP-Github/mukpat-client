/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useCallback } from 'react';
import { useMapContext, useDisplayContext } from '../contexts/MapContextProvider';
import { removeMarkers, getPlaceInfo } from '../utils/mapMarkerUtils';
import { useIsMobile } from '@/hooks';
import { PlaceList } from '@/types/map';

interface MapPickMarkerProps {
  map: any;
  marker: React.MutableRefObject<any>;
  markers: React.MutableRefObject<any[]>;
}
const useMapPickMarker = ({ map, marker, markers }: MapPickMarkerProps) => {
  const mobile = useIsMobile();
  const { displayDispatch } = useDisplayContext();
  const { mapState, mapDispatch } = useMapContext();

  const handleOnClickOnlyList = useCallback(
    (placeIndex: number) => {
      const markerPlace = mapState.markerPlace as PlaceList;
      mapDispatch({
        type: 'handleClickPlaceResult',
        payload: markerPlace[placeIndex],
      });
      removeMarkers(markers);
    },
    [mapDispatch, mapState.markerPlace, markers],
  );

  useEffect(() => {
    const pickMarker = () => {
      window.kakao.maps.event.addListener(map, 'click', async (mouseEvent: any) => {
        mobile && displayDispatch({ type: 'handleClickMarker', payload: mobile });
        const latlng = mouseEvent.latLng;
        marker.current.setPosition(latlng);
        const markerPlace = await getPlaceInfo(latlng.getLat(), latlng.getLng());
        mapDispatch({
          type: 'handleClickPlaceList',
          payload: {
            keyword: '직접입력',
            searchedPlaces: [],
            markerPlace: [markerPlace],
          },
        });
        removeMarkers(markers);
      });
    };
    map && pickMarker();
  }, [displayDispatch, map, mapDispatch, marker, markers, mobile]);

  return { handleOnClickOnlyList };
};

export default useMapPickMarker;
