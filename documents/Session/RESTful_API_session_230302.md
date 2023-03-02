# [Session] RESTful API

### 김경래 멘토님

<br>

> westudy - [RESTful API](https://study.wecode.co.kr/session/content/323) 참고

<br>

## 목차

- REST API
- RESTful API vs SOAP
- RESTful API 설계 원칙

<br>

---

## REST API

- REST API란?
  - REST하게 API를 서술하는 방법
  - 상태를 잘 나타내는 API를 알잘딱깔센하게 표현하는 법
  - REST(Representational State Transfer): 상태(State)를 전달(Transfer)하는 것을 나타내는(Representation) 방법
  - 자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 것
- 요청의 예시
  - Client가 user(What) 정보를 가져오고자(How) 요청하는 것
  - Client가 1번 음료(What)의 정보를 가져오고자(How) 요청하는 것
  - Client가 2번 음료(What)를 주문하는 정보를 서버에 주며(How) 주문을 요청하는 것
- 장단점
  - Self descriptivness: 스스로 묘사할 수 있다 (자명하다)
    - RESTful API는 그 자체만으로도 API의 목적이 쉽게 이해가 되기 떄문
  - 표준 규약이 없어 안티 패턴(REST하지 못하게 비효율적으로 작성되는 패턴)으로 작성되는 경우가 흔함 (ex. /products/all)

<br>

---

## RESTful API 설계 원칙

- Uniform Interface

  - 구성요소(클라이언트와 서버 등) 사이의 인터페이스는 일관되어야(uniform) 한다
    - 플랫폼과 무관하며, 특정 언어나 기술에 종속받지 않는 특징

- URI는 동사를 제외한, 명사로 구성

  - [GET] /find/users/1 ❌ -> [GET] /users/1 ⭕️

- Resource에 대한 행위를 HTTP method(GET, POST, PUT, DELETE)만으로 표현
- Resource 사이에 연관관계가 있을 경우 '/'사용
- URI 마지막 문자로 / 를 포함하지 않음, 파일의 확장자는 headers에 포함
- 응답 response의 status code에 맞는 기본적인 규칙을 따름
  <br>

---

## Summary

- REST API는 상태(State)를 전달(Transfer)하는 것을 나타내는(Representation) 방법
  - 자원을 이름(표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 것
- REST는 API를 설계할 URI 자원으로 한정된, 통일되고 일관적인 인터페이스(uniform interface)를 구현함
  - URI는 동사를 제외한, 명사로 구성
  - Resource에 대한 행위를 HTTP method (GET, POST, PUT, DELETE)만으로 표현
  - Resource 사이에 연관 관계 및 계층 관계가 있는 경우 slash('/') 사용
  - 응답 Response 의 status code의 기본적인 규칙을 따름
- REST하게 설계된 API는 client-server 분리와 함께 발달함
  <br> -> 다른 부분이 client-server 개별 부분의 발전에 영향을 주지 않는다는 장점 발생
- REST의 특징: HTTP 통신 상태에 대한 정보를 따로 저장하거나 관리 하지 않음 (state + less)
  - 이러한 특징이 cache를 발달시킴
  - 특징요청에 관한 응답을 따로 저장함으로써 추후에 재사용이 가능해짐

<br>

### ETC

-
