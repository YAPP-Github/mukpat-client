import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMapContext } from '../contexts/MapContextProvider';
import { searchPlaces } from '../utils/mapSearchUtils';
import { PlaceList } from '@/types/map';

const useMapSearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { keyword, setKeyword, setSearchedPlaces, setMarkerPlace } = useMapContext();

  const onSubmit = handleSubmit(async (data) => {
    const keyword = data?.placeKeyword.trim();
    setMarkerPlace([]);
    setKeyword(keyword);
    const placesList: PlaceList = await searchPlaces(keyword);
    setSearchedPlaces(placesList);
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
