'use client';
import MapWrapper from './MapWrapper';
import { MapContextProvider } from './contexts/MapContextProvider';
import { CustomPlace } from './types';
/**
 * @property {onClose} onClose  - overlay를 닫는 함수입니다. hooks에 있는 useOverlay를 이용해 맵 overlay를 닫을 수 있습니다.
 * @property {onClick} onClick  - 맵에서 장소를 선택했을 때 실행되는 함수입니다. 선택한 장소의 데이터를 인자로 받습니다.
 */

type MapProps = {
  onClose: () => void;
  onClick: (data: CustomPlace | undefined) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const MapComponent = ({ onClose, onClick }: MapProps) => {
  return (
    <MapContextProvider>
      <MapWrapper onClick={onClick} onClose={onClose}></MapWrapper>
    </MapContextProvider>
  );
};

export default MapComponent;
