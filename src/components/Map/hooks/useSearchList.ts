/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState, useRef } from 'react';
import { useMapContext, useDisplayContext } from '../contexts/MapContextProvider';
import { useIsMobile } from '@/hooks';
import { removeMarkers, addMarkers, getPlaceInfo } from '../utils/mapMarkerUtils';
import { Place } from '@/types/map';

interface MapListMarkersProps {
  map: any;
  marker: React.MutableRefObject<any>;
}
const useSearchList = ({ map, marker }: MapListMarkersProps) => {
  const mobile = useIsMobile();
  const markers = useRef<any[]>([]);
  const listRefs = useRef<Record<number, HTMLLIElement | null>>({});
  const setListItemRef = useCallback((ref: HTMLLIElement | null, index: number) => {
    listRefs.current[index] = ref;
  }, []);
  const { mapState, mapDispatch } = useMapContext();
  const { displayDispatch } = useDisplayContext();
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const placeList = mapState.markerPlace?.length != 0 ? mapState.markerPlace : mapState.searchedPlaces;

  const handleOnClickList = useCallback(
    async (placeIndex: number) => {
      setSelectedIndex(placeIndex);
      const { searchedPlaces } = mapState;
      if (!searchedPlaces?.length) return;
      const searchPlace = searchedPlaces[placeIndex];
      const { region_1depth_name, region_2depth_name } = await getPlaceInfo(
        searchPlace?.y.toString(),
        searchPlace?.x.toString(),
      );
      const newSearchPlace = { ...searchPlace, ...{ region_1depth_name, region_2depth_name } };
      mapDispatch({
        type: 'handleClickPlaceList',
        payload: {
          ...mapState,
          place: newSearchPlace,
        },
      });
    },
    [mapState, mapDispatch, markers, map],
  );

  useEffect(() => {
    const { searchedPlaces, markerPlace, place } = mapState;
    removeMarkers(markers);
    if (markerPlace?.length) {
      listRefs.current[0]?.focus();
    } else if (searchedPlaces?.length) {
      const searchPlaceIndex = [searchedPlaces[selectedIndex]];
      const searchMarkerList = Object.keys(place as Place)?.length ? searchPlaceIndex : searchedPlaces;
      const markersTotal = addMarkers(searchMarkerList, map);
      markers.current = markersTotal;
    }
  }, [mapState]);

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
            keyword: '',
            searchedPlaces: [],
            markerPlace: [markerPlace],
            place: markerPlace,
          },
        });
      });
    };
    map && pickMarker();
  }, [map]);

  return { handleOnClickList, placeList, setListItemRef };
};

export default useSearchList;
