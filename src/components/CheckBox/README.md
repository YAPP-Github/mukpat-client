# Checkbox

![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/fba840ac-f657-489f-a538-e4e13bc7c91c)

![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/e06c5814-b60d-4b82-9768-a9878e15f5a6)

## Props

- `variant: 'default' | 'filled'` : 체크 박스와 텍스트만 있는 형태(default) 혹은 배경색이 채워져 있는 형태(filled)를 선택할 수 있습니다.

- `error?: boolean` : 에러 상태값을 입니다. true인 경우 일부 테두리가 빨간색으로 변합니다.

- `checked: boolean` : 체크 여부 상태값 입니다.

- `onChange: (checked: boolean) => void` : 체크 여부 상태값을 변화시키는 함수입니다.