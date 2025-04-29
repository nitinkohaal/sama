let nav = document.getElementById('nav');


let lastScrollTop = 0;
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      let scrollTop = window.scrollY;

      if (scrollTop > 300 && lastScrollTop <= 300) {
        // Scrolling Down - apply background and shrink padding
        gsap.to(nav, {
          backgroundColor: "var(--white-shade)",
          duration: 0.5,
          overwrite: "auto",
          ease: "power2.out"
        });

        gsap.to('.nav-bar', {
          padding: "20px 0px",
          duration: 0.5,
          overwrite: "auto",
          ease: "power2.out"
        });
      } else if (scrollTop <= 300 && lastScrollTop > 300) {
        // Scrolling Up - reset background and padding
        gsap.to(nav, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          duration: 0.5,
          overwrite: "auto",
          ease: "power2.out"
        });

        gsap.to('.nav-bar', {
          padding: "40px 0px",
          duration: 0.5,
          overwrite: "auto",
          ease: "power2.out"
        });
      }

      lastScrollTop = scrollTop;
      isScrolling = false;
    });

    isScrolling = true;
  }
});
