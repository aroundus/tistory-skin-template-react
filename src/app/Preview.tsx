import { useLayoutEffect } from 'react';

import HomePage from '@/pages/(home)/HomePage';
import ArticlePage from '@/pages/[pageNo]/ArticlePage';
import CategoryPage from '@/pages/category/CategoryPage';
import SearchPage from '@/pages/search/SearchPage';
import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';

export default function Preview() {
  useLayoutEffect(() => {
    if (document.getElementById('tt-body-page')) {
      document.querySelector('body')!.id = 'tt-body-page';
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        {document.getElementById('tt-body-index') && <HomePage />}
        {document.getElementById('tt-body-page') && <ArticlePage />}
        {document.getElementById('tt-body-category') && <CategoryPage />}
        {document.getElementById('tt-body-search') && <SearchPage />}
      </main>
      <Footer />
    </>
  );
}
