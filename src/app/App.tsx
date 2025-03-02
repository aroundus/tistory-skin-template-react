import { Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Preview from './Preview';
import { rootRoute } from './routes';

import './styles/tailwind.css';

export function App() {
  const router = createBrowserRouter([rootRoute]);

  // 관리자 페이지 스킨 편집 미리 보기
  if (window.location.pathname === 'srcdoc') {
    return <Preview />;
  }

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
