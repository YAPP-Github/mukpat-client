import { writeKeys } from '@/api/write/queryKeys';
import { writeAPI } from '@/api/write/api';
import { useSuspenseQuery } from '@suspensive/react-query';
import { BoardData } from '@/app/write/types';

interface Props {
  boardId: number;
  onSuccess: (data: BoardData) => void;
}

const useGetBoard = ({ boardId, onSuccess }: Props) => {
  return useSuspenseQuery({
    queryKey: writeKeys.board(boardId),
    queryFn: () => writeAPI.getBoardDetail(boardId),
    onSuccess: (data) => {
      onSuccess(data);
    },
  });
};

export default useGetBoard;
