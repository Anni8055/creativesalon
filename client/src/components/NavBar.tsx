import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { scrollToElement } from '@/lib/utils';
import { useScrollAnchor } from '@/hooks/use-scroll-anchor';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const currentSection = useScrollAnchor();
  
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToElement(section);
      closeMobileMenu();
    } else {
      closeMobileMenu();
    }
  };

  return (
    <header 
      id="navbar" 
      className={`fixed w-full top-0 z-50 bg-pink-300 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 mr-10">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-2xl md:text-3xl tracking-wide text-gray-800">
              ULTIMATE
            </span>
            <span className="text-black text-xl md:text-2xl ml-2 tracking-widest">SALON</span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="block lg:hidden ml-auto">
          <button 
            onClick={toggleMobileMenu} 
            className="text-black hover:text-gray-700 transition-all focus:outline-none"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow items-center uppercase text-xs tracking-wider font-medium text-gray-700">
          <ul className="flex flex-grow justify-between">
            <li>
              <NavLink 
                href="/" 
                section="home" 
                label="HOME" 
                isHomePage={isHomePage}
                active={currentSection === 'home'} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/about" 
                section="about" 
                label="ABOUT" 
                isHomePage={isHomePage}
                active={currentSection === 'about'} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/team" 
                section="team" 
                label="MEET THE TEAM" 
                isHomePage={isHomePage}
                active={currentSection === 'team'} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/services" 
                section="services" 
                label="INCLUSIVE SERVICES" 
                isHomePage={isHomePage}
                active={false} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/gallery" 
                section="gallery" 
                label="GALLERY" 
                isHomePage={isHomePage}
                active={currentSection === 'gallery'} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/about" 
                section="about" 
                label="INNOLUXE" 
                isHomePage={isHomePage}
                active={false} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/about" 
                section="about" 
                label="ACADEMY" 
                isHomePage={isHomePage}
                active={false} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/about" 
                section="about" 
                label="SALON HIRE" 
                isHomePage={isHomePage}
                active={false} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/appointment" 
                section="appointment" 
                label="BOOK NOW" 
                isHomePage={isHomePage}
                active={location === "/appointment"} 
                onClick={handleNavClick}
              />
            </li>
            <li>
              <NavLink 
                href="/contact" 
                section="contact" 
                label="CONTACT" 
                isHomePage={isHomePage}
                active={currentSection === 'contact'} 
                onClick={handleNavClick}
              />
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div 
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-pink-100 overflow-hidden shadow-lg"
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <NavLink 
            href="/" 
            section="home" 
            label="HOME" 
            isHomePage={isHomePage}
            active={currentSection === 'home'} 
            onClick={handleNavClick}
            mobile
          />
          <NavLink 
            href="/about" 
            section="about" 
            label="ABOUT" 
            isHomePage={isHomePage}
            active={currentSection === 'about'} 
            onClick={handleNavClick}
            mobile
          />
          <NavLink 
            href="/team" 
            section="team" 
            label="MEET THE TEAM" 
            isHomePage={isHomePage}
            active={currentSection === 'team'} 
            onClick={handleNavClick}
            mobile
          />
          <NavLink 
            href="/services" 
            section="services" 
            label="INCLUSIVE SERVICES" 
            isHomePage={isHomePage}
            active={false} 
            onClick={handleNavClick}
            mobile
          />
          <NavLink 
            href="/gallery" 
            section="gallery" 
            label="GALLERY" 
            isHomePage={isHomePage}
            active={currentSection === 'gallery'} 
            onClick={handleNavClick}
            mobile
          />
          <NavLink 
            href="/appointment" 
            section="appointment" 
            label="BOOK NOW" 
            isHomePage={isHomePage}
            active={location === "/appointment"} 
            onClick={handleNavClick}
            mobile
          />
          <NavLink 
            href="/contact" 
            section="contact" 
            label="CONTACT" 
            isHomePage={isHomePage}
            active={currentSection === 'contact'} 
            onClick={handleNavClick}
            mobile
          />
        </div>
      </motion.div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  section: string;
  label: string;
  active: boolean;
  isHomePage: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, section: string) => void;
  mobile?: boolean;
}

const NavLink = ({ href, section, label, active, isHomePage, onClick, mobile = false }: NavLinkProps) => {
  const linkHref = isHomePage ? `#${section}` : href;
  
  return (
    <Link 
      href={linkHref}
      onClick={(e) => onClick(e, section)}
      className={`
        ${mobile ? 'py-2' : ''}
        text-dark-blue hover:text-gold transition-all font-montserrat font-medium
        ${active ? 'text-gold' : ''}
      `}
    >
      {label}
    </Link>
  );
};

export default NavBar;
