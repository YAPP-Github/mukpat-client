import { ParsedData, StepOneData, StepTwoData } from '../types';
import useFormStore from '../store/useFormStore';
import { useQueryClient } from '@tanstack/react-query';
import { useGetBoard, writeKeys } from '@/api/write';

const useSetFormData = (boardId: string) => {
  const { setData } = useFormStore();
  const id = Number(boardId);
  const queryClient = useQueryClient();
  const fetchData = (board: ParsedData) => {
    if (board) {
      const date = new Date(
        board.meetingDate
          .toString()
          .replace(/[년월일()]/g, '')
          .trim()
          .replace(/\s+/g, '-'),
      );
      const timezone = board.meetingTime.startsWith('오후') ? '오후' : '오전';
      const time = board.meetingTime.slice(3);
      const stepOneData: StepOneData = {
        meetingDate: date,
        meetingTime: time,
        maxApply: board.maxApply,
        minAge: board.minAge,
        maxAge: board.maxAge,
        timezone: timezone,
        // region_1depth_name: board.region_1depth_name,
        // region_2depth_name: board.region_2depth_name,
        region_1depth_name: '',
        region_2depth_name: '',
        locationName: board.locationName,
        x: board.x,
        y: board.y,
        locationDetail: board.locationDetail,
      };

      const stepTwoData: StepTwoData = {
        title: board.title,
        content: board.content,
        chatLink: board.chatLink,
      };

      setData({ step: 1, data: stepOneData });
      setData({ step: 2, data: stepTwoData });

      queryClient.invalidateQueries([writeKeys, Number(boardId)]);
    }
  };

  const { data: board } = useGetBoard({
    boardId: id,
    onSuccess: async () => {
      if (board) {
        fetchData(board);
      }
    },
  });
};

export default useSetFormData;
