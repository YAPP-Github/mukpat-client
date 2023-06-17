/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlaceList } from '../types';
import { creatPlaces, getCurrentCoordinate } from './mapUtils';

interface SearchInfo {
  data: any;
  status: keyof typeof window.kakao.maps.services.Status;
  pagination: any;
  places: any;
}

export const filteredOptions = async () => {
  const currentCoordinate = await getCurrentCoordinate();
  const options = {
    location: currentCoordinate,
    radius: 10000,
    sort: window.kakao.maps.services.SortBy.DISTANCE,
  };
  return options;
};
export const placesSearchCB = (
  searchInfo: SearchInfo,
  resolve: (value?: PlaceList) => void,
  reject: (reason?: string) => void,
) => {
  const { data, status, pagination, places } = searchInfo;
  if (status === window.kakao.maps.services.Status.OK) {
    if (pagination.hasNextPage) {
      pagination.nextPage();
      return [...places, ...data];
    } else {
      resolve([...places, ...data]);
    }
  } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
    reject('검색 결과가 존재하지 않습니다.');
  } else if (status === window.kakao.maps.services.Status.ERROR) {
    reject('장소 검색 중 오류가 발생했습니다.');
  }
  return [];
};
export const searchPlaces = (keyword: string) => {
  const ps = creatPlaces();
  return new Promise<any>(async (resolve, reject) => {
    let places: PlaceList = [];
    const options = await filteredOptions();
    ps.keywordSearch(
      keyword,
      (data: any, status: any, pagination: any) => {
        places = placesSearchCB({ data, status, pagination, places }, resolve, reject);
      },
      options,
    );
  });
};
