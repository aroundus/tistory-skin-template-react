/// <reference types="react" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vitest" />

declare namespace JSX {
  interface IntrinsicElements {
    s_t3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_sidebar: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_sidebar_element: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rctrp_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rct_notice: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rct_notice_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_article_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_index_article_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_permalink_article_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_article_rep_thumbnail: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_tag_label: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp_container: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp2_container: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp2_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp_input_form: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp_guest: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp_member: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_notice_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_notice_rep_thumbnail: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_article_protected: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_guest: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_guest_container: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_guest_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_guest_reply_container: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_guest_reply_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_guest_input_form: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_guest_form: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_guest_member: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_tag: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_tag_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_paging: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_paging_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_ad_div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_article_prev: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_article_prev_thumbnail: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_article_next: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_article_next_thumbnail: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_rp_count: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

    s_cover_group: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_cover_rep: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_cover: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_cover_item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_cover_item_thumbnail: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_cover_item_article_info: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_cover_item_not_article_info: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    s_cover_url: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

    tt_html_comment: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

declare namespace React {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    'tt-value'?: string;
    'tt-onclick'?: string;
    'tt-onkeypress'?: string;
    'tt-onkeydown'?: string;
    'tt-onload'?: string;
    'tt-onerror'?: string;
    'tt-onlyattr'?: string;

    name?: string;
  }
}

interface AppInfo {
  domain: string;
  loginUrl: string;
  logoutUrl: string;
  topUrl: string;
}

interface Blog {
  id: number;
  name: string;
  title: string;
  isDormancy: boolean;
  nickName: string;
  status: string;
  profileStatus: string;
}

interface InitData {
  user: {
    id: number;
    loginId: string;
    name: string;
  };
}

interface User {
  name: string;
  homepage: string;
  id: number;
  profileImage: string;
}

interface Subscription {
  status: string;
  isConnected: boolean;
  isPending: boolean;
  isWait: boolean;
  isProcessing: boolean;
  isNone: boolean;
}

interface Config {
  BLOG: Blog;
  COMMENT_LOGIN_CONFIRM_MESSAGE: string;
  DEFAULT_URL: string;
  HAS_BLOG: boolean;
  IS_LOGIN: boolean;
  IS_SCRAPABLE: boolean;
  IS_SUPPORT: boolean;
  JOIN_URL: string;
  LOGIN_URL: string;
  NEED_COMMENT_LOGIN: boolean;
  NEXT_PAGE: string;
  PHASE: string;
  PREV_PAGE: string;
  PREVIEW: boolean;
  ROLE_GROUP: 'visitor';
  ROLE: 'guest' | 'user' | 'owner';
  SUBSCRIPTION: Subscription;
  TOP_SSL_URL: string;
  TOP_URL: string;
  USER: User;
}

declare interface Window {
  appInfo?: AppInfo;
  initData?: InitData;
  T?: {
    config: Config;
  };
}
