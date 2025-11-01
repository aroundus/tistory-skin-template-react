import { useLayoutEffect } from 'react';

import tistoryImage from '@/shared/assets/images/tistory.png';
import { PublicImage } from '@/shared/ui';

const codes = [
  `
import * as userService from '@/entities/user/api';

// 사용자 세션 조회
const session = userService.getSession();
  `,
  `
import * as blogService from '@/entities/blog/api';

// 블로그 정보 조회
const blog = blogService.getBlog();
  `,
  `
import * as menuService from '@/entities/menu/api';

// 메뉴 조회
const menu = menuService.getMenu();
  `,
  `
import * as categoryService from '@/entities/category/api';

// 카테고리 목록 조회
const categories = categoryService.getCategories();
  `,
  `
import * as articleService from '@/entities/article/api';

// 글 목록 조회
const preloadedArticles = articleService.getArticles();

// 글 페이지네이션 조회
const pagination = articleService.getPagination();

const [articles, setArticles] = useState<Article[]>(preloadedArticles);

// 좋아요 수 포함한 글 목록 조회 (API)
async function fetchArticlesLikeCount() {
  const articlesWithLikeCount: Article[] = [];

  for (let index = 0; index < articles.length; index += 1) {
    const article = articles[index];
    const fetchedReaction = await articleService.getReaction(article.articleId);

    articlesWithLikeCount.push({
      ...article,
      likeCount: fetchedReaction.data.reactionCounter.like,
      isLikeActive: fetchedReaction.data.isActive,
    });
  }

  setArticles(articlesWithLikeCount);
}

useEffect(() => {
  fetchArticlesLikeCount();
}, []);
  `,
];

export default function HomePage() {
  useLayoutEffect(() => {
    if (import.meta.env.DEV) {
      document.querySelector('body')!.id = 'tt-body-index';
    }
  }, []);

  return (
    <>
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-23">
          <div>
            <div
              aria-level={1}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-end"
              role="heading"
              style={{ fontFamily: 'Montserrat' }}
            >
              <PublicImage
                alt=""
                className="inline-block h-14 sm:h-15"
                src={tistoryImage}
              />{' '}
              <span className="text-4xl text-neutral-200 sm:text-5xl">with</span>
              <span className="flex items-center gap-2 text-5xl font-bold text-blue-400 sm:text-6xl">
                <svg
                  className="h-12 fill-blue-400 sm:h-14"
                  viewBox="-10.5 -9.45 21 18.9"
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="2"
                  ></circle>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <ellipse
                      rx="10"
                      ry="4.5"
                    ></ellipse>
                    <ellipse
                      rx="10"
                      ry="4.5"
                      transform="rotate(60)"
                    ></ellipse>
                    <ellipse
                      rx="10"
                      ry="4.5"
                      transform="rotate(120)"
                    ></ellipse>
                  </g>
                </svg>
                React
              </span>
            </div>
            <p className="mt-10 text-center text-lg text-pretty sm:text-xl">프론트엔드 개발자를 위한 티스토리 템플릿</p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-5 max-w-2xl">
        <ul className="divide-y divide-gray-300">
          {codes.map((code, index) => (
            <li
              className="py-6"
              key={index}
            >
              <pre className="mt-2 bg-neutral-800 px-8 text-sm whitespace-pre text-neutral-100">{code}</pre>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
