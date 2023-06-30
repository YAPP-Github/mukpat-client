export const userKeys = {
  all: ['user'],
  profile: () => [...userKeys.all, 'profile'],
} as const;
