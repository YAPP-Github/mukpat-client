import { ParsedData, StepOneData, StepTwoData } from '../types';
import useFormStore from '../store/useFormStore';
import { useGetBoard } from '@/api/write';

const getParsedData = (board: ParsedData) => {
  const date = new Date(board.meetingDate);
  const timezone = board.meetingTime.startsWith('오후') ? '오후' : '오전';
  const time = board.meetingTime.slice(3);
  const stepOneData: StepOneData = {
    meetingDate: date,
    meetingTime: time,
    maxApply: board.maxApply,
    minAge: board.minAge,
    maxAge: board.maxAge,
    timezone: timezone,
    region_1depth_name: board.region_1depth_name,
    region_2depth_name: board.region_2depth_name,
    // region_1depth_name: '서울시',
    // region_2depth_name: '마포구',
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

  // setData({ step: 1, data: stepOneData });
  // setData({ step: 2, data: stepTwoData });
  return {
    stepOneData,
    stepTwoData,
  };
};

const useSetFormData = (boardId: string) => {
  const { initData } = useFormStore();
  const id = Number(boardId);

  useGetBoard({
    boardId: id,
    onSuccess: (boardData) => {
      const { stepOneData, stepTwoData } = getParsedData(boardData);
      initData({
        stepOneData,
        stepTwoData,
      });
    },
  });
};

export default useSetFormData;
