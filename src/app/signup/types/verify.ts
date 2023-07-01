export interface RequestEmailRequest {
  email: string;
}
export interface RequestEmailResponse {
  status: number;
  result?: {
    verificationCode: string;
  };
  message?: string;
}
export interface VerifyEmailRequest {
  email: string;
  verificationCode: string;
}
export interface VerifyEmailResponse {
  status: number;
  message?: string;
}
