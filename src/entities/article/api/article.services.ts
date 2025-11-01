import * as blogService from '@/entities/blog/api';
import { dayjs, truncateWithPeriod } from '@/shared/lib';

/**
 * 홈 커버 글
 *
 * @description 홈 화면에 홈 커버 글을 노출할 때 사용합니다.
 * @see https://tistory.github.io/document-tistory-skin/common/cover.html
 */
export interface CoverArticle {
  /**
   * 글 아이디
   */
  articleId: number;

  /**
   * 카테고리 이름
   */
  category: string;

  /**
   * 카테고리 경로
   */
  categoryPath: string;

  /**
   * 댓글 수
   */
  commentCount: number;

  /**
   * 발행 일자
   * @example '2024.08.25'
   */
  date: string;

  /**
   * 발행 일시
   * @example '2024.08.25 00:00'
   */
  dateTime: string;

  /**
   * 공감 아이콘 활성화 여부
   * @description 공감 아이콘의 클릭 여부를 확인합니다.
   */
  isLikeActive: boolean;

  /**
   * 공감 수
   */
  likeCount: number | null;

  /**
   * 주소 경로
   * @example '/1'
   */
  path: string;

  /**
   * 글 요약 내용
   */
  summary: string;

  /**
   * 썸네일 주소
   */
  thumbnailUrl: string;

  /**
   * 글 제목
   */
  title: string;
}

const INITIAL_COVER_ARTICLE: CoverArticle = {
  articleId: 0,
  category: '',
  categoryPath: '',
  commentCount: 0,
  date: '',
  dateTime: '',
  isLikeActive: false,
  likeCount: null,
  path: '',
  summary: '',
  thumbnailUrl: '',
  title: '',
};

export function getCoverArticles(name: string) {
  const blog = blogService.getBlog();
  const elements = document.querySelectorAll(`[data-cover="${name}"] .cover-item`);

  return Array.from(elements).map((element) => {
    try {
      const coverArticle = JSON.parse(element.innerHTML) as CoverArticle;

      return {
        ...coverArticle,
        articleId: Number(coverArticle.path.replace(/[\D]/g, '')),
        category: coverArticle.category === '카테고리 없음' ? blog.title : `#${coverArticle.category}`,
        isLikeActive: false,
        likeCount: null,
        summary: truncateWithPeriod(coverArticle.summary, 150),
      };
    } catch (error) {
      console.error(error);

      return INITIAL_COVER_ARTICLE;
    }
  });
}

/**
 * 글
 */
export interface Article extends CoverArticle {
  /**
   * 작성자
   */
  author: string;

  /**
   * 글 본문
   */
  content: string;
}

const INITIAL_ARTICLE: Article = {
  ...INITIAL_COVER_ARTICLE,
  author: '',
  content: '',
};

export function getArticles() {
  const blog = blogService.getBlog();
  const elements = document.getElementById('tistory')!.querySelectorAll('#article .article');

  return Array.from(elements).map((element) => {
    try {
      const articleElement = element.querySelector('[data-article="article"]')!;
      const article = JSON.parse(articleElement.innerHTML) as Article;
      const contentElement = element.querySelector('[data-article="content"] .contents_style')!;
      const commentCountElement = element.querySelector('[data-article="commentCount"]')!;

      // 테이블 속성 삭제
      contentElement.querySelectorAll('table').forEach((element) => {
        element.removeAttribute('border');
        element.removeAttribute('data-ke-align');
        element.removeAttribute('style');
      });

      // 티스토리 data-ke-size 속성 삭제
      contentElement.querySelectorAll('[data-ke-size]').forEach((element) => {
        element.removeAttribute('data-ke-size');
      });

      // <h*> 요소에 id 설정
      const headings = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6') as NodeListOf<HTMLHeadingElement>;

      headings.forEach((heading) => {
        heading.id = heading.textContent!.trim().toLowerCase().replace(/\s+/g, '-');
      });

      const content = contentElement.innerHTML;
      const summary = contentElement.querySelector('p')?.innerText || '';
      const commentCount = Number(commentCountElement.textContent);

      return {
        ...article,
        articleId: Number(article.path.replace(/[\D]/g, '')),
        category: article.category === '카테고리 없음' ? blog.title : `#${article.category}`,
        commentCount,
        content,
        date: dayjs.formatDate(article.date),
        dateTime: dayjs.formatDateTime(article.dateTime),
        isLikeActive: false,
        likeCount: null,
        summary: truncateWithPeriod(summary.trim() || article.summary, 150),
      };
    } catch (error) {
      console.error(error);

      return INITIAL_ARTICLE;
    }
  });
}

interface Page {
  isSelected: boolean;
  pageNo: number;
  path: string;
}

interface Pagination {
  nextPath: string | null;
  pages: Page[];
  prevPath: string | null;
}

export function getPagination() {
  const pagination = {} as Pagination;

  const paginationElement = document.getElementById('tistory')!.querySelector('#pagination')!;
  const prevPageElement = paginationElement.querySelector('#prev-page') as HTMLAnchorElement;
  const nextPageElement = paginationElement.querySelector('#next-page') as HTMLAnchorElement;
  const pageElements = paginationElement.querySelectorAll('.page') as NodeListOf<HTMLAnchorElement>;

  if (prevPageElement.className === 'no-more-prev') {
    pagination.prevPath = null;
  } else {
    pagination.prevPath = prevPageElement.getAttribute('href');
  }

  if (nextPageElement.className === 'no-more-next') {
    pagination.nextPath = null;
  } else {
    pagination.nextPath = nextPageElement.getAttribute('href');
  }

  pagination.pages = Array.from(pageElements).map(
    (element) =>
      ({
        isSelected: element.querySelector('.selected') ? true : false,
        pageNo: Number(element.textContent),
        path: element.href,
      }) as Page,
  );

  return pagination;
}
