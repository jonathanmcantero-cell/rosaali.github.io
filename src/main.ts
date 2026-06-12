import './index.css';

// 1. Initialize Lucide Icons
// @ts-ignore
lucide.createIcons();

// 2. Language Toggle Functionality
const htmlTag = document.documentElement;
const btnDesktop = document.getElementById('langToggleBtn');
const labelDesktop = document.getElementById('langLabel');
const btnMobile = document.getElementById('langToggleBtnMobile');
const labelMobile = document.getElementById('langLabelMobile');

function toggleLang() {
  const isEs = htmlTag.getAttribute('lang') === 'es';
  const newLang = isEs ? 'en' : 'es';
  const newLabel = isEs ? 'ES' : 'EN';
  
  htmlTag.setAttribute('lang', newLang);
  if (labelDesktop) labelDesktop.textContent = newLabel;
  if (labelMobile) labelMobile.textContent = newLabel;
}

btnDesktop?.addEventListener('click', toggleLang);
btnMobile?.addEventListener('click', toggleLang);


// 3. Mobile Menu Functionality
const menuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIconContainer = document.getElementById('menuIconContainer');
let isMenuOpen = false;

function renderMenuIcon() {
  if (!menuIconContainer) return;
  menuIconContainer.innerHTML = '';
  const iconData = isMenuOpen ? 'x' : 'menu';
  const iconElem = document.createElement('i');
  iconElem.setAttribute('data-lucide', iconData);
  iconElem.className = 'w-7 h-7';
  menuIconContainer.appendChild(iconElem);
  // @ts-ignore
  lucide.createIcons();
}

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu?.classList.remove('hidden');
  } else {
    mobileMenu?.classList.add('hidden');
  }
  renderMenuIcon();
}

menuBtn?.addEventListener('click', toggleMenu);

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});


// 4. Scroll to Top Visibility Behavior
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollToTopBtn?.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    scrollToTopBtn?.classList.add('opacity-100', 'translate-y-0');
  } else {
    scrollToTopBtn?.classList.remove('opacity-100', 'translate-y-0');
    scrollToTopBtn?.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
  }
});

scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// 5. Scroll Animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-8');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe animations
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
