// Object.entries(...) 와 동일하되 타이핑만 적용된 함수
export const typedEntries = Object.entries as <T>(obj: T) => Array<[keyof T, T[keyof T]]>;
