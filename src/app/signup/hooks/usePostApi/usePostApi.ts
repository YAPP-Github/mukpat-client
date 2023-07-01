import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

interface PostApiProps<RequestData, ResponseData> {
  apiFunction: (requestData: RequestData) => Promise<ResponseData>;
  onSuccess?: () => void;
  onError?: () => void;
}

export const usePostApi = <RequestData, ResponseData>({
  apiFunction,
  onSuccess,
  onError,
}: PostApiProps<RequestData, ResponseData>) => {
  const [successData, setSuccessData] = useState<ResponseData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const mutation = useMutation({
    mutationFn: apiFunction,
    onSuccess: (responseData: ResponseData) => {
      setSuccessData(responseData);
      onSuccess && onSuccess();
    },
    onError: (error) => {
      if (error instanceof Error) {
        const msg = error?.message as string;
        setErrorMsg(msg);
      }
      onError && onError();
    },
  });

  const postData = async (requestData: RequestData) => {
    await mutation.mutateAsync(requestData);
  };

  return { successData, errorMsg, postData };
};
