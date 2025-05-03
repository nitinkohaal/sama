let nav = document.getElementById('nav');


let lastScrollTop = 0;
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (isScrolling) return;
    isScrolling = true;
    window.requestAnimationFrame(function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          
            gsap.to(nav, { duration: 0.5, top: "-130px" });
        } else {
            gsap.to(nav, { duration: 0.5, top: "0px" });
        }
        lastScrollTop = st;
        isScrolling = false;
    });
});

  const progressCircle = document.querySelector('.progress-ring-circle');
  const scrollUpBtn = document.getElementById('scroll-up');
  const radius = progressCircle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  progressCircle.style.strokeDasharray = `${circumference}`;
  progressCircle.style.strokeDashoffset = `${circumference}`;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setProgress(scrollPercent);

    // Toggle visibility
    if (scrollTop > 100) {
      scrollUpBtn.classList.add('show');
    } else {
      scrollUpBtn.classList.remove('show');
    }
  });

  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


// serch bike 


  // const brandSelect = document.getElementById('bike-brand');
  // const modelSelect = document.getElementById('bike-model');

  // brandSelect.addEventListener('change', function () {
  //   const selectedBrand = this.value;
  //   if (!selectedBrand) return;

  //   fetch('https://mocki.io/v1/69c0b6a8-5a0a-4d7e-8c17-118d81ff3171') // Replace with your API link
  //     .then(response => response.json())
  //     .then(data => {
  //       // Clear old options
  //       modelSelect.innerHTML = '<option value="">Bike model</option>';

  //       // Populate new models
  //       if (data[selectedBrand]) {
  //         data[selectedBrand].forEach(model => {
  //           const option = document.createElement('option');
  //           option.value = model;
  //           option.textContent = model;
  //           modelSelect.appendChild(option);
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching bike models:', error);
  //     });
  // });
