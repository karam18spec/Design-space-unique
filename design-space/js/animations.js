(() => { const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches; if (window.AOS) AOS.init({ duration: 700, once: true, offset: 65, disable: reduced }); if (!window.gsap || reduced) return; gsap.registerPlugin(ScrollTrigger); gsap.from('.hero-copy .eyebrow', { y: 15, opacity: 0, duration: .7 }); gsap.from('.hero h1', { y: 30, opacity: 0, duration: 1, delay: .1, ease: 'power3.out' }); gsap.from('.hero-copy .lead,.hero-copy .actions', { y: 18, opacity: 0, duration: .8, delay: .3, stagger: .1 }); gsap.from('.hero-art', { opacity: 0, scale: .92, duration: 1.2, delay: .2 }); gsap.utils.toArray('.section-head h2,.about h2,.why h2,.contact h2').forEach(el => gsap.from(el, { y: 25, opacity: 0, duration: .8, scrollTrigger: { trigger: el, start: 'top 88%' } })) })();
document.addEventListener("DOMContentLoaded", function () {

    // Select orange rotating shape
    const orangeShape = document.querySelector(".shape-a");

    if (!orangeShape || typeof gsap === "undefined") {
        return;
    }

    // Smooth infinite rotation
    gsap.to(orangeShape, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none"
    });

});