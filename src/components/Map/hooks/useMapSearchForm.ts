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

  const { keyword, setKeyword, setSearchedPlaces, setMarkerPlace, setLoading } = useMapContext();
  const onSubmit = handleSubmit(async (data) => {
    setMarkerPlace([]);
    const keyword = data?.placeKeyword.trim();
    setKeyword(keyword);
    setLoading(true);
    const searchPlaceList: SearchPlace[] = await searchPlaces(keyword);
    const placeList: PlaceList = searchPlaceList.map((place) => ({
      x: Number(place.x),
      y: Number(place.y),
      place_name: place.place_name,
      address_name: place.address_name,
      region_1depth_name: '',
      region_2depth_name: '',
    }));
    setLoading(false);
    setSearchedPlaces(placeList);
  });

  useEffect(() => {
    setValue('placeKeyword', keyword);
  }, [keyword, setValue]);

  return {
    register,
    errors,
    onSubmit,
  };
};
export default useMapSearchForm;
