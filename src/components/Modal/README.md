# Modal

## 사용 예시
- useOverlay 훅을 사용해 Modal을 띄울 수 있다.
  - 버튼을 눌렀을때, 오버레이 형태로 띄우고 싶다면 아래와 같이 사용해야 한다.
```
const ModalToggle = () => {
	const [openModal, closeModal] = useOverlay();

	const renderModal = () => {
		return (
			<Modal onClose={closeModal} size="large">
				<ModalHeader type="infoWithClose" title="참여신청안내">
					<IconButton iconType="close" />
				</ModalHeader>
				<ModalContent size="large"> 이것은 description입니다 하히아히아히아히 </ModalContent>
				<ModalFooter type="single">
					<Button size="large">Button</Button>
				</ModalFooter>
			</Modal>
		);
	};
	return (
		<div>
			<button onClick={() => openModal(renderModal())}>Modal Button</button>
		</div>
	);
};
```
# 구성 컴포넌트

## Modal
- Modal의 부모 요소 입니다. 
- Modal의 자식 요소로는 ModalHeader, ModalContent, ModalFooter가 있습니다.
- 단독으로 사용해도 되며 원하는 요소를 넣어줄 수 있습니다.

## ModalHeader
### 정의 
ModalHeader는 Modal의 Title로 사용 가능합니다. 
또한 ModalHeader의 자식 요소로 IconButton을 넣어 사용할 수 있습니다.
### Props
- type: input, info",confirm, infoWithClose값을 사용할 수 있으며, 아래 이미지 참고하여 각 타입별로 사용 가능합니다.
- title: 타이틀 값을 넣어 사용할 수 있습니다.

**사용예시**
```angular2html
// IconButton 닫기 버튼이 있는 경우
<ModalHeader type="infoWithClose" title="참여신청안내">
   <IconButton iconType="close" />
</ModalHeader>

<ModalHeader type="info" title="참여신청안내">
  <IconButton iconType="close" />
</ModalHeader>
```
## ModalContent
### 정의
ModalContent는 내부 컨텐츠를 담는 컴포넌트입니다.
### Props
- size:  ModaHeader의 영역 및 폰트 사이즈를 지정할 수 있습니다.

**사용예시**
```angular2html
<ModalContent size="small"> 이것은 description입니다  </ModalContent>
```

## ModalFooter
### 정의
ModalFooter는 Modal의 하단에 위치하는 컴포넌트입니다.
보통 버튼 컴포넌트를 넣어 사용합니다.
버튼은 1개 또는 2개를 넣을 수 있습니다.
### Props
- type: horizontal, vertical ,single 타입이 있으며, single을 제외하고 Button이 2개이상일때 사용 가능합니다. 

**사용예시** 
```angular2html
// 버튼이 1개인 경우
<ModalFooter type="single">
  <Button size="small">Button</Button>
</ModalFooter>
// 버튼이 2개이상인 경우
<ModalFooter type="vertical">
    <Button size="small">Button</Button>
    <Button size="small">Button</Button>
</ModalFooter>
```
## Props 
### type 정의
![img](https://user-images.githubusercontent.com/36434665/244858153-b3cec928-ffde-4eb5-b714-6502a4bfb915.png)
위 그림과 같이 각 컴포넌트별 size와 type을 지정할 수 있다.

