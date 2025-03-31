import { useState, useEffect } from 'react';

export function useScrollSpy(selectorString = "h4[id]") {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll(selectorString);
      
      const newActiveIndex = Array.from(sections).reduce((activeIndex, section, index) => {
        const sectionTop = section.getBoundingClientRect().top + scrollPosition;
        if (sectionTop <= scrollPosition + window.innerHeight / 2) {
          return index;
        }
        return activeIndex;
      }, 0);

      setActiveItemIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectorString]);

  return { activeItemIndex };
}
