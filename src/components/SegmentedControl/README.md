# SegmentedControl

## 예시

```tsx
'use client';

import { useState } from 'react';
import { SegmentedControl, Typography } from '@/components';

const data2 = [
	{ value: '1', label: '남성' },
	{ value: '2', label: '여성' },
];

const Test = () => {
	const [value, setValue] = useState('1');

	return (
		<>
			<Typography id="gender-select" variant="heading4" as="label">
				성별
			</Typography>
			<SegmentedControl ariaLabelledby="gender-select" data={data2} value={value} onChange={setValue} />;
		</>
	);
};

export default Test;
```

![gender](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/96d1280d-f8c1-4829-b9a6-82b4d7c540ad)



## Props

- `data: { value: string, label: ReactNode  }[]` 
  
  - `value`와 `label` 속성을 가지는 객체들의 배열을 인자로 요구합니다.
  - `value`는 각 아이템 요소를 선택했을때의 상태값을 제어하는데 사용됩니다. (각 아이템별 `value`는 고유해야 합니다.)
  - `label`은 각 아이템 요소에 표시할 요소를 정의합니다.
  
<br/>

- `value?: string`
  - 선택된 대상의 state 값
  - Controllable 하게 사용할때 필요합니다.

<br/>

- `onChange?: (value: string) => void`
  - 선택 대상이 변화할때 호출되는 함수로 선택 state를 변경하는 용도로 사용됩니다.
  - Controllable 하게 사용할때 필요합니다.

<br/>

- `arirLabelledby?: string`
  - 해당 컴포넌트를 설명하는 `label`요소의 아이디를 명시하여 접근성 향상에 도움을 줍니다.
