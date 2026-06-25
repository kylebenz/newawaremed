/* AWAREmed – Premium Site JS */
'use strict';

/* ─── Sticky Header ─── */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const utilBar = document.querySelector('.utility-bar');
  const updateHeader = () => {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('scrolled', scrolled);
    if (utilBar) utilBar.style.display = scrolled ? 'none' : '';
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();

/* ─── Mobile Nav ─── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    const spans = toggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ─── Scroll Reveal ─── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ─── Counter Animation ─── */
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 2000;
      const startTime = performance.now();
      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.floor(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();

/* ─── Testimonials Slider ─── */
(function () {
  const section = document.querySelector('.testimonials-slider');
  if (!section) return;
  const track = section.querySelector('.testimonials-track');
  const slides = section.querySelectorAll('.testimonial-slide');
  const dots = section.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  if (!track || !slides.length) return;
  let current = 0;
  let autoTimer;

  const go = (n) => {
    current = ((n % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  };

  const startAuto = () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => go(current + 1), 5000);
  };

  if (prevBtn) prevBtn.addEventListener('click', () => { go(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { go(current + 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); startAuto(); }));

  // Touch/swipe
  let touchX = 0;
  track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { go(current + (diff > 0 ? 1 : -1)); startAuto(); }
  }, { passive: true });

  go(0);
  startAuto();
})();

/* ─── FAQ Accordion ─── */
(function () {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => other.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
    question.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); question.click(); }
    });
    question.setAttribute('tabindex', '0');
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');
    const observer = new MutationObserver(() => {
      question.setAttribute('aria-expanded', String(item.classList.contains('open')));
    });
    observer.observe(item, { attributes: true, attributeFilter: ['class'] });
  });
})();

/* ─── Book Form ─── */
(function () {
  const form = document.getElementById('book-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Request Sent!';
      btn.style.background = 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)';
      setTimeout(() => {
        form.reset();
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    }, 1500);
  });
})();

/* ─── Newsletter ─── */
(function () {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.newsletter-btn');
      btn.textContent = '✓ Subscribed!';
      setTimeout(() => { btn.textContent = 'Subscribe'; form.reset(); }, 3000);
    });
  });
})();

/* ─── Smooth scroll for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── Ripple on buttons ─── */
document.querySelectorAll('.btn-primary, .btn-green, .btn-blue').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute; border-radius:50%;
      width:200px; height:200px;
      left:${x - 100}px; top:${y - 100}px;
      background:rgba(255,255,255,0.25);
      transform:scale(0); animation:ripple-anim 0.6s linear;
      pointer-events:none;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

// Add ripple keyframe
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `@keyframes ripple-anim { to { transform:scale(2.5); opacity:0; } }`;
document.head.appendChild(rippleStyle);

/* ─── Parallax hero ─── */
(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const heroMedia = hero.querySelector('.hero-media');
    if (heroMedia && window.innerWidth > 900) {
      heroMedia.style.transform = `translateY(${y * 0.04}px)`;
    }
  }, { passive: true });
})();
