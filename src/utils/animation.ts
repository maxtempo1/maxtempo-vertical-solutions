
export const setupScrollAnimation = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.1 });

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    animatedElements.forEach(element => {
      observer.unobserve(element);
    });
  };
};
