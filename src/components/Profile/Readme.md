# Profile

### 프로필 공통 컴포넌트 아이템
>
> Props로 전달받은 닉네임의 첫글자와 uid로 기반으로 기본 프로필 아바타를 만들어 렌더링한다.
>
> 디자인 시스템에 따른 기본 style이 적용되어 있으며 옵션으로 컬러, 사이즈 변경이 가능하다.
>
> 닉네임을 지정하지 않을 경우, 기본 닉네임인 "User"을 사용해 렌더링한다.
>
> 컬러 옵션을 지정하지 않을 경우, 컴포넌트에 전달된 user의 id값인 'uid'를 통해 컬러를 랜덤 지정한다.
>
> 사이즈 옵션을 지정하지 않을 경우, 디자인 가이드에 따라 width 40px, height 40px의 small 스타일링이 적용된다.



###  예제
>
> ```js
> <!-- uid를 사용할 경우 -->
> <Profile uid={0} nickname={'User'}></Profile> 
> <Profile uid={1} nickname={'Admin'}></Profile>
> <Profile uid={2} nickname={'user'}></Profile>
> 
> <!-- color props 사용할 경우 -->
> <Profile uid={0} nickname={'User'} color={'skyblue'}></Profile>
> <Profile uid={1} nickname={'Admin'} color={'yellow'}></Profile> 
>
> <!-- size props를 사용할 경우 -->
> <Profile uid={0} nickname={'User'} size={'small'}></Profile>
> <Profile uid={1} nickname={'Admin'} size={'medium'}></Profile>
>  
> ```



### **PROPS**

| name           | type      | default  | required | 설명                                                         |
| :------------- | :-------- | :------- | :------- | :----------------------------------------------------------- |
| `uid`         | *number*  | '' | -        | `uid`를 서버로 부터 전달받아, 해당 id를 기반으로 디자인 컬러시스템에서 무작위로 컬러 테마를 지정합니다. |
| `nickname` | *string* | "User"     | -        | 'g-default-btn' class를 사용할지 여부<br />처음부터 다른  class를 사용할 경우 *false*로 설정한다. |
| `color`      | *"purple" \| "orange" \| "pink" \| "skyblue" \| "yellow"*  | "purple"       | -        | 버튼 내부에 들어갈 text를 작성한다.<br />GGbtn 태그 사이에 slot을 사용할 경우 작성하지 않아도된다. |
| `size`     | *"small" \| "medium"* | "small"    |          | 글자가 넘칠 경우 text를 자동으로 흐르게할지 하는 옵션.<br />*false*로 설정한 경우 focus를 받을때에만 흐른다. |

```js
ProfileProps = {
    uid: {
        type: number,
        default: ,
    }
    nickname: {
        type: string,
        default: "User",
    }
    color: {
        type: "purple" | "orange" | "pink" | "skyblue" | "yellow",
        default: "purple"
    },
    size: {
        type: "small" | "medium",
        default: "small"
    }
}
```



### **Events**

| name    | type    | value       | 설명                                                         |
| :------ | :------ | ----------- | :----------------------------------------------------------- |
|   |  |   |   |



### **Directive**

| name      | type      | value | 설명                                             |
| :-------- | :-------- | ----- | :----------------------------------------------- |
|   |   |    |   |