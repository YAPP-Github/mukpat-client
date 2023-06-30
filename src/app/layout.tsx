import '@/styles/globals.css';
import localFont from 'next/font/local';
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
      <body>
        <QueryProvider>
          <OverlayProvider>{children}</OverlayProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
