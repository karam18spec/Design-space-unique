# Design Space — Website project

Responsive digital agency website built with HTML5, CSS3 and JavaScript.

## Run
Extract the ZIP and open `index.html` in a modern browser. A local server (for example VS Code Live Server) is recommended. Internet access is required for CDN-hosted Three.js, GSAP, AOS, Swiper and Google Fonts.

## Included
- Supplied Design Space logo lockup and navy/orange brand palette.
- English (default), Hindi and Punjabi language switcher; choice persists in localStorage.
- Sticky navigation and animated mobile drawer (overlay, close button, link close and Escape key).
- Three.js abstract hero artwork, GSAP/ScrollTrigger and AOS reveal effects.
- Seven service cards, categorized technology list, portfolio filters and Swiper testimonial slider.
- Contact form validation and responsive layouts with reduced-motion support.

## Before publishing
- The contact form currently performs browser-side validation only. It does **not** send or store enquiries. Connect the submit handler in `js/main.js` to a secure backend or email service.
- Replace footer contact/social placeholders with verified business details.
- Portfolio tiles are illustrative concept demos, not genuine client projects. Testimonials are demo placeholders, not real reviews.
- CDN libraries require an internet connection. Self-host them if offline use is required.

## Structure
`index.html`, `css/style.css`, `css/responsive.css`, `js/main.js`, `js/translations.js`, `js/animations.js`, `js/three-scene.js`, `js/swiper-init.js`, `assets/logo/design-space-logo.png`.
