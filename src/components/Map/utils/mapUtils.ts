/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    kakao: any;
  }
}
interface LatLng {
  La: number;
  Ma: number;
}
export const createMap = (mapContainer: HTMLElement | null, location: LatLng) => {
  const mapOption = {
    center: location,
    level: 3,
  };
  return new window.kakao.maps.Map(mapContainer, mapOption);
};
export const createMarker = (markerInfo: { position: GeolocationPosition } | null) => {
  return new window.kakao.maps.Marker(markerInfo);
};
export const createLatLngBounds = () => {
  return new window.kakao.maps.LatLngBounds();
};
export const createLatLng = ({ latitude, longitude }: { latitude: string; longitude: string }) => {
  return new window.kakao.maps.LatLng(latitude, longitude);
};
export const creatPlaces = () => {
  return new window.kakao.maps.services.Places();
};
export const creatGeocoder = () => {
  return new window.kakao.maps.services.Geocoder();
};
export const getCurrentCoordinate = () => {
  return new Promise<LatLng>((resolve, reject) => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const location = new window.kakao.maps.LatLng(latitude, longitude);
        resolve(location);
      });
    } else {
      reject(new Error('Failed to get current position'));
    }
  });
};
