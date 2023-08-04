# DayPicker

날짜 선택 입력창


## 예시

```
'use client';

import { useState } from 'react';
import { DayPicker } from '@/components';

const Datepick = () => {
	const [selected, setSelected] = useState<Date>();

	return <DayPicker selected={selected} onSelect={setSelected} />;
};

export default Datepick;
```

## Props

- `selected` : 선택된 날짜 상태값
- `onSelect` : 날짜 선택 시 상태값을 변경하는 함수