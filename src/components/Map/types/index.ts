export type Place = {
  id?: string;
  place_name: string;
  address_name: string;
  road_address_name: string;
  x?: string;
  y?: string;
};

export type PlaceList = Place[] | [];
