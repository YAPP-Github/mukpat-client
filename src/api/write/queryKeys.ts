export const writeKeys = {
  all: ['write'],
  board: (boardId: number) => [...writeKeys.all, 'detail', boardId] as const,
};
