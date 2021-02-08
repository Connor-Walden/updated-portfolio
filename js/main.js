// Tell GSAP it is using the scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for the animations to take place
var timeline = gsap.timeline();

// Everything below the navbar
timeline.from('.content', {
  x: -50,
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut
});

// These elements want to pop in slightly offset
timeline.from('.stagger1', {
  opacity: 0,
  y: 50,
  stagger: .3,
  ease: Power4.easeOut,
  duration: 2
}, "-=1.5");

// Animates the svg I created in Adobe XD 
timeline.from('.hero-design', {
  opacity: 0,
  y: 50,
  ease: Power4.easeOut,
  duration: 1
}, "-=2");

// Animations for portfolio section
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