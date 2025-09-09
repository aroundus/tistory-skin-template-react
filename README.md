<h1 align="center">
  <img src="./title.png" width="640" />
</h1>

[![hits](https://myhits.vercel.app/api/hit/https%3A%2F%2Fgithub.com%2Faroundus%2Ftistory-skin-template-react?color=green&label=hits&size=small)](https://myhits.vercel.app)

## 목차

1. [소개](#소개)
2. [사용 기술](#사용-기술)
3. [준비](#준비)
4. [설치 및 실행](#설치-및-실행)
5. [빌드 및 배포](#빌드-및-배포)
6. [데이터 동기화](#데이터-동기화)

## 소개

[Tistory with React](https://aroundus.github.io/tistory-with-react) 내용을 확인해 주세요.

## 사용 기술

### 프론트엔드

- 프로그래밍 언어: React TypeScript
- 번들러: Vite
- 스타일: Tailwind CSS
- 라이브러리: React Router

### 백엔드

- 티스토리

## 준비

1. (필수) 티스토리 블로그를 생성합니다.
2. (필수) [.env.production](./.env.production) 파일에 다음 환경 변수를 설정합니다.
   ```properties
     BLOG_URL=
     TSSESSION=
   ```
3. [base.js](./scripts/base.js) 파일에 블로그 정보를 입력합니다.
   > 운영 환경의 블로그 정보를 개발 환경에 동일하게 노출하려는 경우 사용합니다. 기본값을 그대로 사용해도 됩니다.
4. 관리자 페이지 - 관리 - 블로그 - 아이콘 및 파비콘 파일을 등록합니다.
5. 관리자 페이지 - 모바일 - 티스토리 모바일 웹 자동 연결 - ‘사용하지 않습니다.’로 설정합니다.
   - 다만, ‘사용하지 않습니다.’로 설정해도 사용자가 모바일 주소(\*.tistory.com/m)로 직접 접속하면 티스토리 전용 모바일 웹이 열립니다. 따라서 [redirect.js](./scripts/redirect.js) 주석의 안내를 따르는 방식으로 문제를 해결합니다.

## 설치 및 실행

### 설치

```shell
nvm use
nvm install // 해당하는 Node.js 버전이 없는 경우
npm install
```

### 실행

다음 명령어를 실행하고, [localhost:5173](http://localhost:5173) 주소로 접속하여 페이지를 확인합니다.

```shell
npm run dev
```

로컬 환경에서 운영 환경과 동일한 패스로 페이지에 접근할 수 있도록 `react-router-dom` 라이브러리로 라우터를 구성하였습니다.

| 페이지   | 패스                                        |
| -------- | ------------------------------------------- |
| 홈       | `/`                                         |
| 글       | `/{pageNo}`                                 |
| 카테고리 | `/category`<br />`/category/{categoryName}` |
| 검색     | `/search/{keyword}`                         |
| 공지사항 | `TBD`                                       |
| 태그     | `TBD`                                       |
| 방명록   | `TBD`                                       |

## 빌드 및 배포

### 빌드

다음 명령어를 실행하여 프로젝트를 빌드합니다.

```shell
npm run build
```

### 배포

다음 명령어를 실행하여 배포합니다.

```shell
npm run deploy
```

배포 스크립트를 실행하면 현재 **사용 중인 스킨 파일을 교체**합니다. 따라서 기존 스킨은 백업해 주시고 배포 후에는 페이지에 접속해서 정상적으로 동작하는지 확인해 주세요.

### 데이터 동기화

1. 블로그 주소에 접속합니다.
2. 개발자 도구를 열고 `#tistory` 요소를 검색합니다.
3. `#tistory` 요소 - 우측 클릭 - Copy - Copy element - HTML 요소를 복사합니다.
4. [index.html](./index.html) 파일에서 다음 영역을 복사한 내용으로 교체합니다.
   ```html
   <div
     id="tistory"
     style="display: none;"
   ></div>
   ```

로컬 환경에서 운영 환경의 데이터를 기반으로 레이아웃을 구성할 수 있습니다. 다만, 데이터를 실시간으로 반영하지 않으므로 변경 사항이 생길 경우 다시 동기화 작업을 수행해야 합니다.
