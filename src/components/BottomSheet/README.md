# BottomSheet

## 사용 예시
- useOverlay 훅을 사용해 bottomSheet을 띄울 수 있다.
  - 버튼을 눌렀을때, 오버레이 형태로 띄우고 싶다면 아래와 같이 사용해야 한다.
```tsx
const Test = () => {
	const [openBottomSheet, closeBottomSheet] = useOverlay();

	const renderBottomSheet = () => {
		return (
			<BottomSheet onClose={closeBottomSheet} titie="타이틀 영역 입니다" >
                <div>원하는 내용 적기</div>
			</BottomSheet>
		);
	};
	return (
		<div>
			<button onClick={() => openBottomSheet(renderBottomSheet())}>BottomSheet Button</button>
		</div>
	);
};
export default Test;
```

- background 클릭시 close 
- x 버튼 클릭시 close 