# Git & Github

### 김명성 멘토님 (FE)

<br><br>

# 세션 1: Git & Github 입문

## 목차

1. git의 개념
2. git과 github와의 차이
3. git init, add, status, commit, log, push 명령어 사용
4. github 레포지토리 생성하기

<br>

## 왜 코드도 버전 관리를 해야할까?

- 수정할 떄마다 파일을 새로 만들면 관리가 힘들다
- 언제든 이전 버전의 코드로 돌아갈 수 있다
- 누가 코드를 작성했는지 확인할 수 있다
- 한 프로젝트를 두고 여러 개발자들이 협업할 수 있다

<br>

## git vs. github

- git: 프로젝트의 버전 관리를 도와주는 시스템
- github: git을 이용해 버전관리를 한 프로젝트들을 관리하게 해주는 호스팅 서비스

### git이란?

- git: version control system(vcs)
- version: 어떤 프로그램을 수정, 개선하여 완성한 것, 이전과의 변화를 구분하는 표시
- 수정사항이 있을 때마다 새로운 파일을 생성하는 대신, 하나의 파일에서 변화 이력을 기록으로 남기는 방식이 효율적임

### github란?

- git을 사용한 프로젝트들의 저장소
- 개발자들의 소셜 네트워크

<br>

<br>

## 기본적인 명령어

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
  <br>
  -> **i** 를 입력하여 수정 모드 시작
  <br>
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

-> 깃허브 레포지토리에서 잘 push 되었는지 확인

<br><br><br>

# 세션 2: Webstagram Github Kickoff

## 목차

1. git clone 명령어로 기존 프로젝트에 이어서 작업하기
2. git branch, checkout, pull, merge 명령어로 기능별 독립된 작업 진행
3. PR 메시지와 라벨 등을 통해 깃허브에서 다른 사용자와 의사소통하기

<br>

## 명령어

- git clone
  - 기존 레포지토리를 복제해서 내 로컬(컴퓨터)로 가져오기
  - 명령어: **git clone [레포지토리 주소]**
- git branch
  - 독립적으로 개발 가능한 공간을 생성하는 명령어
  - 명령어: **git branch [브랜치 이름]**
- git checkout
  - Linux의 cd와 유사한 명령어로, 다른 브랜치로 이동할 떄 사용
  - ⚠️ 브랜치 생성 후 반드시 새로운 브랜치로 이동 후 작업해야 함
  - 명령어: **git checkout [브랜치 이름]**
- git pull
  - 깃허브에 있는 특정 브랜치의 코드를 로컬로 가져올 떄 사용
  - clone 과 pull 은 가져오는 대상이 다르다
    - clone 은 레포지토리 전체의 코드를 가져옴, 내 컴퓨터에 해당 프로젝트의 코드가 없어서 전체를 가져올 때 사용
    - pull 은 특정 브랜치에 있는 코드를 가져옴, 내 컴퓨터에 해당 프로젝트는 있지만, 그 중에서 특정 코드만 가져올 때 사용
  - 명령어: **git pull origin [브랜치 이름]**
- git merge
  - 로컬에서 현재 브랜치의 코드와 특정 브랜치의 코드를 합칠 때 사용
  - _특정 브랜치 코드 -> 현재 브랜치 코드_ 방향으로 병함됨
  - 명령어: **git merge [브랜치 이름]**

<br>

## Westagram 실습

<br>

- westagram-frontend 레포지토리 메인 우상단의 초록색 code 버튼 클릭 -> HTTPS 하단의 주소 복사

  ```c
  git clone [복사한 주소]
  ```

- 터미널에서 현재 브랜치 확인 (나갈 때는 **q** 입력)
  ```c
  git branch
  ```
- 새로운 브랜치 만들기
  ```c
  git branch [새 브랜치 이름]
  ```
- 새로 생성한 브랜치로 이동
  ```c
  git checkout [이동하고자 하는 브랜치 이름]
  ```
- 파일 수정 후 아래 순서대로 진행
  ```c
  git add .
  git status
  git commit -m "커밋 메세지"
  git log
  git push origin [현재 브랜치 이름]
  ```
- [참고] 커밋 컨벤션 예시

  - 새로 추가한 내용이 있을 때:
    ```c
    ADD : [추가한 사항]
    ```
  - 기존 파일을 수정했을 때:
    ```c
    MODIFY : [수정한 사항]
    ```

<br>

- pull request(PR) 보내기

  - github 에서 **create & pull request** 버튼 클릭
  - pull request, 줄여서 PR 작성
  - 변경된 코드를 main branch에 병합하기 전에 확인하는 과정
  - 코드 리뷰 및 서비스의 완성도에 영향을 주므로 PR을 잘 작성하는 것이 중요함
  - PR 템플릿에 맞춰 pull request 문서 작성
  - 우측 Label에서 상황에 맞는 라벨 선택
  - 위 과정 완료 후 **Create pull request** 클릭

<br>

- git pull 명령어
  - mater 브랜치에 변경사항이 있을 때 최신 버전의 코드를 받을 수 있는 명령어
  1. master 브랜치로 전환
     ```c
         git checkout master
     ```
  2. **git pull** 로 최신 버전 적용
     ```c
         git pull origin master
     ```
  3. 내 branch로 돌아오기
     ```c
        git checkout feature/43-jiajang
     ```
  4. **git merge**로 master 브랜치와 내 브랜치 합치기
     ```c
        git merge [가져오고자 하는 브랜치명]
        git merge master
     ```
     <br>

## 과제 피드백

<br>

### 복습

- 기존 레포를 clone 해오면 이미 git init이 되어있기 때문에 따로 할 필요가 없다 -> 그래서 내가 여태까지 git init을 안했구나!
- git push origin [브랜치 이름]
  -> origin [브랜치 이름] 은 긴 [브랜치 주소] 를 매번 작성할 필요 없이 가져올 수 있게 함
