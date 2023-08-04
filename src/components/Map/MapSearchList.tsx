/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { searchinfoWrapper, noSearchInfoWrapper } from './Map.css';
import { Place } from '@/types/map';
import { useSearchList } from './hooks';
import MapSearchItem from './MapSearchItem';
import IconButton from '../IconButton/IconButton';
import { useDisplayContext } from './contexts/MapContextProvider';

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
  const { displayState } = useDisplayContext();
  const { handleOnClickList, placeList, setListItemRef } = useSearchList({ map, marker });

  if (!placeList) {
    return <SearchInfo />;
  }
  if (placeList.length === 0) {
    return <NoSearchInfo />;
  }
  return (
    <div className={searchinfoWrapper({ display: displayState?.searchList, marker: displayState?.marker })} role="list">
      <ul>
        {placeList?.map((place: Place, index: number) => (
          <MapSearchItem
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
