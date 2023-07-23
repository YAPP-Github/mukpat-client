import { useIsMobile } from '@/hooks';
import { searchList, showMap } from './Map.css';
import { Place } from '@/types/map';
import { useDisplayContext } from './contexts/MapContextProvider';

type SearchListItemProps = {
  place: Place;
  index: number;
  handleOnClickList: (placeIndex: number) => void;
  setListItemRef: (ref: HTMLLIElement, index: number) => void;
};

const MapSearchItem = ({ place, index, handleOnClickList, setListItemRef }: SearchListItemProps) => {
  const { place_name, address_name, region_1depth_name, region_2depth_name } = place as Place;
  const { displayDispatch } = useDisplayContext();
  const mobile = useIsMobile();
  const handleOnClick = () => {
    if (!mobile) return;
    displayDispatch({ type: 'handleClickShowMap', payload: mobile });
  };
  return (
    <li
      key={index}
      className={searchList}
      onClick={() => handleOnClickList(index)}
      ref={(ref) => setListItemRef(ref as HTMLLIElement, index)}
      tabIndex={0}
      role="button"
      aria-label={`${place_name} 선택`}
    >
      {place_name && <div>{place_name}</div>}
      {!place_name && !address_name && (
        <div>
          {region_1depth_name} {region_2depth_name}
        </div>
      )}
      <div>{address_name}</div>
      {mobile && (
        <div onClick={handleOnClick} className={showMap}>
          지도보기
        </div>
      )}
    </li>
  );
};
export default MapSearchItem;
