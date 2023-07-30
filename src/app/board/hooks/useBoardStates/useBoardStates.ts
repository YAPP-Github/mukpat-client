import { useProfile } from '@/api/hooks';
import { BoardDetail } from '@/api/types';

const RECRUITING = '모집중';

const useBoardStates = (board: BoardDetail) => {
  const { data: profile } = useProfile();
  const { participants, status, minAge, maxAge, userAge, currentApply, maxApply, isOutOfDate } = board;

  const writer = participants.find(({ writer }) => writer);

  /** 작성자 여부 */
  const isWriter = writer?.userId === profile?.userId;

  /** 모집중인지의 여부 */
  const isRecruiting = status === RECRUITING;

  /** 수정 가능 여부 */
  const isEditable = isRecruiting && isWriter && !isOutOfDate;

  /** 참여중인지의 여부 */
  const isJoined = Boolean(participants.find(({ userId }) => userId === profile?.userId));

  /** 인원이 다 찼는지 여부 */
  const isFull = currentApply >= maxApply;

  /** 모집 마감 가능 여부 */
  const isClosable = isWriter && isRecruiting;

  /** 참가 취소 가능 여부 */
  const isJoinCancellable = !isWriter && isJoined && !isOutOfDate;

  /** 나이 제한 통과 여부 */
  const isNotPossibleAge =
    isRecruiting && !isWriter && Boolean(userAge && minAge && maxAge && !(minAge <= userAge && userAge <= maxAge));

  /** 참여 가능 여부 */
  const isJoinable = !isWriter && !isNotPossibleAge && !isJoined && isRecruiting;

  /** 다시 모집하기 가능 여부 */
  const isAgainRecruitable = isWriter && !isRecruiting && !isFull && !isOutOfDate;

  return {
    /** 작성자 여부 */
    isWriter,

    /** 수정 가능 여부 */
    isEditable,

    /** 모집 마감 가능 여부 */
    isClosable,

    /** 참가 취소 가능 여부 */
    isJoinCancellable,

    /** 참여 가능 여부 */
    isJoinable,

    /** 다시 모집하기 가능 여부 */
    isAgainRecruitable,

    /** 나이 제한 통과 여부 */
    isNotPossibleAge,

    /** 참여 중인지 여부 */
    isJoined,
  } as const;
};

export default useBoardStates;
