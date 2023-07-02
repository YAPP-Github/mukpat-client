'use client';
import { Button } from '@/components';
import { buttonWrapper } from './Map.css';
import { useMapContext } from './contexts/MapContextProvider';
import { CustomPlace } from '@/types/map';

type MapConfirmButtonProps = {
  onClick: (data: CustomPlace) => void;
};

const MapConfirmButton = ({ onClick }: MapConfirmButtonProps) => {
  const { selectedPlace, keyword } = useMapContext();
  const customPlace: CustomPlace = {
    x: Number(selectedPlace.x),
    y: Number(selectedPlace.y),
    address: selectedPlace?.place_name || selectedPlace?.address_name || selectedPlace?.road_address_name,
  };
  return (
    <div className={buttonWrapper}>
      <Button size="medium" aria-label="확인" onClick={() => onClick(customPlace)}>
      <Button disabled={!keyword} size="medium" aria-label="확인" onClick={() => onClick(selectedPlace)}>
        확인
      </Button>
    </div>
  );
};

export default MapConfirmButton;
