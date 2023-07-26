'use client';
import { searchformWrapper, searchButton, inputText } from './Map.css';
import { IconButton } from '@/components';
import { useIsMobile } from '@/hooks';
import useMapSearchForm from './hooks/useMapSearchForm';
import { useDisplayContext } from './contexts/MapContextProvider';
type MapSearchFormProps = {
  onClose?: () => void;
};
const MapSearchForm = ({ onClose }: MapSearchFormProps) => {
  const { register, errors, onSubmit } = useMapSearchForm();
  const mobile = useIsMobile();
  const { displayDispatch } = useDisplayContext();
  const handleOnClick = () => {
    if (!mobile) return;
    displayDispatch({ type: 'handleInputFocus', payload: mobile });
  };
  return (
    <div className={searchformWrapper} tabIndex={0}>
      {mobile && <IconButton iconType="chevronleft" width={36} height={36} onClick={onClose} />}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register('placeKeyword', { required: '장소를 다시 입력하세요' })}
          className={inputText}
          placeholder="위치 검색"
          aria-label="위치 검색"
          aria-required="true"
          aria-invalid={errors.placeKeyword ? 'true' : 'false'}
          onFocus={handleOnClick}
        />
        <IconButton
          iconType="search"
          hover={true}
          active={false}
          error={false}
          width={36}
          height={36}
          type="submit"
          aria-label="검색"
          className={searchButton}
        />
      </form>
    </div>
  );
};

export default MapSearchForm;
