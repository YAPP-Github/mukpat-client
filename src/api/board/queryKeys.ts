export const boardKeys = {
  all: ['board'] as const,
  list: (cityId?: number, provinceId?: number) => [...boardKeys.all, 'list', cityId, provinceId] as const,
  detail: (boardId: number, cityId?: number, provinceId?: number) =>
    [...boardKeys.all, 'detail', boardId, cityId, provinceId] as const,
  regions: () => [...boardKeys.all, 'regions'] as const,
};
