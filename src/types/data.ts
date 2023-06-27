export interface ResponseData<T = void> {
  status: number;
  message?: string;
  result?: T;
}

export interface Profile {
  userId: number;
  nickName: string;
  jobGroupMain?: string;
}
