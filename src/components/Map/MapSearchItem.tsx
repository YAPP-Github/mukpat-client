import { searchList } from './Map.css';
import { Place } from '@/types/map';

type SearchListItemProps = {
  place: Place;
  index: number;
  handleOnClickList: (placeIndex: number) => void;
  setListItemRef: (ref: HTMLLIElement, index: number) => void;
};

const MapSearchListItem = ({ place, index, handleOnClickList, setListItemRef }: SearchListItemProps) => {
  const { place_name, address_name } = place;
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
      <div>{address_name}</div>
    </li>
  );
};
export default MapSearchListItem;
