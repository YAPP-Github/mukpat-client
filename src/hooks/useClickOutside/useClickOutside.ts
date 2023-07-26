import { useEffect, useRef } from 'react';

type ClickOutsideEvents = Pick<
  WindowEventMap,
  'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'pointerdown' | 'pointerup'
>;

const OVERLAY_CONTAINER = '#overlay-container';

interface Props {
  /** 외부 클릭 이벤트 발생 시 실행할 함수 */
  onClickOutside: () => void;
  /** 외부 클릭 이벤트 종류 */
  event?: keyof ClickOutsideEvents;
  /** 비활성화 여부 */
  disabled?: boolean;
}

/**
 * @param {Props} props
 * @param {() => void} props.onClickOutside - 외부 클릭 이벤트 발생 시 실행할 함수
 * @param {keyof ClickOutsideEvents} props.event - 외부 클릭 이벤트 종류
 * @param {boolean} props.disabled - 비활성화 여부
 * @returns {React.RefObject<T>} 외부 클릭 이벤트를 감지할 element ref
 */
const useClickOutside = <T extends HTMLElement = HTMLElement>({
  onClickOutside,
  event = 'mousedown',
  disabled = false,
}: Props): React.RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (disabled) return;
    const handleClickOutside = (e: ClickOutsideEvents[typeof event]) => {
      // ref가 overlay-container내에 없는데, overlay-container 안에서 발생한 이벤트 인 경우
      if (!ref.current?.closest(OVERLAY_CONTAINER) && (e.target as HTMLElement).closest(OVERLAY_CONTAINER)) {
        return;
      }

      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    };
    window.addEventListener(event, handleClickOutside);
    return () => {
      window.removeEventListener(event, handleClickOutside);
    };
  }, [onClickOutside, event, disabled]);

  return ref;
};

export default useClickOutside;
