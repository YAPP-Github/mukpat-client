/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { searchinfoWrapper, noSearchInfoWrapper } from './Map.css';
import { useRef } from 'react';
import { Place } from './types';
import { useMapPickMarker, useMapListMarkers } from './hooks';
import MapSearchListItem from './MapSearchItem';
import IconButton from '../IconButton/IconButton';
import { useSearchList } from './hooks';

type MapSearchListProps = { map: any; marker: any };

const NoSearchInfo = () => {
  return (
    <div className={noSearchInfoWrapper} role="alert">
      <IconButton iconType="map" hover={false} active={false} />
      <div>검색 결과가 없습니다.</div>
    </div>
  );
};
const SearchInfo = () => {
  return (
    <div className={noSearchInfoWrapper} role="alert">
      <IconButton iconType="map" hover={false} active={false} />
      <div>
        원하시는 장소를
        <br />
        검색해주세요
      </div>
    </div>
  );
};
const MapSearchList = ({ map, marker }: MapSearchListProps) => {
  const markers = useRef<any[]>([]);

  const { handleOnClickListWithMarkers } = useMapListMarkers({ map, markers });
  const { handleOnClickOnlyList } = useMapPickMarker({ map, marker, markers });
  const { setListItemRef, handleOnClickList, placeList } = useSearchList({
    handleOnClickListWithMarkers,
    handleOnClickOnlyList,
  });
  if (!placeList) {
    return <SearchInfo />;
  }
  if (placeList.length === 0) {
    return <NoSearchInfo />;
  }
  return (
    <div className={searchinfoWrapper} role="list">
      <ul>
        {placeList?.map((place: Place, index) => (
          <MapSearchListItem
            key={index}
            place={place}
            index={index}
            handleOnClickList={handleOnClickList}
            setListItemRef={setListItemRef}
            aria-label={`장소 ${index + 1}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default MapSearchList;
