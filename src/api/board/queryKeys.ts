export const boardKeys = {
  all: ['board'] as const,
  list: (cityId?: number, provinceId?: number) => [...boardKeys.all, 'list', cityId, provinceId] as const,
  detail: (boardId: number) => [...boardKeys.all, 'detail', boardId] as const,
  regions: () => [...boardKeys.all, 'regions'] as const,
};
