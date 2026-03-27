/* ════════════════════════════════════════════════════
   LIAS CLEANING CO. — script.js
   ════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── NAV: scroll shadow + mobile burger ── */
  const navbar   = document.getElementById('navbar');
  const burger   = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    });
  });

  /* ── FLOATING CTA: show after hero ── */
  const floatCta = document.getElementById('floatCta');
  const hero     = document.getElementById('home');

  function toggleFloat() {
    const heroBottom = hero.getBoundingClientRect().bottom;
    floatCta.classList.toggle('visible', heroBottom < 0);
  }
  window.addEventListener('scroll', toggleFloat, { passive: true });
  toggleFloat();

  /* ── REVEAL ON SCROLL ── */
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  /* ── FAQ ACCORDION ── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn   = item.querySelector('.faq-q');
    const panel = item.querySelector('.faq-a');

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      faqItems.forEach(i => {
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        const p = i.querySelector('.faq-a');
        p.classList.remove('open');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        panel.classList.add('open');
      }
    });
  });

  /* ── ACTIVE NAV LINK on scroll ── */
  const sections  = document.querySelectorAll('section[id], div[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.classList.toggle(
            'active',
            a.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ── CONTACT FORM (demo — logs to console) ── */
  const contactForm    = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      const data = Object.fromEntries(new FormData(contactForm));
      console.log('[Contact] Submission:', data);
      // ↑ Replace with your backend / EmailJS / Formspree call here
      contactForm.reset();
      contactSuccess.hidden = false;
      setTimeout(() => { contactSuccess.hidden = true; }, 5000);
    });
  }

  /* ── BOOKING FORM (demo — logs to console) ── */
  const bookingForm    = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');

  if (bookingForm) {
    // Set min date to today
    const dateInput = bookingForm.querySelector('#b_date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }
      const data = Object.fromEntries(new FormData(bookingForm));
      console.log('[Booking] Submission:', data);
      // ↑ Replace with your backend / EmailJS / Formspree call here
      bookingForm.reset();
      bookingSuccess.hidden = false;
      bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => { bookingSuccess.hidden = true; }, 6000);
    });
  }

  /* ── SMOOTH SCROLL polyfill for older Safari ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
