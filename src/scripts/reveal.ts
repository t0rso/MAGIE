// Aggiunge .is-in agli elementi .reveal / .reveal-stagger quando entrano nel viewport
// (o quando risultano già sopra: uno scroll molto veloce può saltare l'intersezione).
const els = document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger, .underline-brush');
if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  els.forEach((el) => el.classList.add('is-in'));
} else {
  // Ciò che è già nel viewport al caricamento appare subito, senza aspettare l'observer.
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add('is-in');
  });
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting || e.boundingClientRect.bottom < 0) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -5% 0px', threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
}
