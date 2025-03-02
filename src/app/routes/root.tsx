import type { RouteObject } from 'react-router-dom';

import HomePage from '@/pages/(home)/HomePage';
import Layout from '@/pages/Layout';
import ArticlePage from '@/pages/[pageNo]/ArticlePage';
import CategoryPage from '@/pages/category/CategoryPage';
import GuestbookPage from '@/pages/guestbook/GuestbookPage';
import NoticePage from '@/pages/notice/NoticePage';
import SearchPage from '@/pages/search/SearchPage';
import TagPage from '@/pages/tag/TagPage';

import { ErrorBoundary } from './ErrorBoundary';

export const rootRoute: RouteObject = {
  path: '/',
  element: <Layout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'category',
      children: [
        {
          index: true,
          element: <CategoryPage />,
        },
        {
          path: ':categoryName',
          element: <CategoryPage />,
        },
      ],
    },
    {
      path: 'guestbook',
      element: <GuestbookPage />,
    },
    {
      path: 'notice',
      element: <NoticePage />,
    },
    {
      path: 'search',
      children: [
        {
          index: true,
          loader: () => {
            window.location.href = '/';

            return null;
          },
        },
        {
          path: ':keyword',
          element: <SearchPage />,
        },
      ],
    },
    {
      path: 'tag',
      element: <TagPage />,
    },
    {
      path: ':pageNo',
      element: <ArticlePage />,
      loader: ({ params }) => {
        if (Number.isNaN(Number(params.pageNo))) {
          window.location.href = '/';
        }

        return null;
      },
    },
  ],
};
