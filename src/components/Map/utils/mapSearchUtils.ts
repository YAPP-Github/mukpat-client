/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlaceList } from '../types';
import { creatPlaces } from './mapUtils';

export const searchPlaces = async (keyword: string): Promise<PlaceList> => {
  const ps = creatPlaces();
  let places: PlaceList = [];

  const placesSearchCB = new Promise<PlaceList>((resolve, reject) => {
    const searchCallback = (data: any, status: any, pagination: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        places = [...places, ...data];
        if (pagination.hasNextPage) {
          pagination.nextPage();
        } else {
          resolve(places);
        }
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        resolve(places);
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        reject('장소 검색 중 오류가 발생했습니다.');
      }
    };
    ps.keywordSearch(keyword, searchCallback);
  });

  return placesSearchCB;
};
