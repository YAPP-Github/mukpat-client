import '@/styles/globals.css';
import localFont from 'next/font/local';
import Script from 'next/script';
import { OverlayProvider, QueryProvider } from '@/providers';

const pretendardFont = localFont({
  src: '../../public/PretendardVariable.woff2',
  display: 'swap',
});

export const metadata = {
  title: '먹팟',
  description: '점심 랜덤 모임',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pretendardFont.className}>
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
          <OverlayProvider>{children}</OverlayProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
