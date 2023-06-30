export const getBoardStatusText = (status: string) => {
  return '모집' + status.split('모집').join(' ');
};
