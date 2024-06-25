document.addEventListener('DOMContentLoaded', () => {
    // Animate the welcome section text
    gsap.from("#welcome-section h1", {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: "power3.out"
    });
  
    // Animate project tiles on load
    gsap.to(".project-tile", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      stagger: 0.2
    });
  
    // Add hover effect to project tiles
    const projectTiles = document.querySelectorAll('.project-tile');
    projectTiles.forEach(tile => {
      tile.addEventListener('mouseenter', () => {
        gsap.to(tile, {
          y: -10,
          duration: 0.5,
          ease: "power1.inOut"
        });
      });
  
      tile.addEventListener('mouseleave', () => {
        gsap.to(tile, {
          y: 0,
          duration: 0.5,
          ease: "power1.inOut"
        });
      });
    });
  });
  