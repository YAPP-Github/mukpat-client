# Modal

## 사용 예시 

```
'use client';
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';

const ModalToggle = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleToggleModal = () => {
		// 특정 동작 수행시 모달을 열고 닫는다.
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div>
			<button onClick={handleToggleModal}>Toggle Modal</button>
			{isModalOpen && (
				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} size="small">
					<p> Test Title</p>
					<div> Test...</div>
					<div> Test...</div>
					<div> Test...</div>
					<div> Test...</div>
				</Modal>
			)}
		</div>
	);
};

export default ModalToggle;
```

## Props
- isModalOpen: boolean; 
    - 모달 노출 여부를 체크합니다. 
- setIsModalOpen: (value: boolean) => void;
    - isModalOpen state 값을 업데이트 하며, 모달 외부 영역 선택시 값 변경을 위해 필수값으로 사용됩니다.  