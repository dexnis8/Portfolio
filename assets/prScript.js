//  Carousel Js

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: true,
    },
    600: {
      items: 1,
      nav: false,
      loop: true,
    },
    1000: {
      items: 1,
      nav: false,
      loop: true,
    },
  },
});

(function ($) {
  $.fn.replaceClass = function (pFromClass, pToClass) {
    return this.removeClass(pFromClass).addClass(pToClass);
  };
})(jQuery);

var owl = $(".owl-carousel");
owl.owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
  $(".stop").removeClass("active");
  $(".play").addClass("active");
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
  $(".play").removeClass("active");
  $(".stop").addClass("active");
});
owl.trigger("play.owl.autoplay", [5000]);

// //////////////////////////

// Accordion js
$(document).ready(function () {
  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
});

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

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

