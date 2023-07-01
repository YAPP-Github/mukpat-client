export type LoginRequest = {
  email: string;
  password: string;
  keep: string;
};
export type LoginResponse = {
  status: number;
  result?: {
    userId?: number;
    nickName?: string;
  };
  message?: string;
};
