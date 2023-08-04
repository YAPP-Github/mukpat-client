'use client';
import React, { useRef } from 'react';
import { MapSearchList, MapSearchForm, MapConfirmButton } from './';
import { mapWrapper, mapContainer, backgroundWrapper, mapSearchContainer, searchWrapper } from './Map.css';
import useMap from './hooks/useMap';
import { useClickOutside, useLockScroll, useIsMobile } from '@/hooks';
import { Place } from '@/types/map';
import { Loading } from '@/components';
import { useDisplayContext, useMapContext } from './contexts/MapContextProvider';

type MapWrapperProps = {
  onClose: () => void;
  onClick: (data: Place) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const MapWrapper = ({ onClick, onClose }: MapWrapperProps) => {
  useLockScroll();
  const mobile = useIsMobile();
  const { displayState } = useDisplayContext();
  const { mapState } = useMapContext();
  const mapRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const { map, marker } = useMap(mapRef);
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      if (loadingRef.current) return;
      onClose();
    },
  });
  const isLoading = () => {
    return !map || (mapState && !mapState.searchedPlaces && !mapState.markerPlace);
  };
  return (
    <div className={mapContainer} role="dialog" aria-modal="true">
      {isLoading() && <Loading ref={loadingRef} />}
      {mobile ? (
        <>
          <div className={mapSearchContainer} ref={ref} aria-label="지도 검색 영역">
            <MapSearchForm onClose={onClose} />
            <div id="map" className={mapWrapper({ display: displayState?.map })} ref={mapRef} aria-label="지도"></div>
            <MapSearchList map={map} marker={marker} />
            <MapConfirmButton onClick={onClick} />
          </div>
        </>
      ) : (
        <>
          <div className={backgroundWrapper}></div>
          <div className={mapSearchContainer} ref={ref} aria-label="지도 검색 영역">
            <div className={searchWrapper}>
              <MapSearchForm />
              <MapSearchList map={map} marker={marker} />
              <MapConfirmButton onClick={onClick} />
            </div>
            <div id="map" className={mapWrapper({ display: false })} ref={mapRef} aria-label="지도"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default MapWrapper;
