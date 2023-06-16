# DateInput

Dropdown 형태로 날짜를 선택할 수 있는 Input

- 날짜를 선택하면 선택된 날짜가 하이라이트 되며 DropdownButton에 선택된 날짜값이 나타난다
- 선택된 날짜를 다시 클릭하면 선택은 취소된다.

## 예시

```
'use client';

import { useState } from 'react';
import { DateInput } from '@/components';

const Datepick = () => {
	const [selected, setSelected] = useState<Date>();

	return <DateInput selected={selected} onSelect={setSelected} />;
};

export default Datepick;
```

## Props

- `selected` : 선택된 날짜 상태값
- `onSelect` : 날짜 선택 시 상태값을 변경하는 함수
- `placeholder?` : 선택된 날짜가 없을 때 보여줄 placeholder 문자열
- `isError?` : 날짜 선택에 대한 에러 여부 표시 