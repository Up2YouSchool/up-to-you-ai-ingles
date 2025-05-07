
// Main JavaScript file for UpToYou

// Current year for copyright
document.addEventListener('DOMContentLoaded', function() {
  const yearElements = document.querySelectorAll('#current-year');
  if (yearElements) {
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);
  }
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });
  
  // Modalidade selection
  window.selectModalidade = function(modalidade) {
    alert(`Modalidade ${modalidade} selecionada! Em breve entraremos em contato.`);
  };

  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.style.padding = '0.5rem 0';
      header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
      header.style.padding = '1rem 0';
      header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    }
  });
});
