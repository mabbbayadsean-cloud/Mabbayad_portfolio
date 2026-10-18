const modeBtn = document.createElement('button');
modeBtn.textContent = '🌙 Dark / Light';
modeBtn.id = 'modeBtn';
modeBtn.style.cssText = `
  position:fixed; bottom:20px; right:20px;
  background:#F9AB55; color:#0D1F2D; border:none;
  padding:14px 18px; border-radius:20px;
  cursor:pointer; font-weight:bold; transition:0.4s; z-index:100;
`;
document.body.appendChild(modeBtn);

let isDark = true;
const footer = document.querySelector('footer');
const footerQuote = document.querySelector('.footer-quote');

const hoverStyle = document.createElement('style');
document.head.appendChild(hoverStyle);

function updateTheme(isDarkMode){
  if(isDarkMode){
    // DARK MODE DEFAULT MO - card dark, hover white
    hoverStyle.innerHTML = `
      .info, .skill, .Proj, .cert{
      background:#0D1F2D !important;
      border:1px solid #F7F5FB !important; 
      color:#F7F5FB !important;
      }
      .info h3, .info p, .info li, .skill h3, .skill p, .Proj h3, .Proj p, .cert h3, .cert p
      { color:#F7F5FB !important;
      }
      .info:hover, .skill:hover, .Proj:hover, .cert:hover{ 
      background:#F7F5FB !important; transform:translateY(-8px); }
      .info:hover h3, .info:hover p, .info:hover li, .skill:hover h3, .skill:hover p, .Proj:hover h3, .Proj:hover p, .cert:hover h3, .cert:hover p{
       color:#0D1F2D !important; }
       #AboutMe em, .skills em, .projects em, #ContactMe em, #Achievements em, .info h3, .skill h3, .Proj h3{
  color:#F9AB55 !important;
}
    `;
  } else {
    // LIGHT MODE - card white, hover dark - KITA NA HOVER
    hoverStyle.innerHTML = `
      nav, #Home, .contactbackground{ background:#F7F5FB; }
      .contactbackground{ border:1px solid #0D1F2D; }
      nav a, nav h4, #Home h1, #Home p, #ContactMe h1, #ContactMe p, footer{ color:#0D1F2D; }
      .info, .skill, .Proj, .cert{
      background:#F7F5FB !important;
      border:1px solid #0D1F2D !important; 
      color:#0D1F2D !important; }
      .info h3, .info p, .info li, .skill h3, .skill p, .Proj h3, .Proj p, .cert h3, .cert p{
      color:#0D1F2D !important; }
      #AboutMe em, .skills em, .projects em, #ContactMe em, #Achievements em, .info h3, .skill h3, .Proj h3{ 
      color:#F9AB55 !important; }
      .info:hover, .skill:hover, .Proj:hover, .cert:hover{
       background:#0D1F2D !important; transform:translateY(-8px); }
      .info:hover h3, .info:hover p, .info:hover li, .skill:hover h3, .skill:hover p, .Proj:hover h3, .Proj:hover p, .cert:hover h3, .cert:hover p{ 
      color:#F7F5FB !important; }
    `;
  }
}

updateTheme(true);

modeBtn.onclick = () => {
  if(isDark){
    document.body.style.background = '#F7F5FB';
    document.body.style.color = '#0D1F2D';
    if(footer) footer.style.color = '#0D1F2D';
    if(footerQuote) footerQuote.style.color = '#F9AB55';
    modeBtn.textContent = '☀️ Light Mode';
    modeBtn.style.background = '#0D1F2D';
    modeBtn.style.color = '#F7F5FB';
    updateTheme(false);
  } else {
    document.body.style.background = '#0D1F2D';
    document.body.style.color = '#F7F5FB';
    if(footer) footer.style.color = '#F7F5FB';
    if(footerQuote) footerQuote.style.color = '#F9AB55';
    modeBtn.textContent = '🌙 Dark Mode';
    modeBtn.style.background = '#F9AB55';
    modeBtn.style.color = '#0D1F2D';
    updateTheme(true);
  }
  isDark = !isDark;
};

// NAV
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
navLinks.forEach(link => {
  link.onclick = (e) => {
    const href = link.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    } else if(href.includes('#')){
      e.preventDefault();
      window.location.href = href;
    }
  }
});
function updateActiveNav(){
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if(window.scrollY >= top){ current = section.getAttribute('id'); }
  });
  navLinks.forEach(link => {
    link.style.color = ''; link.style.borderBottom = 'none'; link.style.paddingBottom = '3px'; link.style.fontWeight = '';
    const linkHref = link.getAttribute('href');
    if(linkHref === `#${current}` || linkHref.endsWith(`#${current}`)){
      link.style.color = '#F9AB55'; link.style.fontWeight = 'bold'; link.style.borderBottom = '3px solid #F9AB55';
    }
  });
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
updateActiveNav();
