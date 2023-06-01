# Dropdown 

![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/03759938-afd7-46f4-ad0a-02058f2e7359)

## 사용 예시 


### 정적인 형태로 사용하기

선택 기능 없이 단순히 드랍다운을 보여주는 형태로 사용할 수 있습니다.

> 💡 기본적으로 `Dropdown`은 클라이언트 컴포넌트 입니다.

```tsx
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@/components';

const selections = [
	'react',
	'typescript',
	'nextjs',
    '...',
];

<Dropdown>
	<DropdownButton placeholder="프론트엔드"/>
	<DropdownMenu>
		{selections.map((v) => (
			<DropdownItem key={v} itemKey={v}>
				{v}
			</DropdownItem>
		))}
	</DropdownMenu>
</Dropdown>
```

### Controllable 한 형태로 사용하기

선택 기능과 함께 state로 controllable 한 형태로 사용할 수 있습니다. 
단, 이를 위해선 `selectable`, `selectedItemKey`, `onSelectChange` 인자를 아래와 같은 형태로 채워야합니다.
state의 타입은 `<string | null>` 가 요구 됩니다.

```tsx
const Test = () => {
	const [selection, setSelection] = useState<string | null>(null);

	return (
		<Dropdown>
			<DropdownButton placeholder="프론트엔드">{selection}</DropdownButton>
			<DropdownMenu selectable selectedItemKey={selection} onSelectChange={setSelection}>
				{selections.map((v) => (
					<DropdownItem key={v} itemKey={v}>
						{v}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};
```

<br/>

## 구성 컴포넌트

본 컴포넌트는 합성컴포넌트로 구성되어 있어 구성된 하위 컴포넌트들은 아래와 같습니다.

### Dropdown 

Dropdown 부모 요소 입니다.

<br/>

### DropdownToggle


#### 정의

드랍다운을 다른요소에도 커스텀하여 사용할 수 있도록 드랍다운의 토글 기능을 담은 컴포넌트 입니다.
`DropdownToggle`의 자식 요소에 렌더링하고자 하는 다른 요소를 넣어주는 형태로 사용하면 됩니다.

#### Props

`HTMLButtonElemen` 의 props와 동일합니다.

#### 예시

```tsx
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@/components';


<Dropdown style={{ width: 'max-content' }}>
    <DropdownToggle>
        <Chip>토글</Chip>
    </DropdownToggle>
    /* {이하 생략} */
</Dropdown>

```

결과는 아래와 같습니다.

![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/8caa59e1-0385-467f-9ddf-1d696db96e78)

<br/>

### DropdownButton

#### 정의

디자인 시안에서 맞추어 구현된 기본적인 드랍다운 버튼의 구현체 입니다. `DropdownTrigger`를 이용해 구현되어 있습니다.

버튼은 아래에서 "프론트엔드"라는 텍스트를 가진 요소를 의미합니다.

![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/313962e4-fe02-4d71-9070-00d369bb7b10)

#### Props

`placeholder?: string` : 선택된 요소가 없을때 버튼에 기본적으로 표시할 텍스트를 명시합니다. 명시하지 않으면 선택되지 않은경우 `선택` 이라는 텍스트를 표시합니다.


#### 예시

```tsx
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@/components';

const [selection, setSelection] = useState<string | null>(null);

<Dropdown>
	<DropdownButton placeholder="프론트엔드">{selection}</DropdownButton>
	/* {이하 생략} */
</Dropdown>
```

<br/>


### DropdownMenu

#### 정의

`DropdownMenu`은 아래에서 스크롤바가 있는 선택 박스를 의미합니다.

![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/313962e4-fe02-4d71-9070-00d369bb7b10)

#### Props

- `xplacement` : `'left' | 'center' (center) | 'right'`
  - `Menu`의 위치를 설정하는 값으로 `DropdownButton` or `DropdownTrigger` 요소를 기준으로 어디에 맞추어 표시할지 정의합니다

    - `left`
      ![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/18f31140-dcb0-48b9-ab4a-40b2a03d51b4)
      
    - `center`
      ![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/8521eb0d-2f1f-41e8-be19-eb82f30536c3) 
      
    - `right`
      ![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/8f9cc23c-9ba5-4f55-8fd1-9e2cdfdb6138)

- `selectable`: `boolean`
  - 상태값을 바인딩하여 `controllable`한 형태로 선택된 값을 받아낼지 결정합니다.  


- `selectedItemKey` : `string | null`
  - 선택된 요소를 구분하기 위한 `itemKey` 값 입니다. state값을 넣으면 되며, `selectable` 이 참이면 필수인 값입니다.

- `onSelectChange`
  - 사용자가 특정 요소를 선택했을때 선택된 대상을 변경하는 함수로, state 변경함수를 넣어주면 됩니다. `selectable` 이 참이면 필수인 값입니다.

#### 특징

- Menu의 너비 특징

  - 기본적으로 부모 요소에 맞추어 너비가 정해지며 최소한 `Menu` 의 `content` 너비만큼은 너비가 나오도록 설정되어 있습니다.
    
    ![asdf](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/11ea180c-6d11-4712-b9b7-1280fa5e8b01)


  - 필요하다면 인라인 스타일링이나 `className` 넘겨서 원하는 너비로 바꿀 수 있습니다.

    ```tsx
        function Test2() {
            return (
                <div style={{ marginLeft: '100px', marginTop: '270px', display: 'flex' }}>
                    <Dropdown>
                        <DropdownToggle>
                            <Chip>토글</Chip>
                        </DropdownToggle>
                        <DropdownMenu selectable xplacement="left" style={{ width: '300px' }}>
                            {selections.map((v) => (
                                <DropdownItem key={v} itemKey={v}>
                                    {v}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <div>hello</div>
                </div>
            );
        }
    ```

    ![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/4a29b951-03ec-4fa0-bf0a-ec17137e6e1a)

<br/>



### DropdownItem

#### 정의

`DropdownMenu`은 아래에서 각 선택 가능한 요소를 의미합니다.

![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/313962e4-fe02-4d71-9070-00d369bb7b10)


#### Props

- `itemKey` : 각 아이템 요소를 구별할 수 있는 값으로 반드시 명시해야 합니다. (이 값을 이용해 선택 상태값을 변경합니다.)


<br/>

## 그 외 특징들

- 드랍다운을 열때 아래쪽 간격에 따라 위로 띄울지 아래로 띄울지 내부적으로 결정됩니다.

![ㄹㄹㄹㄹ](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/25604ffe-b315-41ec-9dec-4173759029c6)

- `DropdownButton` 혹은 `DropdownToggle` 에 `disabled`를 true로 넘기면 Dropdown이 비활성화 됩니다.

![image](https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/38908080/039ef252-48fa-48ca-8fbf-cbe8e08ccfd8)


- 드랍다운 외부 영역을 클릭하면 Menu는 종료됩니다.

- 선택한 요소를 다시 클릭하면 선택이 취소됩니다.

- 스크롤은 Menu의 높이가 `300px`이 넘어가면 나옵니다.

- 각 요소들은 커스터마이징 하여 스타일을 조절할 수 있습니다.(className이나 인라인 스타일 이용가능)



## 참고 사항
- [ ] 향후 sprite icon을 만들면 아이콘 접근 방법을 변경해야할듯 합니다.

- [ ] `Dropdown.Button`과 같이 하위 컴포넌트들을 객체형태로 불러오고 싶었으나 [Next13 app dir에서 에러](https://github.com/vercel/next.js/issues/41940)를 일으키는 문제가 있음
   - 이 때문에 import 할게 좀 많습니다..ㅠ