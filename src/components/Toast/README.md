# Toast

## 특징

- 지정한 메시지를 토스트 형태로 띄우는 컴포넌트

- `useOverlay` 훅과 같이 사용하여 선언적인 형태로 사용할 수 있습니다.

## 예시

```tsx
'use client';

import { Button, Toast } from '@/components';
import { useOverlay } from '@/hooks';

const Test = () => {
	const [openToast, closeToast] = useOverlay();

	return (
		<div>
			<Button onClick={() => openToast(<Toast message="참여 신청이 완료되었어요!" onClose={closeToast} />)}>
				토스트 열기
			</Button>
		</div>
	);
};

export default Test;
```

## Props

- `message` : 토스트에 보여줄 메시지
- `onClose` : 토스트가 닫힐때 트리거되는 함수
- `closeAfter?` : 몇초 뒤에 토스트가 닫히게 할건지 결정하는 인자
