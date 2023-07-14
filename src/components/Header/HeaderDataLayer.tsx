'use client';

import { useEffect } from 'react';
import { SHA256, enc } from 'crypto-js';
import { useProfile } from '@/api/hooks';

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, unknown>[];
};

declare const window: WindowWithDataLayer;

export const pageView = (userId: number, url: string) => {
  window.dataLayer.push({
    event: 'pageview',
    eventProps: {
      page_url: url,
    },
    userId: SHA256(String(userId)).toString(enc.Hex),
  });
};

const HeaderDataLayer = () => {
  const { data: profile } = useProfile();

  useEffect(() => {
    if (profile) {
      pageView(profile.userId, window.location.href);
    }
  }, [profile]);

  return null;
};

export default HeaderDataLayer;
