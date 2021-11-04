# React와 JavaScript를 활용한 CRUD 학습
'생활코딩! 리액트 프로그래밍' 책을 참고하여 학습 진행
샘플 웹앱을 생성하는 방법부터 CRUD 내용까지 상세하게 서술 (Visual Studio Code를 활용)

## 1. 샘플 앱 생성
`ㄱ. npm install -g create-react-app`
   : 학습을 진행할 폴더를 선택한 후, 해당 폴더 및 하위 모든 폴더(-g 속성)에 'create-react-app'을 설치
     
`ㄴ. npx create-react-app {app_name}`
   : 선택한 폴더에 원하는 이름으로 (app_name 위치) 샘플 웹앱을 생성
     단, 폴더명은 대문자가 들어가서는 안된다. 필요하다면 나중에 수정

`ㄷ. npm run start`
   : VS 상에서 'ctrl + `'를 통해 터미널 창을 열고 해당 명령어를 입력하면 아래 그림과 같은
    샘플 웹앱을 실행시킬 수 있다.
    * 1 이미지 삽입 *


### 1-1. 실행된 화면에 대한 간단한 설명
`ㄱ. index.html을 통해 만들어진 화면`
   : 실행된 화면은 public 폴더의 index.html이 실행되며 만들어진 화면입니다.

     31번째 줄에 보이는 <div id="root"></div>를 주의깊게 봐야합니다.
     src 폴더의 앱의 진입점인 index.js 파일을 보면 'document.getElementById('root')'를 통해 root에 
     4번째 줄에서 받아온 App.js를 9번째 줄에 적힌 <App />을 통해 렌더링하게 됩니다.

     실행된 화면에서 'F12' 키를 통해 개발자 도구 화면을 띄워서 화면 임의의 위치에 우클릭 한 후
     검사 버튼을 눌러 보면 아래와 같은 화면을 볼 수 있습니다.
     * 2 이미지 삽입 *

     개발자 도구에 보이는 코드와 App.js의 코드가 동일하다는 것을 알 수 있습니다.

     방금 본 것처럼 웹, 앱은 하나의 파일에 모든 내용을 넣는 것이 아니라 구조와 기능에 따라
     여러 부분으로 나뉘어서 실행됩니다.

     저희는 앞으로 src 내부에 여러 파일들을 생성하고 연결하여 웹과 앱을 만들 것입니다.


## 2. 기본 용어 설명
리액트는 클래스형과 함수형으로 크게 구분할 수 있습니다.
그 차이에 따라 같은 내용이라도 코딩하는 방식에 차이가 있기에 저희는
함수형을 사용할 것을 미리 언급하고 시작하겠습니다.

* 차이에 대해서 확인하고 싶으신 분은 https://codechasseur.tistory.com/98 를 참고하시면 됩니다.

`ㄱ. 컴포넌트`
   : 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈
     레고 블록처럼 만들어진 컴포넌트들을 조합하여 화면을 구성할 수 있습니다.
     1-1에서의 App.js도 하나의 컴포넌트입니다.

     앞으로 코딩을 진행하면서 어떻게 컴포넌트를 나눠야 재사용이 가능할지 고민해야할 것입니다.

`ㄴ. Props`
   : Property의 줄임말로 다른 언어에서 흔히 사용되는 파라미터
     상위에서 하위로 연결할 때 필요한 정보를 보내는 형태를 보입니다.
     아래에 보이는 사진에 노란색 줄 그은 부분이 App.js와 UpdateContent간에 주고받는
     파라미터들에 대한 내용입니다.
     * 3 이미지 삽입 * 

     HTML 문법의 형태를 보이기 때문에 '< >' 내부에 컴포넌트 명과 필요한 파라미터들을 작성합니다.

     * 하위 컴포넌트에서 파라미터를 받을 땐 두가지 방식이 있습니다.
       - function_name(prop_name) : prop_name 내부에 전달받는 파라미터들이 전부 들어가 있는 형태
       - function_name({prop_name}) : 전달받는 파라미터 각각을 적어 전달받는 형태

`ㄷ. State`
   : 컴포넌트 내부의 값들을 웹과 앱이 인식할 수 있게 변경시키는 것
     값들이 변경된다는 것을 유저는 알지만 컴퓨터는 알지 못하기 때문에 
     State 함수를 사용해서 값들을 변경시켜줘야 합니다.

     함수형에서는 Hook이라는 State를 관리하는 함수들을 사용합니다.
     Hook에 대해서는 차차 진행하며 하나씩 배워가겠습니다.













