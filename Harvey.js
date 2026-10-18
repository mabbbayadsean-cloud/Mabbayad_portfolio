// Sean.js - Final Portfolio JS - Sean Harvey Mabbayad

// 1. DARK / LIGHT MODE TOGGLE - FIXED FOOTER
const modeBtn = document.createElement('button');
modeBtn.textContent = '🌙 Dark / Light';
modeBtn.id = 'modeBtn';
modeBtn.style.cssText = `
  position:fixed; bottom:20px; right:20px;
  background:#F9AB55; color:#F7F5FB; border:none;
  padding:12px 18px; border-radius:20px;
  cursor:pointer; z-index:99; font-weight:bold;
  transition:0.3s;
`;
document.body.appendChild(modeBtn);

let isDark = true;
const footer = document.querySelector('footer');
const footerQuote = document.querySelector('.footer-quote');

modeBtn.onclick = () => {
  if(isDark){
    document.body.style.background = '#F7F5FB';
    document.body.style.color = '#0D1F2D';
    if(footer) footer.style.color = '#0D1F2D';
    if(footerQuote) footerQuote.style.color = '#0D1F2D';
    modeBtn.textContent = '☀️ Light Mode';
  } else {
    document.body.style.background = '#0D1F2D';
    document.body.style.color = '#F7F5FB';
    if(footer) footer.style.color = '#F7F5FB';
    if(footerQuote) footerQuote.style.color = 'rgb(255, 201, 60)';
    modeBtn.textContent = '🌙 Dark Mode';
  }
  isDark = !isDark;
};

// 2. INTERACTIVE CERT CLICK - ENLARGE
const certImages = document.querySelectorAll('.cert img');
certImages.forEach(img => {
  img.style.cursor = 'zoom-in';
  img.onclick = () => {
    window.open(img.src, '_blank');
  }
});

// 3. NAVIGATION JS - STAY COLOR + #0D1F2D BORDER + #F9AB55 TEXT
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Smooth scroll
navLinks.forEach(link => {
  link.onclick = (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if(href.startsWith('#')){
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = href;
    }
  }
});

// Active na nag-stay kung nasa section
function updateActiveNav(){
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if(window.scrollY >= top){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    link.style.borderBottom = 'none';
    link.style.paddingBottom = '3px';
    link.style.fontWeight = '';

    if(link.getAttribute('href') === `#${current}`){
      link.style.color = '#F9AB55';
      link.style.fontWeight = 'bold';
      link.style.borderBottom = '3px solid #0D1F2D';
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
updateActiveNav(); 
