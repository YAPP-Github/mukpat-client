# Map

## 사용 예시
- useOverlay 훅을 사용해 Modal을 띄울 수 있다.
  - 버튼을 눌렀을때, 오버레이 형태로 띄우고 싶다면 아래와 같이 사용해야 한다.
```
  const [openModal, closeModal] = useOverlay();
  const renderModal = () => {
    return <Map onClick={onClick} onClose={closeModal} />;
  };
  const onClick = (data: any) => {
	console.log(data); // 선택된 place data
    closeModal();
  };
  return (
    <>
      <button onClick={() => openModal(renderModal())}>Button</button>
    </>
  );
```
