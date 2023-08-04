'use client';
import MapWrapper from './MapWrapper';
import { MapContextProvider } from './contexts/MapContextProvider';
import { Place } from '@/types/map';

type MapProps = {
  /** overlay를 닫는 함수입니다. hooks에 있는 useOverlay를 이용해 맵 overlay를 닫을 수 있습니다. */
  onClose: () => void;
  /** 맵에서 장소를 선택했을 때 실행되는 함수입니다. 선택한 장소의 데이터를 인자로 받습니다. */
  onClick: (data: Place) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const MapComponent = ({ onClose, onClick }: MapProps) => {
  return (
    <MapContextProvider>
      <MapWrapper onClick={onClick} onClose={onClose}></MapWrapper>
    </MapContextProvider>
  );
};

export default MapComponent;
