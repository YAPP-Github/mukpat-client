import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@/hooks';
import { boardKeys } from '@/api/board';
import { writeAPI } from '@/api/write/api';

const usePostBoard = () => {
  const queryClient = useQueryClient();

  return useMutation(writeAPI.postBoard, {
    onSuccess: () => {
      void queryClient.invalidateQueries(boardKeys.list());
    },
  });
};

export default usePostBoard;
