export interface Category {
  /**
   * 카테고리 글 수
   */
  articleCount: number;

  /**
   * 카테고리 이름
   */
  name: string;

  /**
   * 하위 카테고리 목록
   */
  children?: Category[];
}

function extractCategory(element: Element) {
  const text = element.querySelector('a')!.textContent || '';
  const name = text.replace(/\(\d+\)/g, '').trim() || ''; // 증여세 (2) -> 증여세
  const matchedArticleCountText = text.match(/\(\d+\)/g);

  return {
    articleCount: matchedArticleCountText ? Number(matchedArticleCountText[0].replace(/[\D]/g, '')) : 0, // (2) -> 2
    name,
  };
}

export function getCategories() {
  const element = document.getElementById('category')!;

  try {
    const categories: Category[] = [
      {
        articleCount: Number(element.querySelector('.link_tit .c_cnt')!.textContent?.replace(/[\D]/g, '')),
        name: '전체',
      },
    ];

    const categoryListElements = element.querySelectorAll('ul.category_list > li')!;

    Array.from(categoryListElements).forEach((categoryListElement) => {
      const category: Category = extractCategory(categoryListElement);
      const subcategoryListElements = categoryListElement.querySelectorAll('ul.sub_category_list li');

      if (subcategoryListElements.length > 0) {
        category.children = Array.from(subcategoryListElements).map((subcategoryListElement) =>
          extractCategory(subcategoryListElement),
        );

        category.articleCount += category.children.reduce(
          (previousValue, currentObject) => previousValue + currentObject.articleCount,
          0,
        );
      }

      categories.push(category);
    });

    return categories;
  } catch (error) {
    console.error(error);

    return [];
  }
}
