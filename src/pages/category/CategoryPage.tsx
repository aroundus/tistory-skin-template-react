import { useLayoutEffect } from 'react';

const codes = [
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

export default function CategoryPage() {
  useLayoutEffect(() => {
    if (import.meta.env.DEV) {
      document.querySelector('body')!.id = 'tt-body-category';
    }
  }, []);

  return (
    <>
      <section>
        <h1 className="text-center font-bold">카테고리</h1>
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
