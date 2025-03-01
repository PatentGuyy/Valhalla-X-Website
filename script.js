// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Simulate loading
  setTimeout(function() {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
  }, 2000);

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Add animation classes to elements when they come into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe section titles and cards
  document.querySelectorAll('.section-title, .feature-card, .game-card, .support-card, .commands-info, .commands-preview').forEach(el => {
    observer.observe(el);
  });
});

// Smooth scrolling function
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = document.getElementById('header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  // Close mobile menu if open
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}
