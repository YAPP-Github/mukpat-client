export const boardKeys = {
  all: ['board'] as const,
  list: () => [...boardKeys.all, 'list'] as const,
  detail: (boardId: number) => [...boardKeys.all, 'detail', boardId] as const,
};
