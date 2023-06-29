import ky from 'ky';
import { processResponse } from './hooks/processResponse';
import { setupCookies } from './hooks/setupCookies';
import { processError } from './hooks/processError';

const isServer = typeof window === 'undefined';

const PREFIX_URL = (() => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3000/api';
  if (isServer) return process.env.API_URL;
  return process.env.NEXT_PUBLIC_API_URL;
})();

export const request = ky.create({
  prefixUrl: PREFIX_URL,
  hooks: {
    beforeRequest: [setupCookies],
    beforeError: [processError],
    afterResponse: [processResponse],
  },
  credentials: 'include',
});
