import { request } from '@/utils/ky/request';
import { BOARDS_PER_PAGE } from '@/app/home/constants';
import { BoardListPagingData, BoardListResponse, BoardDetail, BoardRegionResponse } from './types';

class BoardAPI {
  /**
   * board list를 페이지당 boardsPerPage 개수만큼 가져옵니다.
   * @param requestlastId - 마지막으로 가져온 board의 id
   * @param boardsPerPage - 페이지당 가져올 board 개수
   */
  async getBoardList(requestlastId?: number, boardsPerPage = BOARDS_PER_PAGE): Promise<BoardListPagingData> {
    const { list, lastId } = await request('v1/boards', {
      searchParams: {
        countPerScroll: boardsPerPage,
        ...(requestlastId && { lastId: requestlastId }),
      },
    }).json<BoardListResponse>();

    return {
      data: list,
      lastId,
      isLastPage: list.length < boardsPerPage,
    };
  }

  /**
   * boardId에 해당하는 먹팟의 정보를 가져옵니다.
   * @param boardId - 가져올 board의 id
   */
  async getBoardDetail(boardId: number) {
    return request.get(`v1/boards/${boardId}`).json<BoardDetail>();
  }

  /**
   * boardId에 해당하는 먹팟에 참가 신청합니다
   * @param boardId - 참가 신청할 board의 id
   */
  async postBoardJoin(boardId: number) {
    return request.post(`v1/boards/${boardId}/join`).json();
  }

  /**
   * boardId에 해당하는 먹팟에 참가 신청을 취소합니다
   * @param boardId - 참가 신청할 board의 id
   */
  async deleteBoardJoin(boardId: number) {
    return request.delete(`v1/boards/${boardId}/join`).json();
  }

  /**
   * boardId에 해당하는 먹팟을 삭제합니다
   * @param boardId - 삭제할 board의 id
   */
  async deleteBoard(boardId: number) {
    return request.delete(`v1/boards/${boardId}`).json();
  }

  /**
   * 먹팟 게시글들의 지역 카테고리 목록을 조회합니다.
   */
  async getBoardRegions() {
    const { list } = await request.get(`v1/boards/regions`).json<BoardRegionResponse>();
    return list;
  }
}

// api fetchers instance
export const boardAPI = new BoardAPI();
