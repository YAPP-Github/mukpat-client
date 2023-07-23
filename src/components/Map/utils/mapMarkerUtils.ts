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
  if (Object.entries(place).length === 0) return;
  const placePosition = createLatLng({ latitude: String(place?.y), longitude: String(place?.x) });
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

export const getPlaceInfo = async (latitude: string, longitude: string): Promise<Place> => {
  const geocoder = creatGeocoder();
  const coord = createLatLng({ latitude, longitude });
  return new Promise<Place>((resolve, reject) => {
    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const { road_address, address } = result[0];
        const placeInfo: Place = {
          place_name: road_address?.address_name && address?.address_name,
          address_name: road_address?.address_name && address?.address_name,
          region_1depth_name: address?.region_1depth_name,
          region_2depth_name: address?.region_2depth_name,
          x: Number(latitude),
          y: Number(longitude),
        };
        resolve(placeInfo);
      } else {
        reject(new Error('Failed to get marker place'));
      }
    });
  });
};
