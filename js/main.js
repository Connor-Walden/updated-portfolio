gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline();

timeline.from('.content', {
  y: '-30%',
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
});

timeline.from('.stagger1', {
  opacity: 0,
  y: -50,
  stagger: .3,
  ease: Power4.easeOut,
  duration: 2
}, "-=1.5");

timeline.from('.hero-design', {
  opacity: 0,
  y: 50,
  ease: Power4.easeOut,
  duration: 1
}, "-=2");

gsap.from('.transition2', {
  scrollTrigger: {
    trigger: '.transition2',
    start: 'top bottom'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: .3
});

gsap.from('.transition3', {
  scrollTrigger: {
    trigger: '.transition3',
    start: 'top center'
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: .3
});