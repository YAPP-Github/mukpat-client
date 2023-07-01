'use client';
import { IconButton, Typography } from '@/components';
import { mapButton } from './MapButton.css';
import { HTMLAttributes } from 'react';
import { Map } from '@/components';
import { useOverlay } from '@/hooks';
import { Maptype } from '../../types/map';

type MapButtonProps = {
  mapValue: Maptype | undefined;
  setMapValue: (data: Maptype | undefined) => void;
} & HTMLAttributes<HTMLDivElement>;

const MapButton = ({ mapValue, setMapValue }: MapButtonProps) => {
  const [openModal, closeModal] = useOverlay();
  const onClickMapButton = (data: any) => {
    closeModal();
    setMapValue(data);
  };
  const renderModal = () => {
    return <Map onClick={onClickMapButton} onClose={closeModal} />;
  };
  return (
    <>
      <Typography as="p" variant="label3" required={true}>
        먹팟 위치
      </Typography>
      <div className={mapButton} onClick={() => openModal(renderModal())}>
        <IconButton iconType="search" width={24} height={24} hover={false} />
        <span>{mapValue?.place_name || mapValue?.address_name || mapValue?.road_address_name || '위치 검색'}</span>
      </div>
    </>
  );
};

export default MapButton;
