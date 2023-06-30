# useOverlay

Toast, Modal과 같이 부모 렌더링 요소 외부 영역에 렌더링이 필요한 요소들을 선언적으로 사용할 수 있는 커스텀 훅 입니다.


## OverlayProvider

이를 사용하기 위해선 최상단 요소에 `<OverlayProvider/>` 를 감싸줘야 합니다.
(프로젝트에는 이미 적용되어있습니다.)

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<link rel="preload" type="image/svg+xml" as="image" href="/sprite.svg" />
			<body>
					<OverlayProvider>{children}</OverlayProvider>
			</body>
		</html>
	);
}
```

## useOverlay hook

아래와 같은 형태로 사용할 수 있습니다.

```tsx
'use client';

import { Button, Toast } from '@/components';
import { useOverlay } from '@/hooks';

const Test = () => {
	const [openToast, closeToast] = useOverlay();

	return (
		<div>
			<Button onClick={() => openToast(<Toast type="success" message="참여 신청이 완료되었어요!" onClose={closeToast} />)}>
				토스트 열기
			</Button>
		</div>
	);
};

export default Test;

```

### 설명

- `openXXX` : 렌더링 할 요소를 인자로 넘겨주면 `<div id="overlay-container"/>` 내부에 렌더링을 합니다.
- `closeXXX` : open을 통해 렌더링한 요소를 닫습니다.