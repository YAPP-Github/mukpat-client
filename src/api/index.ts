import { userKeys, userAPI } from './user';
import { boardKeys, boardAPI } from './board';
import { writeAPI, writeKeys } from './write';

export const queryKeys = {
  user: userKeys,
  board: boardKeys,
  write: writeKeys,
} as const;

export const api = {
  user: userAPI,
  board: boardAPI,
  write: writeAPI,
} as const;
