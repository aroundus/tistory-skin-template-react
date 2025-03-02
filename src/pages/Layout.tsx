import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="p-8 break-words break-keep sm:p-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
