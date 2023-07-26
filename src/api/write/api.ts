import { request } from '@/utils/ky/request';
import { BoardData, ParsedData, PostResponse } from '@/app/write/types';
interface Props {
  boardId: number;
  data: ParsedData;
}
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

  async patchBoard({ boardId, data }: Props): Promise<PostResponse> {
    return request
      .patch(`v2/boards/${boardId}`, {
        json: {
          ...data,
        },
      })
      .json();
  }

  /**
   * boardId에 해당하는 먹팟을 수정하기 위해 정보를 가져옵니다.
   * @param boardId - 가져올 board의 id
   */
  async getBoardDetail(boardId: number) {
    return request.get(`v1/boards/${boardId}/update`).json<BoardData>();
  }
}

// api fetchers instance
export const writeAPI = new WriteAPI();
