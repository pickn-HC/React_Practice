# React와 Axios를 활용한 API 통신 학습
외부에서 데이터를 받아와 화면에 띄울수도 있습니다.\
JSONPlaceholder라는 가상데이터를 활용하여 학습을 진행하겠습니다.

## 1. Axios를 활용해서 API 받아오기
ㄱ. 'npm install axios' 명령어를 사용하여 axios 설치\
ㄴ. get-then 함수를 이용하여 API를 받아오고 활용\
&nbsp&nbsp&nbsp&nbsp axios.get("{URL}").then(( {Prop_name} ) => { {Event} })\
&nbsp&nbsp&nbsp&nbsp => Prop_name에 대부분 API를 통해 받아온 정보(response)들을 기입하고 response를 기반으로 Event를 진행

## 2. useEffect
해당 컴포넌트 내에서 렌더링이 발생하는 상황에서 매번 동작하는 함수\

```react
useEffect(() => {
    { Event }
}, { Change })
```

### 2.1 의존성 추가
useState와 Setter를 통해서 값이 업데이트되어 렌더링이 발생하면 useEffect 내부의 Event가 발생하게 됩니다.\
Change라고 적힌 부분을 어떻게 작성하냐에 따라 원하는 내용이 업데이트 될 때에만 useEffect가 동작하게 할 수 있습니다.\
이렇게하는 방식을 '의존성 추가'라고 합니다.\
\
ㄱ. 비워두기\
&nbsp&nbsp&nbsp&nbsp 비워두면 모든 값의 업데이트에 따라 useEffect가 동작한다.
ㄴ. 빈배열 작성[]\
&nbsp&nbsp&nbsp&nbsp 빈배열을 작성하면 어떤 업데이트가 일어나더라도 useEffect는 영향을 받지 않는다.
ㄷ. [variable_names]\
&nbsp&nbsp&nbsp&nbsp 배열 내부에 적어둔 내용에 업데이트가 일어나 렌더링이 발생하면 useEffect도 동작한다.
