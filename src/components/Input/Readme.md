# Input 사용 예시
https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/51940808/b791f7b7-707e-446b-abc4-173db7b8b65b

## 요약
#### react-Hook-Form과 zod 스키마를 기반으로 인풋 컴포넌트를 개발했습니다.
Input 컴포넌트의 경우, Form 내부에서만 사용될 것으로 예상하여 개발하였습니다.
Form의 전체 구성은 대략 아래와 같습니다. 괄호는 선택 요소입니다. 
```
page
 └─ FormProvider
    | └─ form
    |     └─ (InputSection)
    |         └─ Input 
    └─ Button
    └─ (ErrorMessage)
```
##### 구조 설명
- schema: zod object 타입으로, Form data를 미리 선언해두어 FormProvider 하위의 Input들에 대해 pattern과 rule을 사용한 유효성 검사와 메세지 전송이 간편하다.
- FormProvider: react-hook-form에서 제공하는 context API. children으로 들어온 input의 ref를 관리한다. useForm의 method를 props로 받는다.
- form: form 전체의 구조.
- InputSection : 디자인 시안 상에서 Input이 row 정렬 혹은 column 정렬인 경우가 있는데 각각에 사용하기 위한 일종의 wrapper. 정렬 방향을 props로 넘겨준다.
- Input: 폼 내부에 데이터를 입력하기 위한 input 컴포넌트. 
- Button: 폼에 데이터를 전송하기 위한 submit 타입의 버튼.
- ErrorMessage: 폼의 유효성 결과에 따라 출력할 메세지.

<br/>
##### 예시코드

```typescript
  'use client';

  import { Button, Typography } from '@/components';
  import { useForm, FormProvider } from 'react-hook-form';
  import { zodResolver } from '@hookform/resolvers/zod';
  import { Input, TextArea, InputSection } from '@/components';

  export default function Create() {
  const method = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SchemaType) => {
    ...
  };

  return (
    <div
      style={{ ... }}
    >
      <FormProvider {...method}>
        <form className={formWrapper} onSubmit={method.handleSubmit(onSubmit)}> 
          <InputSection label="날짜" direction="row">
            <Input {...method.register('date')} name={'date'} placeholder="날짜 입력칸" type="date"></Input>
          </InputSection>
          <InputSection label="시간" direction="row">
            <Input {...method.register('time')} name={'time'} placeholder="시간 입력칸"></Input>
          </InputSection>
          <Button type="submit" disabled={!method.formState.isDirty}>
            제출하기
          </Button>
          <ErrorMessage />
        </form>
      </FormProvider>
    </div>
  );
  }

```
<br/>

##### InputProps 설명
-	name: Input을 구분짓는 고유한 이름입니다. 한 폼안에는 오직 하나의 이름만이 존재해야 합니다.
-	type: Input의 type입니다. 리턴받을 정보가 무엇인지에 따라 전달해 사용하면 됩니다. 기본값은 text이며 현재 "textArea" | "date" | "email" | "title"을 사용할 수 있습니다.
- placeholder: Input창에 미리 보여줄 텍스트를 설정합니다. 
- {...register(`name`)}: Form에 Input을 등록하기 위한 속성입니다. Form에 등록할 Input 컴포넌트의 `name`을 register의 인자로 전달해야 합니다.

<br/>

##### FormProvider 사용하기
FormProvider는 useForm의 handleSubmit, register등 내부 메소드를 register된 하위 컴포넌트 ref에 전달합니다. method를 spread문법을 써서 props에 전달하거나, 사용하고자 하는 메소드만 props에 보내는 방법이 있습니다.
<br/>
##### zod schema 사용하기
```typescript
const schema = z.object({
	date: z.coerce.date(),
	title: z
		.string()
		.nonempty()
		.min(5, { message: '5자 이상이어야 합니다.' })
		.max(20, { message: '20자 이하여야 합니다.' }),
	info: z.string().min(5, { message: '5자 이상이어야 합니다.' }).max(20, { message: '20자 이하여야 합니다.' }),
	url: z.string().url({ message: '올바른 형식의 링크를 입력해주세요.' }),
});
```
zod는 zod 객체로 스키마를 만들어 resolver를 통해 Form에서의 유효성을 검사하는 수고를 덜어줍니다. 객체의 key로 input의 name을 사용하며 해당 key가 받아야할 data의 타입과 제약 사항을 value로 작성합니다. 

zod schema에서 작성한 제약들은 onSubmit에 처음 validation이 이루어지고, 그 이후는 onChange에서 변경사항에 대한 validation을 진행합니다. 

모든 validation을 통과한 data만이 제출 가능합니다.

<br/>

##### Register 사용하기
FormProvider에 input을 등록해야 zod의 유효성검사와 useForm 또는 useFormContext의 메소드를 사용할 수 있습니다. Input 컴포넌트에 spread로 register를 props로 넘겨야 합니다. 

##### InputSection 사용하기
InputSection은 props로 option으로 label과 direction을 받습니다. 
label은 해당 input의 데이터와 관련한 라벨을 표시합니다.
- direction = 'row'인 InputSection

<img width="726" alt="input-row" src="https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/51940808/1bab6c03-e63d-4e7d-9573-aa7053446c4a">

- direction = 'column'인 InputSection
<img width="741" alt="input-column" src="https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/51940808/f10cbb63-5978-4473-8187-091d89bece36">

##### Input 사용하기
- Input field의 상태에 따라 border가 변합니다. onFocus 상태엔 Primary를, invalid 상태엔 red500을 사용했습니다. 
- 입력된 데이터를 clear button으로 삭제할 수 있습니다. 데이터와 유효성도 함께 삭제됩니다.

##### 스키마를 활용한 폼의 return data 예제
<img width="478" alt="스크린샷 2023-06-10 오전 12 32 56" src="https://github.com/YAPP-Github/22nd-Web-Team-1-Web/assets/51940808/d1c7d143-2fd6-4479-91f5-cbfc112e312a">


### 이슈
- ControllerInput의 children으로 MUI, react-date-picker 등을 활용하는 작업이 남아있습니다.
- Dropdown 컴포넌트와의 연동 작업이 남아있습니다.

### 비고
현재 인풋 컴포넌트 작업은, react-Hook-Form 사용환경을 가정하고 설계한 이유로 해당 라이브러리와 schema에 대한 이해가 있을 때 사용하기 편리하실 거 같습니다..!
또, 어떤 범위까지가 공통 컴포넌트로 제작해야할지, 어느 단위에서 부터 추상화를 진행해야할지 고민했었는데 혹시 의문이 드는 부분이나 고쳐야 할 부분에 피드백 주시면 감사하겠습니다!

- [react-Hook-Form으로 상태관리하기](https://velog.io/@leitmotif/Hook-Form으로-상태-관리하기)
- [useFormContext 공식문서](https://react-hook-form.com/docs/useformcontext)