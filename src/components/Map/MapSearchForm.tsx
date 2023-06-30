'use client';
import { searchformWrapper, searchButton, inputText } from './Map.css';
import { IconButton } from '@/components';
import useMapSearchForm from './hooks/useMapSearchForm';

const MapSearchForm = () => {
  const { register, errors, onSubmit } = useMapSearchForm();

  return (
    <div className={searchformWrapper} tabIndex={0}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register('placeKeyword', { required: '장소를 다시 입력하세요' })}
          className={inputText}
          placeholder="위치 검색"
          aria-label="위치 검색"
          aria-required="true"
          aria-invalid={errors.placeKeyword ? 'true' : 'false'}
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
