export interface ResponseData {
  status: number;
  message?: string;
  result?: unknown;
}

export interface Profile {
  userId: number;
  nickName: string;
  jobGroupMain?: string;
}
