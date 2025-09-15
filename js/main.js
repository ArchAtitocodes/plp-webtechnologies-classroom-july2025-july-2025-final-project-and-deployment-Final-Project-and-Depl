// Main interactivity: nav toggle, modals, back-to-top, typed welcome
(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    if(navToggle && mainNav){
      navToggle.addEventListener('click', ()=>{
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        const next = String(!expanded);
        // update both the button and the nav so CSS selectors using [aria-expanded] work
        navToggle.setAttribute('aria-expanded', next);
        try{ mainNav.setAttribute('aria-expanded', next); }catch(e){}
        // keep a safe inline fallback for older browsers
        if(window.getComputedStyle(mainNav).display === 'none'){
          mainNav.style.display = next === 'true' ? 'block' : 'none';
        } else {
          // when CSS controls it, avoid forcing inline styles
          if(next === 'false') mainNav.style.removeProperty('display');
        }
      });
    }

  // Back to top
  const back = document.getElementById('back-to-top');
  if(back){
    window.addEventListener('scroll', ()=>{
      back.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    back.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
  }

  // Animate the primary page heading instead of typing effect
  const heading = document.querySelector('.hero .name, main h1');
  if(heading){
    heading.classList.add('animate-heading');
  }

  // Typing animation for home H1 (two-line). Accessible and respects reduced-motion.
  (function setupTyping(){
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const line1 = document.querySelector('.home .hero-text .line-1');
    const line2 = document.querySelector('.home .hero-text .line-2');
    if(!line1 || !line2) return;

    const full1 = line1.dataset.text || line1.textContent.trim();
    const full2 = line2.dataset-text || line2.textContent.trim();
    line1.textContent = '';
    line2.textContent = '';

    // Create caret
    const caret = document.createElement('span');
    caret.className = 'typing-caret';
    line2.parentNode.appendChild(caret);

    const live = document.createElement('span');
    live.setAttribute('aria-live','polite');
    live.className = 'visually-hidden';
    document.body.appendChild(live);

    function typeText(el, text, speed){
      return new Promise(resolve=>{
        let i = 0;
        const t = setInterval(()=>{
          el.textContent = text.slice(0, ++i);
          live.textContent = el.textContent;
          if(i >= text.length){ clearInterval(t); setTimeout(resolve, 220); }
        }, speed);
      });
    }

    (async function run(){
      const baseSpeed = 60; // ms per char
      await typeText(line1, full1, baseSpeed);
      await typeText(line2, full2, baseSpeed);
      // keep caret visible briefly then remove
      setTimeout(()=>{ if(caret && caret.parentNode) caret.parentNode.removeChild(caret); if(live && live.parentNode) live.parentNode.removeChild(live); }, 900);
    })();
  })();

  // Accessible tabs for Civil Engineering section on About page
  const tablists = document.querySelectorAll('.tablist');
  tablists.forEach(tablist =>{
    const tabs = tablist.querySelectorAll('[role="tab"]');
    tabs.forEach(tab =>{
      tab.addEventListener('click', ()=>{
        tabs.forEach(t=> t.setAttribute('aria-selected','false'));
        tab.setAttribute('aria-selected','true');
        const panels = tablist.nextElementSibling.querySelectorAll('[role="tabpanel"]');
        panels.forEach(p=> p.hidden = true);
        const target = document.getElementById(tab.getAttribute('aria-controls'));
        if(target) target.hidden = false;
      });
    });
  });

  // Project modals from buttons
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  document.querySelectorAll('button[data-project]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-project');
      let html='';
      if(id==='portfolio') html = '<h2>Personal Portfolio</h2><p>Responsive portfolio showcasing skills and projects. GitHub: <a href="https://github.com/stephenodhiambo" target="_blank">Repo</a></p>';
      if(id==='c2') html = '<h2>C2 Server Web Backend</h2><p>Python/Flask backend for agent/task management (conceptual). GitHub: <a href="https://github.com/stephenodhiambo" target="_blank">Repo</a></p>';
      modalBody.innerHTML = html;
      modal.setAttribute('aria-hidden','false');
    });
  });
    if(modalClose) modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
    if(modal) modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });
  });
})();
