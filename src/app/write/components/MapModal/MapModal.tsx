import { useFormContext } from 'react-hook-form';
import { Map, Input } from '@/components';
import { useOverlay } from '@/hooks';

const MapModal = () => {
  const [openModal, closeModal] = useOverlay();
  const method = useFormContext();
  const renderModal = () => {
    return <Map onClick={onClick} onClose={closeModal} />;
  };

  const onClick = (data: any) => {
    if (data) {
      method.setValue('locationName', `${data.road_address_name} ${data.place_name}`);
      if (data.x && data.y) {
        method.setValue('x', parseFloat(data.x));
        method.setValue('y', parseFloat(data.y));
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
