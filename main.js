window.addEventListener("DOMContentLoaded", (event) => {
  const options = document.querySelectorAll(".features__options--item");
  options.forEach((item) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("active");
      }
      item.classList.add("active");
    });
  });

  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".navbar__logo");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 50);
    logo.style.filter = "brightness(1)";
    if (window.scrollY < 100 && window.innerWidth > 768) {
      logo.style.filter = "brightness(10)";
    }
  });
  const checkbox = document.querySelector(".nav");
  const labelDrop = document.querySelector(".navbar__nav__icon");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      labelDrop.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      labelDrop.innerHTML = '<i class="fas fa-bars">';
    }
  });
  let slideCount;
  const width = window.innerWidth;
  if (width >= 1200) {
    slideCount = 5;
  } else if (width < 1200 && width >= 768) {
    slideCount = 3;
  } else {
    slideCount = 1;
  }
  var swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: slideCount,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 2000,
    },
  });

  var swiper = new Swiper(".swipper--preview", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
  const popup = document.querySelector(".preview__video--popup");
  const video = document.querySelector(".video");
  const toggle = document.querySelector(".video span");
  popup.addEventListener("click", () => {
    video.classList.toggle("active");
  });
  /* GSAP */
  gsap.from(".header__left", {
    opacity: 0.5,
    duration: 1.2,
    y: -50,
    stagger: 0.6,
  });
  gsap.from(".header__right", {
    opacity: 0.5,
    duration: 1.2,
    x: 40,
    stagger: 0.6,
  });
  gsap.from(".features__card__item--left", {
    scrollTrigger: ".features__card__item--left",
    opacity: 0.7,
    duration: 1.2,
    x: -40,
    stagger: 0.6,
  });
  gsap.from(".features__card__item--right", {
    scrollTrigger: ".features__card__item--right",
    opacity: 0.7,
    duration: 1.2,
    x: 40,
    stagger: 0.6,
  });
  gsap.from(".features__card__item--mid", {
    scrollTrigger: ".features__card__item--mid",
    opacity: 0.7,
    duration: 1.2,
    y: 30,
    stagger: 0.6,
  });
  gsap.from(".details-img1", {
    scrollTrigger: ".details-img1",
    opacity: 0,
    duration: 1.2,
    y: 60,
    stagger: 0.6,
  });
  gsap.from(".details-content1", {
    scrollTrigger: ".details-content1",
    opacity: 0,
    duration: 1.2,
    x: 60,
    stagger: 0.6,
  });
  gsap.from(".details-img2", {
    scrollTrigger: ".details-img2",
    opacity: 0,
    duration: 1.2,
    x: 50,
    stagger: 0.6,
  });
  gsap.from(".details-content2", {
    scrollTrigger: ".details-content2",
    opacity: 0,
    duration: 1.2,
    y: -60,
    stagger: 0.6,
  });
  gsap.from(".features-1", {
    scrollTrigger: ".features-1",
    opacity: 0,
    duration: 0.5,
    stagger: 1,
  });
  gsap.from(".features-2", {
    scrollTrigger: ".features-2",
    opacity: 0,
    duration: 1.5,
    stagger: 1,
  });
  gsap.from(".features-3", {
    scrollTrigger: ".features-3",
    opacity: 0,
    duration: 2.5,
    stagger: 1,
  });
  gsap.from(".preview__video", {
    scrollTrigger: ".preview__video",
    opacity: 0,
    duration: 1,
    x: -50,
    stagger: 0.8,
  });
  gsap.from(".preview__area", {
    scrollTrigger: ".preview__area",
    opacity: 0,
    duration: 1,
    x: 50,
    stagger: 0.8,
  });
  gsap.from(".info__user--counter", {
    scrollTrigger: ".info__user--counter",
    opacity: 0,
    duration: 0.5,
    y: 50,
    stagger: 0.8,
  });
  gsap.from(".info-p", {
    scrollTrigger: ".info-p",
    opacity: 0,
    duration: 1.5,
    y: 50,
    stagger: 0.8,
  });
  gsap.from(".info__user--btn", {
    scrollTrigger: ".info__user--btn",
    opacity: 0,
    duration: 2.5,
    y: 50,
    stagger: 0.8,
  });
  gsap.from(".more-1", {
    scrollTrigger: ".more-1",
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.8,
  });
  gsap.from(".more-2", {
    scrollTrigger: ".more-2",
    opacity: 0,
    y: 40,
    duration: 1.5,
    stagger: 0.8,
  });
  gsap.from(".more-3", {
    scrollTrigger: ".more-3",
    opacity: 0,
    y: 50,
    duration: 2.5,
    stagger: 0.8,
  });
});
