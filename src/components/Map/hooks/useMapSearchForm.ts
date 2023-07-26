import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMapContext } from '../contexts/MapContextProvider';
import { searchPlaces } from '../utils/mapSearchUtils';
import { PlaceList, SearchPlace } from '@/types/map';

const useMapSearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { mapState, mapDispatch } = useMapContext();

  const onSubmit = handleSubmit(async (data) => {
    mapDispatch({ type: 'handleClickInitPlace' });
    const keyword = data?.placeKeyword.trim();
    const placeList: SearchPlace[] = await searchPlaces(keyword);
    const searchedPlaces: PlaceList = placeList.map((place) => ({
      x: Number(place.x),
      y: Number(place.y),
      place_name: place.place_name,
      address_name: place.road_address_name || place.address_name,
      region_1depth_name: '',
      region_2depth_name: '',
    }));
    mapDispatch({
      type: 'handleClickPlaceList',
      payload: {
        keyword,
        searchedPlaces,
        markerPlace: [],
      },
    });
  });

  useEffect(() => {
    setValue('placeKeyword', mapState.keyword);
  }, [mapState.keyword, setValue]);

  return {
    register,
    errors,
    onSubmit,
  };
};
export default useMapSearchForm;
