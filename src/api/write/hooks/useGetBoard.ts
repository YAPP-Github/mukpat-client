import { writeKeys } from '@/api/write/queryKeys';
// import { BoardData } from '@/app/write/types';
import { writeAPI } from '@/api/write/api';
import { useQuery } from '@tanstack/react-query';

interface Props {
  boardId: number;
  onSuccess: () => void;
}

const useGetBoard = ({ boardId, onSuccess }: Props) => {
  return useQuery({
    queryKey: writeKeys.board(boardId),
    queryFn: () => writeAPI.getBoardDetail(boardId),
    onSuccess: onSuccess,
  });
};

export default useGetBoard;
