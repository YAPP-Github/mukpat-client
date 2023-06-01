'use client';

import { DropdownContextProvider } from './contexts/DropdownContext';
import DropdownWrapper from './DropdownWrapper';

// 0. dropdown toggle
// [x] children을 요소로 받아 dropdown 트리거로 사용할 수 있음

// 1. dropdown button
// 크기는 부모 요소 기준
// [x] dropdown toggle을 상속받는다.
// [x] 선택된 요소가 없으면 placeholder를 보여주기
// [x] 선택된 요소가 있다면 선택된 요소의 텍스트값을 보여주기
// [x] disabled를 통해서 비활성화 시킬 수 있음

// 2. dropdown item (list)
// 크기는 button 크기 기준
// [x] 리스트 영역 밖을 클릭하면 드랍다운이 닫힌다.
// [x] 리스트 요소를 클릭하면 드랍다운이 닫힌다
// [x] 버튼을 누르면 열고닫힘이 토글된다
// [x] TODO : 선택된 아이템은 아이콘으로 표시 및 색상을 변경 된다
// [x] 너비 조절 가능 옵션 추가 -> css 만들어서 적용 가능
// [x] 변수명 변경(DropdownList -> DropdownMenu, DropdownMenuItem -> DropdownItem)
// [x] Menu 스크롤바 스타일 적용
// [x] Menu 렌더링 위치 자동으로 위아래 조절하기
// 	- 조건부 렌더링 대신 display none으로 조절하기
//  - 렌더링 시 useLayoutEffect 위 또는 아래 조절하기
// [x] control 가능하게 할때 굳이 state가 string[] 타입이어야 하는가? (string | null) 타입으로도 충분해보인다...
// [] 변수명 한번만..꼭 placement 여야할까
// [ ] 접근성 챙기기
// [ ] README Document 작성

// 3. dropdown composite
// DropdownButton : 기본 버튼
// DropdownTrigger : 커스터마이즈 가능한 트리거
// DropdownMenu(ul) : 기본 아이템 리스트
// DropdownItem(li) : 기본 아이템 요소
// https://nextui.org/docs/components/dropdown

type Props = React.HTMLAttributes<HTMLDivElement>;

const Dropdown = ({ children, ...rest }: Props) => {
	return (
		<DropdownContextProvider>
			<DropdownWrapper {...rest}>{children}</DropdownWrapper>
		</DropdownContextProvider>
	);
};

export default Dropdown;
