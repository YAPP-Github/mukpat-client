/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { searchinfoWrapper, noSearchInfoWrapper } from './Map.css';
import { useCallback, useRef } from 'react';
import { Place } from '@/types/map';
import { useMapPickMarker, useMapListMarkers } from './hooks';
import MapSearchItem from './MapSearchItem';
import IconButton from '../IconButton/IconButton';
import { useDisplayContext, useMapContext } from './contexts/MapContextProvider';

type MapSearchListProps = {
  map: any;
  marker: any;
};

const NoSearchInfo = () => {
  const { displayState } = useDisplayContext();
  return (
    <div className={noSearchInfoWrapper({ display: displayState?.searchList })} role="alert">
      <IconButton iconType="info" hover={false} active={false} />
      <div>검색 결과가 없습니다.</div>
    </div>
  );
};
const SearchInfo = () => {
  const { displayState } = useDisplayContext();
  return (
    <div className={noSearchInfoWrapper({ display: displayState?.searchList })} role="alert">
      <IconButton iconType="map" hover={false} active={false} />
      <div style={{ marginTop: '16px' }}>
        원하시는 장소를
        <br />
        검색해주세요
      </div>
    </div>
  );
};
const MapSearchList = ({ map, marker }: MapSearchListProps) => {
  const markers = useRef<any[]>([]);
  const listRefs = useRef<Record<number, HTMLLIElement | null>>({});
  const setListItemRef = useCallback((ref: HTMLLIElement | null, index: number) => {
    listRefs.current[index] = ref;
  }, []);
  const { mapState } = useMapContext();
  const { displayState } = useDisplayContext();
  const placeList = mapState.markerPlace?.length != 0 ? mapState.markerPlace : mapState.searchedPlaces;

  const { handleOnClickListWithMarkers } = useMapListMarkers({ map, markers });
  const { handleOnClickOnlyList } = useMapPickMarker({ map, marker, markers });
  if (!placeList) {
    return <SearchInfo />;
  }
  if (placeList.length === 0) {
    return <NoSearchInfo />;
  }
  return (
    <div className={searchinfoWrapper({ display: displayState?.searchList, marker: displayState?.marker })} role="list">
      <ul>
        {placeList?.map((place: Place, index) => (
          <MapSearchItem
            key={index}
            place={place}
            index={index}
            handleOnClickList={mapState.markerPlace?.length != 0 ? handleOnClickOnlyList : handleOnClickListWithMarkers}
            setListItemRef={setListItemRef}
            aria-label={`장소 ${index + 1}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default MapSearchList;
