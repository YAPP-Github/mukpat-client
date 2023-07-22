import { useSuspenseQuery } from '@suspensive/react-query';
import { boardAPI } from '@/api/board/api';
import { boardKeys } from '@/api/board/queryKeys';

const useBoardRegions = () => useSuspenseQuery(boardKeys.regions(), () => boardAPI.getBoardRegions());

export default useBoardRegions;
