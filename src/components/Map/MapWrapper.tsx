'use client';
import React, { useRef } from 'react';
import MapSearchList from './MapSearchList';
import MapSearchForm from './MapSearchForm';
import MapConfirmButton from './MapConfirmButton';
import { mapWrapper, mapContainer, backgroundWrapper, mapSearchContainer, searchWrapper } from './Map.css';
import useMap from './hooks/useMap';
import { useClickOutside } from '@/hooks';
import { CustomPlace } from '@/types/map';
import { Loading } from '@/components';
import { useMapContext } from './contexts/MapContextProvider';

type MapWrapperProps = {
  onClose: () => void;
  onClick: (data: CustomPlace) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const MapWrapper = ({ onClick, onClose }: MapWrapperProps) => {
  const { loading } = useMapContext();
  const mapRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const { map, marker } = useMap(mapRef);

  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      if (loadingRef.current) return;
      onClose();
    },
  });

  return (
    <div className={mapContainer} role="dialog" aria-modal="true">
      {loading && <Loading ref={loadingRef} />}
      <div className={backgroundWrapper}></div>
      <div className={mapSearchContainer} ref={ref} aria-label="지도 검색 영역">
        <div className={searchWrapper}>
          <MapSearchForm />
          <MapSearchList map={map} marker={marker} />
          <MapConfirmButton onClick={onClick} />
        </div>
        <div id="map" className={mapWrapper} ref={mapRef} aria-label="지도"></div>
      </div>
    </div>
  );
};

export default MapWrapper;
