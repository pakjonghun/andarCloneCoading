## 프로잭트 개요

안다르 홈페이지 클론코딩 https://andar.co.kr

## 프로젝트 상세

안다르 홈페이지 클론코딩 프론트 앤드 깃 저장소 입니다.

### 팀원

- 김원영
- 박정훈
- 이민재
- 함준범
- 이성재

## 기간 : 2021.10.05~2021.10.22(3주간)

- 첫주(프론트엔드 작성)
- 두째주(백엔드 작성)
- 셋째주(리팩토링)

## 박정훈 담당분야

- 회원가입
- 로그인
- 카트 페이지

## 문제해결

- 로그인페이지 (확장, 재사용이 힘듬)

  - 분량이 적어서 컴포넌트 분리 하지 않음.(한개의 파일로 모두 작성)
  - 추후 확장을 할 경우 별도로 작업을 할 필요가 있음.
  - 하지만 실제로 확장을 하지 않으므로 일단 그대로 유지.
  - 오히려 사용하지 않는 버튼 등 모두 제거(소셜로그인 및 기타 이벤트 버튼 삭제)

- 회원가입 페이지(재사용은 쉬우나 확장이 힘듬)

  - 컴포넌트를 세부적으로 모두 나누어서 재사용이 편해졌지만
  - 프롭스를 전달하는 횟수가 많아져서 오히려 사용하기가 불편하짐.

- 카트 페이지(재사용과 확장 모두 비교적 쉬움)
  - 함수와 화면을 파일별로 분리.
  - context api 를 사용하여 화면에서 필요한 함수를 필요한 부분에서 쉽게 불러서 사용가능
  - 불필요한 랜더링이 발생하는 부분은 react.momo 기능 활용 하여 최적화

## 아쉬운 점

- 백엔드와 key값이 통일되어 있지 않은점(api 문서를 먼저 만들 필요가 있음.)
- 폴더구조 및 파일이 너무 많은점(너무 많이 나누는 것이 그렇게 좋다는 생각이 들지는 않았음. 더 단순한 방법이 있지 않을까?)
- constants 의 네이밍에 싶패한점 -> gray lightgray lightergray .... 차라리 숫자로 진하기를 나타냈으면 더 좋았을 것 같음.
