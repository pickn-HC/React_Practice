# CRUD 학습
CRUD란 Create, Read, Update, Delete의 줄임말입니다.\
React를 통해서 4가지 데이터 처리 기능에 대해서 학습을 진행해보겠습니다.


## 1. Read
컴포넌트들 간에 데이터들을 주고받고 읽어 화면에 표현하는 과정\
App과 Subject, ReadContent, TOC 컴포넌트 간에 필요한 데이터를 주고 받으며 화면에 내용을 출력

### useState와 Setter
사용해야하거나 업데이트 된 내용을 컴퓨터가 인식할 수 있게 만드는 함수\
기본적으로 ```const [propName, setPropName] = useState({초기값})``` 형태로 만들어 사용한다.\
처음 사용할 때는 propName에 useState에서 지정한 값을 설정해주고 \
값의 변동이 생겼을 때 setPropName({variable_name}) 형태로 업데이트를 알린다.


## 2. Create
새로운 데이터를 생성해 컴포넌트에 데이터를 전달하는 과정\
App과 CreateContent 컴포넌트 간에 새로 생성된 데이터에 대해 주고받으며\
TOC와 ReadContent의 값을 저장한 변수에 Setter를 사용하여 업데이트 됬다는 것을 알려준다.

### 전개구문 (...)
TOC의 값의 업데이트를 알리는 과정의 코드를 보면 아래와 같다.\
```setTOC([...items_TOC]);```
위의 코드처럼 하지않고 ```setTOC(items_TOC)```로 코드를 작성하면 렌더링이 되지 않는 문제가 발생한다.\
분명히 Setter를 사용해서 알렸는데 왜 렌더링이 되지 않는걸까?\
\
어떤 박스가 있을 때, 박스 내용물을 바꾸더라도 겉모습만 보면 알수가 없다.\
마찬가지로 TOC의 값을 바꿔주더라도 겉만 보면 알수가 없기 때문에 데이터를 담는 곳을 바꿔야 한다.\
그래서 배열에 전개구문 (...)을 적용하여 객체가 가리키는 곳을 바꿔주면 컴퓨터가 값이 바뀜을 인지하고 렌더링이 수행된다.


## 3. Update
기존의 값의 변동사항을 컴포넌트에 보내는 과정\
App과 UpdateContent 컴포넌트 간에 업데이트된 데이터에 대해 주고받으며\
TOC와 ReadContent의 값을 저장한 변수에 Setter를 사용하여 업데이트 됬다는 것을 알려준다.


## 4. Delete
기존의 값이 삭제하는 과정\
TOC와 ReadContent의 값을 저장한 변수에 Setter를 사용하여 삭제됬다는 것을 알려준다.

### Strict Mode
JavaScript에는 Strict Mode라고 하여 렌더링을 두번 진행하며 에러를 찾는 방식이 존재합니다.
Delete의 경우, 내용을 삭제한 후 창을 띄워 확인을 받기 때문에 Create/Read/Update 과정에서는 알지 못했던
두번 렌더링 되는 과정을 알 수 있게 되었습니다.
index.js 파일에서 App 컴포넌트를 감싸고 있는 Strict Mode를 삭제해주면 문제를 해결할 수 있습니다.