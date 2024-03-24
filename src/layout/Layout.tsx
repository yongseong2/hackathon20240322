import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export function Layout() {
  return (
    <div>
      <Header />
      <main className="mb-[250px] h-full">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
