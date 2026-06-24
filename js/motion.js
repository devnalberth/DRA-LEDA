(() => {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const revealGroups = [
    { selector: ".hero__content > *", type: "item" },
    {
      selector:
        ".acompanhamento__intro > div:first-child, .beneficits__panel > h2, .beneficits__panel > hr, .como-funciona__header, .depoimentos__header, .faq__eyebrow, .faq__title, .faq__cta > *",
      type: "item",
    },
    {
      selector: ".sobre h2, .sobre__crm, .sobre__paragraphs p",
      type: "text",
    },
    { selector: ".button", type: "item" },
    {
      selector:
        ".acompanhamento__list li, .beneficits__cards li, .como-funciona__cards li, .depoimento-card, .faq__item",
      type: "card",
    },
    {
      selector:
        ".acompanhamento__photos, .sobre__photo-wrapper, .footer__brand, .footer__nav, .footer__map-wrapper, .footer__divider, .footer__bottom",
      type: "media",
    },
  ];

  const targets = [];
  const usedTargets = new Set();
  const parentCounters = new Map();

  revealGroups.forEach(({ selector, type }) => {
    document.querySelectorAll(selector).forEach((target) => {
      if (usedTargets.has(target)) return;

      usedTargets.add(target);
      target.dataset.reveal = type;

      const parent = target.parentElement || document.body;
      const currentIndex = parentCounters.get(parent) || 0;
      parentCounters.set(parent, currentIndex + 1);
      target.style.setProperty("--reveal-index", currentIndex);

      targets.push(target);
    });
  });

  root.classList.add("js-motion");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    }
  );

  targets.forEach((target) => observer.observe(target));
})();
