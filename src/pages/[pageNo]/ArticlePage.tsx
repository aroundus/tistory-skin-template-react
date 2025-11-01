import { useLayoutEffect } from 'react';

const codes = [
  `
import { articleService, reactionService } from '@/entities/article/api';

// 글 조회
const preloadedArticle = articleService.getArticles()[0];

const [article, setArticle] = useState<Article>(preloadedArticle);

// 글 좋아요 수 조회 (API)
const fetchArticleLikeCount = useCallback(async () => {
  const fetchedReaction = await reactionService.getReaction(article.articleId);

  const articleWithLikeCount = {
    ...article,
    likeCount: fetchedReaction.data.reactionCounter.like,
    isLikeActive: fetchedReaction.data.isActive,
  };

  setArticle(articleWithLikeCount);
}, [article]);

useEffect(() => {
  fetchArticleLikeCount();
}, []);

// 글 좋아요 클릭 시 실행하는 함수 (API)
const handleLikeClick = useCallback(async () => {
  if (article.isLikeActive) {
    await reactionService.deleteLikeReaction(article.articleId);
  } else {
    await reactionService.postLikeReaction(article.articleId);
  }

  setArticle((prevArticle) => {
    if (typeof article.likeCount === 'number') {
      return {
        ...prevArticle,
        likeCount: article.likeCount + (article.isLikeActive ? -1 : 1),
        isLikeActive: article.isLikeActive ? false : true,
      };
    }

    return prevArticle;
  });
}, [article]);
  `,
  `
// 댓글 컴포넌트
export function CommentSection() {
  const ref = useRef<HTMLElement>(null);
  const commentElement = document.querySelector('[data-tistory-react-app="Comment"]') as HTMLElement;
  const clonedCommentElement = commentElement.cloneNode(true) as HTMLElement;

  useEffect(() => {
    if (ref.current && ref.current.childElementCount === 0) {
      cloneEventListeners(commentElement, clonedCommentElement);
      ref.current.appendChild(clonedCommentElement);
    }
  }, [ref.current]);

  return (
    <section ref={ref} />
  );
}
  `,
];

export default function ArticlePage() {
  useLayoutEffect(() => {
    if (import.meta.env.DEV) {
      document.querySelector('body')!.id = 'tt-body-page';
    }
  }, []);

  return (
    <>
      <section>
        <h1 className="text-center font-bold">글</h1>
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
