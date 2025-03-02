export interface ExtendedHTMLElement extends HTMLElement {
  __events?: {
    [key: string]: EventListener[];
  };
}

/**
 * 모든 이벤트 리스너를 원본 HTML 요소에서 대상 HTML 요소로 복제합니다.
 *
 * @description
 * `sourceElement`와 그 자식 요소에 연결된 이벤트 리스너들을 `targetElement`와 그 자식 요소들에 동일하게 복제합니다.
 * 이벤트 리스너는 원본 요소의 비공개 속성인 `__events`에서 직접 복사합니다.
 *
 * @param sourceElement - 이벤트 리스너를 복제할 원본 HTML 요소
 * @param targetElement - 이벤트 리스너를 추가할 대상 HTML 요소
 */
export function cloneEventListeners(sourceElement: HTMLElement, targetElement: HTMLElement) {
  const events = (sourceElement as ExtendedHTMLElement).__events;

  if (events) {
    Object.keys(events).forEach((eventType) => {
      events[eventType].forEach((listener: EventListener) => {
        targetElement.addEventListener(eventType, listener);
      });
    });
  }

  // 자식 요소에 대해 재귀적으로 이벤트 리스너를 복제합니다.
  const sourceChildren = Array.from(sourceElement.children);
  const targetChildren = Array.from(targetElement.children);

  sourceChildren.forEach((sourceChild, index) => {
    cloneEventListeners(sourceChild as HTMLElement, targetChildren[index] as HTMLElement);
  });
}
