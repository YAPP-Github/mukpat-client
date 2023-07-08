export type PlaceList = Place[] | [];

export type Place = {
  x: number;
  y: number;
  place_name: string;
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
};

export type SearchPlace = {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};
