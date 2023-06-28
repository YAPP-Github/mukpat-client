import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { board } from './board';

export const queries = mergeQueryKeys(board);
