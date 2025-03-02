/**
 * 티스토리 전역 객체
 *
 * @description 개발 환경에서 사용합니다.
 */

window.appInfo = {
  domain: 'tistory.com',
  topUrl: 'https://www.tistory.com',
  loginUrl: 'https://www.tistory.com/auth/login',
  logoutUrl: 'https://www.tistory.com/auth/logout',
};

window.initData = {
  user: {
    id: 4946148,
    loginId: '사용자 아이디 (이메일)',
    name: '사용자 이름',
  },
};

window.T = {
  m: {},
  admin: {},
  blog: {},
  ui: {},
  util: {
    Cookie: {},
  },
  config: {
    TOP_SSL_URL: 'https://www.tistory.com',
    PREVIEW: false,
    ROLE: 'user',
    PREV_PAGE: '',
    NEXT_PAGE: '',
    BLOG: {
      id: 7221853,
      name: '블로그 주소 이름', // 예시: https://tistory-with-react.tistory.com 주소인 경우 tistory-with-react
      title: '블로그 제목',
      isDormancy: false,
      nickName: '블로그 소유자 이름',
      status: 'open',
      profileStatus: 'normal',
    },
    NEED_COMMENT_LOGIN: true,
    COMMENT_LOGIN_CONFIRM_MESSAGE:
      '이 블로그는 로그인한 사용자에게만 댓글 작성을 허용했습니다. 지금 로그인하시겠습니까?',
    LOGIN_URL: 'https://www.tistory.com/auth/login/?redirectUrl=https://jeongmintax.tistory.com/10',
    DEFAULT_URL: 'https://jeongmintax.tistory.com',
    USER: {
      name: '블로그 소유자 이름',
      homepage: '블로그 주소',
      id: 4946148,
      profileImage: '블로그 대표 이미지 주소',
    },
    SUBSCRIPTION: {
      status: 'none',
      isConnected: false,
      isPending: false,
      isWait: false,
      isProcessing: false,
      isNone: true,
    },
    IS_LOGIN: true,
    HAS_BLOG: true,
    IS_SUPPORT: false,
    IS_SCRAPABLE: false,
    TOP_URL: 'http://www.tistory.com',
    JOIN_URL: 'https://www.tistory.com/member/join',
    PHASE: 'prod',
    ROLE_GROUP: 'visitor',
  },
  entryInfo: {
    entryId: 10,
    isAuthor: false,
    categoryId: 1246594,
    categoryLabel: '카테고리 이름',
  },
};
