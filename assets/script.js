"use strict";

// Elements
const menuBar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".navbar .container .nav-lists");
const menuIcon = document.querySelector(".navbar .logo .menu-bar i");
const navbar = document.querySelector("nav.navbar");
const mySkills = document.querySelector(".skills .container .cards");
const projectCards = document.querySelector(
  ".projects .container .project-cards"
);
//  Page Data

const pageData = {
  mySkills: [
    {
      logo: "./assets/images/html.png",
      languageName: "HTML5",
    },
    {
      logo: "./assets/images/css.png",
      languageName: "CSS3",
    },
    {
      logo: "./assets/images/js.png",
      languageName: "JavaScript",
    },
    {
      logo: "./assets/images/react.png",
      languageName: "React",
    },
    {
      logo: "./assets/images/bootstrap.png",
      languageName: "Bootstrap",
    },
    {
      logo: "./assets/images/styledComp.jpeg",
      languageName: "Styled-Com...",
    },
    {
      logo: "./assets/images/jquery.png",
      languageName: "jQuery",
    },
  ],
  projects: [
    {
      images: [
        {
          img1: "./assets/images/img-1.jpg",
          pageName: "Login",
        },
        {
          img1: "./assets/images/img-2.jpg",
          pageName: "Register",
        },
        {
          img1: "./assets/images/img-3.jpg",
          pageName: "Dashboard",
        },
        {
          img1: "./assets/images/img-4.jpg",
          pageName: "Profile",
        },
      ],
      projectName: "Evapayments",
      siteLink: "https://google.com",
      projectDescrip:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis hic minima fuga ut in unde suscipit asperiores totam error velit eum quam id nam, magni dicta alias quasi porro! Sunt.",
      githubLink: "https://github.com",
    },
    {
      images: [
        {
          img1: "./assets/images/img-1.jpg",
          pageName: "Login",
        },
        {
          img1: "./assets/images/img-2.jpg",
          pageName: "Register",
        },
        {
          img1: "./assets/images/img-3.jpg",
          pageName: "Dashboard",
        },
        {
          img1: "./assets/images/img-4.jpg",
          pageName: "Profile",
        },
      ],
      projectName: "Evapayments",
      siteLink: "https://google.com",
      projectDescrip:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis hic minima fuga ut in unde suscipit asperiores totam error velit eum quam id nam, magni dicta alias quasi porro! Sunt.",
      githubLink: "https://github.com",
    },
    {
      images: [
        {
          img1: "./assets/images/img-1.jpg",
          pageName: "Login",
        },
        {
          img1: "./assets/images/img-2.jpg",
          pageName: "Register",
        },
        {
          img1: "./assets/images/img-3.jpg",
          pageName: "Dashboard",
        },
        {
          img1: "./assets/images/img-4.jpg",
          pageName: "Profile",
        },
      ],
      projectName: "Evapayments",
      siteLink: "https://google.com",
      projectDescrip:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis hic minima fuga ut in unde suscipit asperiores totam error velit eum quam id nam, magni dicta alias quasi porro! Sunt.",
      githubLink: "https://github.com",
    },
    {
      images: [
        {
          img1: "./assets/images/img-1.jpg",
          pageName: "Login",
        },
        {
          img1: "./assets/images/img-2.jpg",
          pageName: "Register",
        },
        {
          img1: "./assets/images/img-3.jpg",
          pageName: "Dashboard",
        },
        {
          img1: "./assets/images/img-4.jpg",
          pageName: "Profile",
        },
      ],
      projectName: "Evapayments",
      siteLink: "https://google.com",
      projectDescrip:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis hic minima fuga ut in unde suscipit asperiores totam error velit eum quam id nam, magni dicta alias quasi porro! Sunt.",
      githubLink: "https://github.com",
    },
  ],
};

// Functions
let clicked = false;
const handleMenuListDisplay = () => {
  if (!clicked) {
    navMenu.style.transform = "translateX(0)";
    menuIcon.classList.replace("fa-bars", "fa-xmark");
    clicked = true;
  } else if (clicked) {
    navMenu.style.transform = "translateX(-100%)";
    menuIcon.classList.replace("fa-xmark", "fa-bars");

    clicked = false;
  }
};
/ /; ///////////////////////////
// Adding Actice class to Nav list
const navLists = document.querySelectorAll(
  ".navbar .container .nav-lists ul li a"
);
// console.log(navLists);

for (let i = 0; i < navLists.length; i++) {
  navLists[i].addEventListener("click", function () {
    // navMenu.style.transform = "translateX(-100%)";
    menuIcon.classList.replace("fa-xmark", "fa-bars");
    clicked = false;
    navLists.forEach((nav) => nav.classList.remove("active"));
    navLists[i].classList.add("active");
  });
}

///////////////////////////////////////
// Sticky navigation: Intersection Observer API
const nav = document.querySelector("nav.navbar");
const header = document.getElementById("heroSec");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    nav.classList.remove("translate");
  } else {
    nav.classList.remove("sticky");
    nav.classList.remove("translate");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

////////////////////////////////
// Close Menu Modal on click navLists
function hideMenubarOnQuery(screenSize) {
  if (screenSize.matches) {
    navLists.forEach((nav) => {
      nav.addEventListener(
        "click",
        () => (navMenu.style.transform = "translateX(-100%)")
      );
    });
  }
}
let currScreenSize = window.matchMedia("(max-width:960px)");
hideMenubarOnQuery(currScreenSize);
// console.log(currScreenSize);
// currScreenSize.addListener( )

//////////////////////////////
//  Dynamic Page Data Rendering
mySkills.innerHTML = pageData.mySkills.map(
  (skill) => ` <div class="card">
  <div class="card-img">
    <img src=${skill.logo} alt=${skill.languageName} />
  </div>
  <div class="card-name"><span>${skill.languageName}</span></div>
  </div>`
);

/* 
projectCards.innerHTML = pageData.projects.map((project, i) => {
  return `

<div class="project-card">
<div class="slider-container">
  <div class="slider">
    <div class="slide">

    
      <img src="./assets/images/img-1.jpg" alt="" />
      <div class="page-name">Dashboard</div>
    </div>
    <div class="slide">
      <img src="./assets/images/img-2.jpg" alt="" />
      <div class="page-name">Register</div>
    </div>
    <div class="slide">
      <img src="./assets/images/img-3.jpg" alt="" />
      <div class="page-name">Landing Page</div>
    </div>
    <div class="slide">
      <img src="./assets/images/img-4.jpg" alt="" />
      <div class="page-name">Login</div>
    </div>
    <div class="dots"></div>
  </div>

  <button class="slider__btn slider__btn--left"></button>
  <button class="slider__btn slider__btn--right"></button>
</div>

<div class="project-name-site">
  <div class="project-name"><h3>Evapayments</h3></div>
  <div class="site">
    <span><a href="#">View Site</a></span>
  </div>
</div>
<div class="project-description">
  <span
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Blanditiis hic minima fuga ut in unde suscipit asperiores
    totam error velit eum quam id nam, magni dicta alias quasi
    porro! Sunt.</span
  >
</div>
<div class="links">
  <div>
    <span><i class="fa-brands fa-github"></i></span>
  </div>
  <div>
    <span><i class="fa-regular fa-eye fa-beat-fade"></i></span>
  </div>
</div>
</div>


`;
});
 */
///////////////////////////////////////
// Slider

// Slider Elements Select

const slide1 = document.querySelectorAll(".slide1");
const dotContainer1 = document.querySelector(".dots.dots1");

const slide2 = document.querySelectorAll(".slide2");
const dotContainer2 = document.querySelector(".dots.dots2");

const slide3 = document.querySelectorAll(".slide3");
const dotContainer3 = document.querySelector(".dots.dots3");

const slide4 = document.querySelectorAll(".slide4");
const dotContainer4 = document.querySelector(".dots.dots4");

const modalSlides = document.querySelectorAll(".modal-slide");
const modalDotContainer = document.querySelector(".modal-dots");
const modalArrLeft = document.querySelector(".modalArrLeft");
const modalArrRight = document.querySelector(".modalArrRight");

const projectSliderImgs = document.querySelectorAll(".pr_img");
const modalImg = document.querySelector(
  ".project-image-modal.container .img img"
);
// console.log(modalImg)
// console.log(projectSliderImgs);
const backdrop = document.querySelector(".backdrop");
const projectImgModal = document.querySelector(".project-image-modal");
const showPrModal = () => {
  backdrop.classList.replace("d-none", "show");
  projectImgModal.classList.replace("hide-visibility", "show-visibility");
};
const hidePrModal = () => {
  backdrop.classList.replace("show", "d-none");
  projectImgModal.classList.replace("show-visibility", "hide-visibility");
};

// Show modal onClick of project image
projectSliderImgs.forEach((img) => {
  img.addEventListener("click", () => {
    // console.log(img.src)
    modalImg.src = img.src;
    showPrModal();
  });
});
// showPrModal()
backdrop.addEventListener("click", hidePrModal);
///////////////////////////////////
//slider function

const slider = function (
  slides,
  dotContainer,
  interval = 5000,
  arrPresent = false,
  btnLeft,
  btnRight
) {
  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  if (arrPresent) {
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  setInterval(nextSlide, interval);
};
// setInterval(slider, 5000);
slider(slide1, dotContainer1, 3000);
slider(slide2, dotContainer2, 4000);
slider(slide3, dotContainer3, 5000);
// slider(modalSlides, modalDotContainer, 5000, true, modalArrLeft, modalArrRight);
// slider(slide4, dotContainer4, 6000); //for the 4th project

// ///////////////////////////////////////////

//Events
menuBar.addEventListener("click", handleMenuListDisplay);

// typeWriter typing about me

var i = 0;
var txt = ``;
var speed = 50; /* The speed/duration of the effect in milliseconds */
const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("typeWritter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
let x = 0;
var txtSpeed = 100;
var typeText = "Developer";
const typeDev = () => {
  if (x < typeText.length) {
    document.querySelector("#typeDev").innerHTML += typeText.charAt(x);
    x++;
    setTimeout(typeDev, txtSpeed);
  }
};
typeDev();

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  const addActiveClassOnScroll = (secNum) => {
    navLists.forEach((list) => list.classList.remove("active"));
    navLists[secNum].classList.add("active");
  };

  if (!entry.isIntersecting) return;
  // console.log(entry.target.classList.contains("section-2"));
  if (entry.target.classList.contains("section-1")) {
    addActiveClassOnScroll(0);
  } else if (entry.target.classList.contains("section-2")) {
    addActiveClassOnScroll(1);
    typeWriter();
  } else if (entry.target.classList.contains("section-3")) {
    addActiveClassOnScroll(2);
  } else if (entry.target.classList.contains("section-4")) {
    addActiveClassOnScroll(3);
  } else if (entry.target.classList.contains("section-5")) {
    addActiveClassOnScroll(4);
  }
  entry.target.classList.remove("section--hidden");
  // observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
//check for Navigation Timing API support
//Scrolling back to hero on page reload
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  document.getElementById("navSec").scrollIntoView({ behavior: "smooth" });
} else {
  console.info("This page is not reloaded");
}

///////////////
//Hero btn actions

document
  .querySelector(".hero-btn-1")
  .addEventListener("click", () =>
    document.querySelector(".section-4").scrollIntoView({ behavior: "smooth" })
  );

document
  .querySelector(".hero-btn-2")
  .addEventListener("click", () =>
    document.querySelector(".section-5").scrollIntoView({ behavior: "smooth" })
  );

// Read More About me

const readMoreBtn = document.querySelector(".read-more");
const abtTxt = document.querySelector(".rm-txt-hide");
const summaryTxt = document.querySelector(".summary");
let isClicked = false;

const showMore = () => {
  if (!isClicked) {
    abtTxt.classList.replace("rm-txt-hide", "rm-txt-show");
    summaryTxt.classList.replace("rm-txt-show", "rm-txt-hide");
    readMoreBtn.textContent = "Summary";
    // isClicked = true;
    isClicked = true;
  } else if (isClicked) {
    abtTxt.classList.replace("rm-txt-show", "rm-txt-hide");
    summaryTxt.classList.replace("rm-txt-hide", "rm-txt-show");
    readMoreBtn.textContent = "Full Details";
    isClicked = false;
  }
};
readMoreBtn.addEventListener("click", showMore);
