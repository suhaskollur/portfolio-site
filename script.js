// Utilities: small helpers for DOM selection
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Set current year in footer
(() => {
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Theme: dark mode toggle with persistence
(() => {
  const root = document.documentElement;
  const storageKey = 'theme-preference';
  const getStored = () => localStorage.getItem(storageKey);
  const setStored = (v) => localStorage.setItem(storageKey, v);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const apply = (mode) => {
    if (mode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  };
  const initMode = getStored() || (prefersDark ? 'dark' : 'light');
  apply(initMode);
  const btn = $('#theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = root.classList.toggle('dark');
      setStored(isDark ? 'dark' : 'light');
    });
  }
})();

// Mobile nav toggle
(() => {
  const navContainer = document.querySelector('.nav');
  const toggle = document.getElementById('nav-toggle');
  if (!navContainer || !toggle) return;
  toggle.addEventListener('click', () => {
    const open = navContainer.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Intersection-based reveal animations
(() => {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window) || items.length === 0) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.1 });
  items.forEach((el) => observer.observe(el));
})();

// Animate skill progress bars when visible
(() => {
  const bars = $$('.progress');
  if (bars.length === 0) return;
  const setWidth = (el) => {
    const pct = parseInt(el.getAttribute('data-progress') || '0', 10);
    const span = $('span', el);
    if (span) span.style.width = Math.max(0, Math.min(100, pct)) + '%';
  };
  if (!('IntersectionObserver' in window)) {
    bars.forEach(setWidth);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setWidth(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  bars.forEach((bar) => io.observe(bar));
})();

// Contact form: simple validation + mailto fallback
(() => {
  const form = $('#contact-form');
  if (!form) return;

  const nameEl = $('#name');
  const emailEl = $('#email');
  const messageEl = $('#message');

  const setError = (input, msg) => {
    const msgEl = input?.parentElement?.querySelector('.error');
    if (msgEl) msgEl.textContent = msg || '';
  };

  const validate = () => {
    let ok = true;
    if (!nameEl.value.trim()) { setError(nameEl, 'Please enter your name'); ok = false; } else setError(nameEl, '');
    const email = emailEl.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError(emailEl, 'Enter a valid email'); ok = false; } else setError(emailEl, '');
    if (!messageEl.value.trim()) { setError(messageEl, 'Please enter a message'); ok = false; } else setError(messageEl, '');
    return ok;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent('Portfolio Contact — ' + nameEl.value.trim());
    const body = encodeURIComponent(`${messageEl.value.trim()}\n\n— ${nameEl.value.trim()}\n${emailEl.value.trim()}`);
    window.location.href = `mailto:jane.doe@example.com?subject=${subject}&body=${body}`;
  });
})();

