import { userKeys, userAPI } from './user';
import { boardKeys, boardAPI } from './board';

export const queryKeys = {
  user: userKeys,
  board: boardKeys,
} as const;

export const api = {
  user: userAPI,
  board: boardAPI,
} as const;
