export const useSmoothScroll = () => {
  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update URL without a page jump
      window.history.pushState(null, '', href);
    }
  };

  return { scrollToElement };
};
