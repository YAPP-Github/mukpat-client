'use client';
import { Button } from '@/components';
import { buttonWrapper } from './Map.css';
import { useMapContext } from './contexts/MapContextProvider';
import { Place } from '@/types/map';

type MapConfirmButtonProps = {
  onClick: (data: Place) => void;
};

const MapConfirmButton = ({ onClick }: MapConfirmButtonProps) => {
  const { selectedPlace, keyword } = useMapContext();
  return (
    <div className={buttonWrapper}>
      <Button disabled={!keyword} size="medium" aria-label="확인" onClick={() => onClick(selectedPlace)}>
        확인
      </Button>
    </div>
  );
};

export default MapConfirmButton;
