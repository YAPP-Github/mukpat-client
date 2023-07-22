import { request } from '@/utils/ky/request';
import { ParsedData, PostResponse } from '@/app/write/types';
class WriteAPI {
  /**
   * 유저가 입력한 데이터로 먹팟을 생성합니다.
   * @param data - 유저가 입력한 board 데이터
   */
  async postBoard({ ...data }: ParsedData): Promise<PostResponse> {
    return request
      .post('v2/boards', {
        json: {
          ...data,
        },
      })
      .json();
  }
  /**
   * boardId에 해당하는 먹팟을 수정합니다
   * @param boardId - 수정할 board의 id
   * @param data - 유저가 입력한 board 데이터
   */
  async patchBoard(boardId: number, { ...data }: ParsedData): Promise<PostResponse> {
    return request
      .patch(`v2/boards/${boardId}`, {
        json: {
          ...data,
        },
      })
      .json();
  }
}

// api fetchers instance
export const writeAPI = new WriteAPI();
