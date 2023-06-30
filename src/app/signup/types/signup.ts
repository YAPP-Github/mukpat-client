export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  jobGroupMain: string | null;
  jobGroupSub: string | null;
  locationName: string;
  x: number;
  y: number;
  gender: string;
  yearOfBirth: string | null;
}
export interface SignupResponse {
  status: number;
  result?: {
    userId: number;
    nickName: string;
  };
  message?: string;
}
