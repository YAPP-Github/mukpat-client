import { mergeQueryKeys, inferQueryKeyStore } from '@lukemorales/query-key-factory';
import { board } from './board';
import { user } from './user';

export const queries = mergeQueryKeys(board, user);

export type Queries = inferQueryKeyStore<typeof queries>;
