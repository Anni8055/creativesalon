import { useEffect, useState } from 'react';
import { debounce } from '@/lib/utils';

export function useScrollAnchor() {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const sections = [
      'home',
      'services',
      'about',
      'team',
      'gallery',
      'contact',
      'appointment',
    ];

    const calculateScrollPosition = debounce(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let activeSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            activeSection = section;
            break;
          }
        }
      }
      
      setCurrentSection(activeSection);
    }, 100);

    window.addEventListener('scroll', calculateScrollPosition);
    calculateScrollPosition();

    return () => window.removeEventListener('scroll', calculateScrollPosition);
  }, []);

  return currentSection;
}
