export interface MenuItem {
  /**
   * 메뉴 이름
   */
  name: string;

  /**
   * 메뉴 경로
   */
  path: string;

  target?: React.HTMLAttributeAnchorTarget;
}

export function getMenu() {
  const elements = document.querySelectorAll('#menu a') as NodeListOf<HTMLAnchorElement>;

  return Array.from(elements).map(
    (element) =>
      ({
        name: element.textContent,
        path: element.href,
        target: element.target,
      }) as MenuItem,
  );
}
