export interface Blog {
  /**
   * 블로그 제목
   */
  title: string;

  /**
   * 블로그 설명
   */
  description: string;

  /**
   * 블로그 소유자 이름
   */
  blogger: string;

  /**
   * 블로그 대표 이미지 주소
   */
  imageURL: string;
}

const INITIAL_BLOG: Blog = {
  title: '',
  description: '',
  blogger: '',
  imageURL: '',
};

export function getBlog() {
  const element = document.getElementById('blog')!;

  try {
    return JSON.parse(element.innerHTML) as Blog;
  } catch {
    return INITIAL_BLOG;
  }
}
