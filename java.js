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



  // carasoul card 



  
    // const track = document.getElementById("carousel-track");
    // const cards = document.querySelectorAll(".card1");
    //  const dotsContainer = document.getElementById("carousel-dots");
    // const cardWidth = cards[0].offsetWidth ;

    // const totalCards = cards.length;
    // let position = 0;

    //   // Create dots
    // for (let i = 0; i < totalCards; i++) {
    //   const dot = document.createElement("div");
    //   dot.classList.add("dot");
    //   if (i === 0) dot.classList.add("active");
    //   dotsContainer.appendChild(dot);
    // }

    // const dots = document.querySelectorAll(".dot");


    // function moveSlide(direction) {
    //   const totalCards = cards.length;

    //   position += direction;

    //   if (position < 0) {
    //     position = totalCards - 1;
    //   } else if (position >= totalCards) {
    //     position = 0;
    //   }

    //   track.style.transform = `translateX(-${position * cardWidth}px)`;
    //   // Update dot active state
    //   dots.forEach(dot => dot.classList.remove("active"));
    //   dots[position].classList.add("active");

    // }


  document.querySelectorAll('.carousel-container').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const cards = carousel.querySelectorAll('.card1');
    const dotsContainer = carousel.querySelector('.dots');
    const prevBtn = carousel.querySelector('.btn-prev');
    const nextBtn = carousel.querySelector('.btn-next');

    const cardWidth = cards[0].offsetWidth;

    let position = 0;

    // Create dots
    cards.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function moveSlide(direction) {
      const totalCards = cards.length;
      position += direction;

      console.log(position);

      if (position < 0) position = totalCards - 1;
      else if (position >= totalCards) position = 0;

      // Animate with GSAP
      gsap.to(track, {
        x: -position * cardWidth,
        duration: 0.3,
      });

      // Update dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[position].classList.add('active');
    }

    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));
  });



  
  // FAQ accordion


  document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentNode;
                item.classList.toggle('active');
                
                // Close other open items
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });



        
  //  <section class="faq-container container-fluid">

  //   <div class="faq-list container  ">
  //     <div class="faq-header my-2 my-md-5">

  //       <h2 class="faq-h2">Frequently Asked Questions</h2>
  //     </div>

  //     <div class="faq-item">
  //       <div class="faq-question">
  //         <h3>Are these accessories compatible with my Royal Enfield model?</h3>
  //       </div>
  //       <div class="faq-answer">
  //         <p>Yes! Most products list compatible models (e.g., Classic 350, Himalayan) in the description. For specific
  //           compatibility, contact our support team via WhatsApp.</p>
  //       </div>
  //     </div>

  //     <div class="faq-item">
  //       <div class="faq-question">
  //         <h3>What's your delivery time?</h3>
  //       </div>
  //       <div class="faq-answer">
  //         <p>Standard shipping takes 3-7 days in India and 7-15 days internationally. Express shipping options are
  //           available at checkout.</p>
  //       </div>
  //     </div>

  //     <div class="faq-item">
  //       <div class="faq-question">
  //         <h3>Do you offer installation guides for accessories?</h3>
  //       </div>
  //       <div class="faq-answer">
  //         <p>Most accessories come with DIY guides. For complex installations, we recommend professional help or refer
  //           to our YouTube tutorials.</p>
  //       </div>
  //     </div>

  //     <div class="faq-item">
  //       <div class="faq-question">
  //         <h3>What if the product doesn't fit my bike?</h3>
  //       </div>
  //       <div class="faq-answer">
  //         <p>We offer 7-day returns for unused items in original packaging. Check sizing charts or contact us before
  //           ordering to ensure perfect fitment.</p>
  //       </div>
  //     </div>

  //     <div class="faq-item">
  //       <div class="faq-question">
  //         <h3>Can I return an item?</h3>
  //       </div>
  //       <div class="faq-answer">
  //         <p>Yes! We offer 7-day returns for unused items in original packaging. Check sizing charts or contact us
  //           before ordering to ensure perfect fitment.</p>
  //       </div>


  //     </div>

  //     <div class="faq-item">
  //       <div class="faq-question">
  //         <h3>Do you offer international shipping?</h3>
  //       </div>
  //       <div class="faq-answer">
  //         <p>Yes! We ship worldwide. Shipping costs and delivery times vary by location. Check our shipping policy for
  //           details.</p>
  //       </div>
  //     </div>

  //     <div class="faq-item">
  //       <div class="faq-question">
  //         <h3>What payment methods do you accept?</h3>
  //       </div>
  //       <div class="faq-answer">
  //         <p>We accept major credit cards, PayPal, and Cash on Delivery (COD) for Indian orders. International orders
  //           require prepayment via PayPal/credit card.</p>
  //       </div>
  //     </div>

  // </section>


    document.querySelectorAll('.footer-acc').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentNode;
                item.classList.toggle('active');
                
                // Close other open items
                document.querySelectorAll('.footer-item').forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });