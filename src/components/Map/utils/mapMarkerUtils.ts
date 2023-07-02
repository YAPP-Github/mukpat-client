/* eslint-disable @typescript-eslint/no-explicit-any */
import { Place, PlaceList } from '@/types/map';
import { createLatLngBounds, createLatLng, createMarker, creatGeocoder, createMarkerImg } from '../utils/mapUtils';

export const addMarker = (markerDetail: any, markers: React.MutableRefObject<any[]>) => {
  const updatedMarkers = [...markers.current, { markerDetail }];
  return {
    markers: updatedMarkers,
  };
};
export const removeMarkers = (markers: React.MutableRefObject<any[]>) => {
  if (markers.current.length === 0) return;
  markers.current.forEach((item) => item.marker.setMap(null));
  markers.current = [];
};
export const displayPlacesMarker = (kakaoMap: { bounds: any; map: any }, place: Place) => {
  const { bounds, map } = kakaoMap;
  if (!place.x || !place.y) return;
  const placePosition = createLatLng({ latitude: place.y, longitude: place.x });
  bounds.extend(placePosition);
  map.setBounds(bounds);
  const markerImg = createMarkerImg();
  const marker = createMarker({ position: placePosition, image: markerImg });
  marker.setMap(map);
  return marker;
};
export const addMarkers = (placeList: PlaceList, map: any) => {
  const bounds = createLatLngBounds();
  const combinedMarkerDetails: any[] = [];
  placeList?.forEach((place) => {
    const marker = displayPlacesMarker({ bounds, map }, place);
    combinedMarkerDetails.push({ marker });
  });
  return combinedMarkerDetails;
};

export const setMarkerPlaceInfo = async (latitude: string, longitude: string): Promise<Place> => {
  const geocoder = creatGeocoder();
  const coord = createLatLng({ latitude, longitude });
  return new Promise<Place>((resolve, reject) => {
    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const placeList: Place = {
          id: '',
          place_name: '',
          address_name: result[0]?.address?.address_name,
          road_address_name: result[0]?.road_address?.address_name,
          x: latitude,
          y: longitude,
        };
        resolve(placeList);
      } else {
        reject(new Error('Failed to get marker place'));
      }
    });
  });
};
