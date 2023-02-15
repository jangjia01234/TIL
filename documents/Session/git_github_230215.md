# Git & Github

### 김명성 멘토님 (FE)

<br>

## 목차

1. git의 개념
2. git과 github와의 차이
3. git init, add, status, commit, log, push 명령어 사용
4. github 레포지토리 생성하기

<br>

git이란?

- git: version control system(vcs)
- version: 어떤 프로그램을 수정, 개선하여 완성한 것, 이전과의 변화를 구분하는 표시
- 수정사항이 있을 때마다 새로운 파일을 생성하는 대신, 하나의 파일에서 변화 이력을 기록으로 남기는 방식이 효율적임

<br>

왜 코드도 버전 관리를 해야할까?

- 수정할 떄마다 파일을 새로 만들면 관리가 힘들다
- 언제든 이전 버전의 코드로 돌아갈 수 있다
- 누가 코드를 작성했는지 확인할 수 있다
- 한 프로젝트를 두고 여러 개발자들이 협업할 수 있다

<br>

github란?

- git을 사용한 프로젝트들의 저장소
- 개발자들의 소셜 네트워크

<br>

git vs. github

- git: 프로젝트의 버전 관리를 도와주는 시스템
- github: git을 이용해 버전관리를 한 프로젝트들을 관리하게 해주는 호스팅 서비스

<br>

기본적인 명령어

- git init
  - git 저장소 생성 / 버전 관리를 위한 정보 생성
  - init: 초기화
  - 폴더에서 git 명령어를 사용할 수 있게 최초 세팅하는 명령어
  - 버전 관리를 하고 싶은 디렉토리에서 해당 명령어 입력
  - 명령어: **git init**
- git status
  - git 상태 확인
  - 디렉토리에서 일어나고 있는 상태를 확인할 수 있는 명령어
  - 명령어: **git status**
- git add
  - 파일 수정 이력을 기록하기 위한 준비, 기록 이전의 중간 단계
  - 수정한 파일의 이력을 남길 준비를 하는 명령어
  - ex. 쇼핑몰에서 구매 전에 **장바구니**를 이용하는 것
  - 명령어:
    - 특정 파일만 이력을 남기고 싶을 때: <br> **git add [파일 이름]**
    - 변경된 파일 전체의 이력을 남기고 싶을 때: <br> **git add .**
- git commit
  - 파일을 수정한 이력을 기록하는 것
  - 명령어:
    - 한 줄로 커밋 메세지를 남기고 싶을 때: <br> **git commit -m "커밋 메세지"**
    - 여러 줄의 커밋 메세지를 남기고 싶을 때: <br> **git commit** 입력 -> 커밋 메세지 입력
- git log
  - 남겨진 commit 이력을 확인할 때 사용
  - 명령어: **git log**
- git push
  - 작성한 코드를 원격 저장소(github)에 업로드
  - 명령어: **git push origin [브랜치 이름]**

<br>

## (추가) Linux & git 명령어

- 특정 폴더로 이동: **cd 폴더명**
- 폴더 만들기: **mkdir 폴더명**
- 파일 만들기: **touch 파일명**
- 폴더 내 파일 확인: **ls**
- 폴더 내 숨겨진 파일까지 확인: **ls -a** 혹은 **ls -al**
- 파일 수정: **vi 파일명**
  -> esc 눌러서 insert 모드 나가기
- 저장하고 나가기: **:wq**
- git log에서 나가기: **q**
- (추가 공부) 현재 경로 확인: **pwd**
- 연결하기: **git remote**
- 현재 브랜치 확인: **git branch** -> 나가기: **q**

<br>

## (실습) git과 github 연결하기

```c
git remote add origin https://github.com/jangjia01234/test.git
```

-> **git remote --v** 해서 잘 되었는지 확인

```c
git push -u origin main (혹은 master)
```
