# Westagram - Refactoring Guideline

### 한신웅 멘토님 (FE)

<br>

> [Refactoring Checklist](https://study.wecode.co.kr/session/content/193) 참고

<br>

## Refactoring Basic

1.  리팩토링
    - 코드의 가독성과 효율성, 확장성을 좋게 만드는 작업
2.  Guideline

    - 테스트가 끝난 console.log 삭제
      - 가장 기본적인 컨벤션
      - 지우지 않을 경우 다른 콘솔로그를 찍을 때 헷갈릴 수 있음
      - 협업을 위해서도 테스트 후 바로 삭제할 것
    - id 및 class명, 변수명 설정
      - 변수명만으로 쉽게 알아볼 수 있도록 작명할 것
      - 변수명에는 숫자 사용 지양
    - 규칙성 있는 들여 쓰기
      - ESLint, Prettier로 해결 가능
    - Semantic Tag 사용
      - div, span을 남발하기보다는 h1, p, article, ul, li 등 다양한 태그 사용
      - (추가 팁) a 태그는 li를 감싸지 말고 li 안에 작성
    - img 태그 사용시 alt 속성 반드시 부여
    - self closing tag 확인 (ex. br, hr, img, link, input)
    - css 속성 순서 주의
      - 레이아웃에 영향을 많이 주는 순서대로, 인접 속성끼리 묶어서 작성
      - 권장 순서:
        - Layout Properties (position, float, clear, display)
        - Box Model Properties (width, height, margin, padding)
        - Visual Properties (color, background, border, box-shadow)
        - Typography Properties (font-size, font-family, text-align, text-transform)
        - Misc Properties (cursor, overflow, z-index)
    - css 선택자들 사이 띄우기
    - 불필요한 style 속성 작성 지양

      - ex. display:block, width: 100% 등 - 레이아웃은 bottom-up 방식으로 구성

    - 레이아웃은 bottom-up 방식으로 구성

      - ❌: 부모요소의 높이를 미리 정해두고 자식요소의 크기를 정하는 top-down 방식

              ```css
              feedList {
                height: 100vh;
              }

              .feed {
                height: 300px;
              }
              ```

      - ⭕️: 자식요소의 높이에 따라 부모요소의 높이가 유동적으로 결정되는 bottom-up 방식

              ```css
              .feedList {
                  padding-top:20px;
                  }

              .feed{
              height:300px;
              }
              ```
