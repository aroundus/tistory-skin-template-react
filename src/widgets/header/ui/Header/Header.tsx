import { useState } from 'react';

import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import symbolMarkImage from '@/shared/assets/images/symbol-mark.png';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: '홈', path: '/' },
    { label: '글', path: '/1' },
    { label: '카테고리', path: '/category' },
    { label: '검색', path: '/search/검색어' },
    { label: '공지사항', path: '/notice' },
    { label: '태그', path: '/tag' },
    { label: '방명록', path: '/guestbook' },
  ];

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div>
          <a
            className="inline-block"
            href="/"
          >
            <span className="sr-only">홈</span>
            <img
              alt=""
              className="h-8 w-auto"
              src={symbolMarkImage}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            type="button"
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            <span className="sr-only">메뉴 열기</span>
            <svg
              aria-hidden="true"
              className="size-6"
              data-slot="icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {links.map((link) => {
            const isPathMatched = decodeURIComponent(location.pathname) === link.path;

            return (
              <a
                className={classNames('text-lg/6', {
                  'border-b-2': isPathMatched,
                  'border-b-orange-600': isPathMatched,
                  'font-extrabold': isPathMatched,
                  'font-medium': !isPathMatched,
                })}
                href={link.path}
                key={link.path}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <div className="hidden lg:flex">
          <a
            className="text-lg font-medium text-neutral-400 hover:text-neutral-800"
            href="https://www.tistory.com/auth/login"
          >
            로그인
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          aria-modal="true"
          className="lg:hidden"
          role="dialog"
        >
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/">
                <span className="sr-only">홈</span>
                <img
                  alt=""
                  className="h-8 w-auto"
                  src={symbolMarkImage}
                />
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <span className="sr-only">메뉴 닫기</span>
                <svg
                  aria-hidden="true"
                  className="size-6"
                  data-slot="icon"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="flex flex-col gap-6 py-20">
                  {links.map((link) => {
                    const isPathMatched = decodeURIComponent(location.pathname) === link.path;

                    return (
                      <a
                        href={link.path}
                        key={link.path}
                      >
                        <span
                          className={classNames('text-lg/6', {
                            'border-b-2': isPathMatched,
                            'border-b-orange-600': isPathMatched,
                            'font-extrabold': isPathMatched,
                            'font-medium': !isPathMatched,
                          })}
                        >
                          {link.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
                <div className="py-6">
                  <a
                    className="-mx-3 px-3 py-2.5 text-lg font-medium text-neutral-400"
                    href="https://www.tistory.com/auth/login"
                  >
                    로그인
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
