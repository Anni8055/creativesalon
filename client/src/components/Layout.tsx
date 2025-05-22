import { ReactNode, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useLocation } from 'wouter';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Scroll to top when navigating to a new page
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-raleway text-dark-gray bg-light-gray">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
