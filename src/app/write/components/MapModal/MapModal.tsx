'use client';

import { useFormContext } from 'react-hook-form';
import { Map, Input } from '@/components';
import { useOverlay } from '@/hooks';

const MapModal = () => {
  const [openModal, closeModal] = useOverlay();
  const method = useFormContext();
  const renderModal = () => {
    return <Map onClick={onClick} onClose={closeModal} />;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClick = (data: any) => {
    if (data) {
      method.setValue('locationName', `${data.address_name} ${data.place_name}`);
      if (data.x && data.y) {
        method.setValue('x', parseFloat(data.x));
        method.setValue('y', parseFloat(data.y));
        method.setValue('region_1depth_name', parseFloat(data.region_1depth_name));
        method.setValue('region_2depth_name', parseFloat(data.region_2depth_name));
      }
    }
    closeModal();
  };
  return (
    <Input
      {...method.register('locationName')}
      name={'locationName'}
      readOnly={true}
      showError={true}
      type="search"
      placeholder="위치 검색"
      onClick={() => openModal(renderModal())}
    ></Input>
  );
};

export default MapModal;
