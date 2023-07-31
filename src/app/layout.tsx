import '@/styles/globals.css';
import localFont from 'next/font/local';
import Script from 'next/script';
import { OverlayProvider, QueryProvider } from '@/providers';
import { ProfileProvider } from '@/providers/server';
import Head from 'next/head';
import { RouteChangesProvider } from './write/hooks/useRouteChangeEvents';

const pretendardFont = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Semibold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: '먹팟',
  description: '번개 점심팟 구하기',
  openGraph: {
    title: '먹팟',
    description: '번개 점심팟 구하기',
    url: 'https://mukpat.com',
    images: [
      {
        url: '/ogImg/chatlink_kakaotalk.png',
        width: 800,
        height: 400,
        alt: '먹팟',
      },
      {
        url: '/ogImg/chatlink_facebook.png',
        width: 600,
        height: 315,
        alt: '먹팟',
      },
      {
        url: '/ogImg/chatlink_twitter.png',
        width: 1200,
        height: 630,
        alt: '먹팟',
      },
      {
        url: '/ogImg/chatlink_instagram.png',
        width: 320,
        height: 320,
        alt: '먹팟',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendardFont.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer,drawing&autoload=false`}
        async
      />
      <link rel="preload" type="image/svg+xml" as="image" href="/sprite.svg" />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
      />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <QueryProvider>
          <ProfileProvider>
            <RouteChangesProvider>
              <OverlayProvider>{children}</OverlayProvider>
            </RouteChangesProvider>
          </ProfileProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
