import { useState, useCallback } from 'react';

export const useConsent = () => {
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(false);

  const onClickConsent = useCallback(() => {
    setAgree((prev) => !prev);
  }, []);
  const onClickConsentError = useCallback(() => {
    setError(true);
  }, []);

  return { agree, error, onClickConsent, onClickConsentError };
};
