'use client';
import { Button } from '@/components';
import { buttonWrapper } from './Map.css';
import { useMapContext } from './contexts/MapContextProvider';
import { Place } from '@/types/map';

type MapConfirmButtonProps = {
  onClick: (data: Place) => void;
};

const MapConfirmButton = ({ onClick }: MapConfirmButtonProps) => {
  const { mapState } = useMapContext();
  const handleOnClick = () => {
    const place = mapState.place as Place;
    onClick(place);
  };
  return (
    <div className={buttonWrapper}>
      <Button disabled={!mapState.keyword} size="medium" aria-label="확인" onClick={handleOnClick}>
        확인
      </Button>
    </div>
  );
};

export default MapConfirmButton;
