import { Link } from 'wouter';
import { scrollToElement } from '@/lib/utils';

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      scrollToElement(section);
    }
  };

  return (
    <footer className="bg-pink-300 text-dark-blue py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-gold font-playfair text-3xl font-extrabold tracking-wide">Luxe</span>
              <span className="text-dark-blue font-playfair text-2xl ml-2 font-semibold tracking-wide">Salon & Spa</span>
            </Link>
            <p className="mb-6 text-dark-blue font-medium">Elevating beauty and wellness with our premium services and exceptional experience.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-blue hover:text-gold transition-all text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-dark-blue hover:text-gold transition-all text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-dark-blue hover:text-gold transition-all text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-dark-blue hover:text-gold transition-all text-2xl">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-extrabold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-gold transition-all font-medium text-dark-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-gold transition-all font-medium text-dark-blue">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-gold transition-all font-medium text-dark-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#team" onClick={(e) => handleNavClick(e, 'team')} className="hover:text-gold transition-all font-medium text-dark-blue">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="hover:text-gold transition-all font-medium text-dark-blue">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gold transition-all font-medium text-dark-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-extrabold mb-6 tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services" className="hover:text-gold transition-all font-medium text-dark-blue">Hair Styling</a></li>
              <li><a href="/services" className="hover:text-gold transition-all font-medium text-dark-blue">Hair Coloring</a></li>
              <li><a href="/services" className="hover:text-gold transition-all font-medium text-dark-blue">Facial Treatments</a></li>
              <li><a href="/services" className="hover:text-gold transition-all font-medium text-dark-blue">Massage Therapy</a></li>
              <li><a href="/services" className="hover:text-gold transition-all font-medium text-dark-blue">Manicure & Pedicure</a></li>
              <li><a href="/services" className="hover:text-gold transition-all font-medium text-dark-blue">Waxing & Hair Removal</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-extrabold mb-6 tracking-wide">Newsletter</h3>
            <p className="mb-4 text-dark-blue font-medium">Subscribe to our newsletter for exclusive offers and beauty tips.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-dark-gray bg-white bg-opacity-90 placeholder-gray-500"
                />
                <button 
                  type="submit" 
                  className="bg-gold text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-all"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p className="text-sm text-dark-blue">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
        </div>
        
        <div className="border-t border-dark-blue mt-12 pt-8 text-center">
          <p className="text-dark-blue">&copy; {new Date().getFullYear()} Luxe Salon & Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
