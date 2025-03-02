import { useEffect, useState } from 'react';

/**
 * 루트 경로로 시작하는 이미지 주소를 티스토리 스킨 주소로 변환하는 컴포넌트
 *
 * @description
 * 티스토리 스킨은 필수 요소가 아닌 파일을 모두 `/images/` 하위에 저장하기 때문에 컴포넌트에서 이미지를 다음과 같은 방식으로 사용할 수 없습니다.
 *
 * ```
 * import exampleImage from '@/assets/images/example.jpg';
 * ```
 *
 * production 모드에서 public/ 폴더에 위치한 이미지를 티스토리 스킨의 `/images/` 경로로 변환합니다.
 *
 * @example
 * ```
 * // /example.jpg -> https://tistory1.daumcdn.net/tistory/6688464/skin/images/example.jpg
 * <PublicImage
 *   alt="예시 이미지"
 *   src="/example.jpg"
 * />
 *
 * // /images/example.jpg -> https://tistory1.daumcdn.net/tistory/6688464/skin/images/example.jpg
 * <PublicImage
 *   alt="예시 이미지"
 *   src="/images/example.jpg"
 * />
 * ```
 *
 * @see https://tistory.github.io/document-tistory-skin/common/files.html
 */
export function PublicImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [src, setSrc] = useState(props.src);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && props.src?.startsWith('/')) {
      const scriptTag = document.querySelector('script[src*="/skin/images/script.js"]');

      if (scriptTag) {
        const scriptURL = scriptTag.getAttribute('src');

        if (scriptURL) {
          const baseURL = scriptURL.replace(/\/script\.js(\?.*)?$/, '');
          setSrc(baseURL + props.src.replace(/^\/images/, ''));
        }
      }
    }
  }, [props.src]);

  return (
    <img
      {...props}
      src={src}
    />
  );
}
