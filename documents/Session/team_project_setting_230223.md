# [Review] Team project setting

#### 김명성 멘토님 (FE)

<br>

---

## ESLint, Prettier, StyleLint를 왜 쓸까?

- 팀 프로젝트를 할 때 팀원이 동일한 형식으로 코드를 작성해야 하기 때문에 사용
- Lint: '규칙'이라는 뜻
- 팀 내에서 논의해서 EsLint, StyleLint 규칙을 얼마든지 수정할 수 있음
- ESLint: 코드 작성 규칙을 기재
- StyleLint: css 작성 순서 바꿔줌 (box model 형식에 맞춰서 자동으로 순서 적용)
- Prettier: 설정에 맞게 코드를 자동 수정해줌

<br>

## devDependencies 역할

- _-d_ 를 사용해서 devDependencies에 설치
- 개발자만 사용하는 라이브러리를 기재
- 실제로 배포되었을 때 사용자가 필요한 게 아님
- 배포 이후에 영향을 주지 않도록 별도로 분리
