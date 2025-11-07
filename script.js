

$('.hamburger').click(function(){
    $('.offcanvas-menu').fadeIn();
    TweenMax.to(".offcanvas", 1, {
        width: "100%",
        opacity: "1",
        ease: Expo.easeInOut
     }, 0.2);
});

$('.user').click(function(){
    $('.userpage-menu').fadeIn();
    TweenMax.to(".userpage", 1, {
        width: "100%",
        opacity: "1",
        ease: Expo.easeInOut
     }, 0.2)
});

$('.close').click(function(){
    $('.offcanvas-menu').fadeOut();
    TweenMax.to(".offcanvas", 1, {
        width: "0%",
        opacity: "0",
        ease: Expo.easeOut
    }, 0.2)
});


$('.userclose').click(function(){
    $('.userpage-menu').fadeOut();
    TweenMax.to(".userpage", 1, {
        width: "0%",
        opacity: "0",
        ease: Expo.easeOut
     }, 0.2)
});

$('.seacrh').click(function(){
    $('.searchpage-menu').fadeIn();
    TweenMax.to(".searchpage", 1, {
        height: "8vh",
        opacity: "1",
        ease: Expo.easeIn
     }, 0.2)
});

$('.searchclose').click(function(){
    $('.searchpage-menu').fadeOut();
    TweenMax.to(".searchpage", 1, {
        height: "0vh",
        opacity: "0",
        ease: Expo.easeOut
     }, 0.2)
});
$('.search-click').click(function(){
    $('.searchpage-menu').fadeOut();
    TweenMax.to(".searchpage", 1, {
        height: "0vh",
        opacity: "0",
        ease: Expo.easeOut
     }, 0.2)
});

$('.hamburger').click(function(){
    TweenMax.from(".offcanvas-body ul li a", 2, {
        opacity: 0,
        y: -30,
        ease: Power3.easeInOut
     }, 0.1)
})

const sliderContainer = document.querySelector('.slider-container');
const sliderContent = document.querySelector('.slider-content');
const leftArrow = document.querySelector('.slider-left-arrow');
const rightArrow = document.querySelector('.slider-right-arrow');

leftArrow.addEventListener('click', scrollLeft);
rightArrow.addEventListener('click', scrollRight);

function scrollLeft() {
  if (sliderContainer.scrollLeft > 0) {
    sliderContainer.scrollLeft -= 1100;
  }
}

function scrollRight() {
  if (sliderContainer.scrollLeft < (sliderContent.scrollWidth - sliderContainer.clientWidth)) {
    sliderContainer.scrollLeft += 1100;
  }
}

const feedbackContainer = document.querySelector('.feedback-container');
const feedbackContent = document.querySelector('.feedback-content');
const leftArrows = document.querySelector('.slider-left-arrows');
const rightArrows = document.querySelector('.slider-right-arrows');

leftArrows.addEventListener('click', scrollLefts);
rightArrows.addEventListener('click', scrollRights);

function scrollLefts() {
  if (feedbackContainer.scrollLeft > 0) {
    feedbackContainer.scrollLeft -= 1100;
  }
}

function scrollRights() {
  if (feedbackContainer.scrollLeft < (feedbackContent.scrollWidth - feedbackContainer.clientWidth)) {
    feedbackContainer.scrollLeft += 1100;
  }
}




gsap.registerPlugin(ScrollTrigger);
gsap.from(".wonderfullpage img", {
  opacity:0,
  scale: 1.5,
  scrollTrigger: {
    trigger: ".wonderfullpage img",
    start: "top 20%",
    end:'top -100%',
    scrub: 1,
    pin:true,
  },
  ease: "none"
});
  gsap.to("#airpodsleft", {
    scale: 4,
    x: -800,
    scrollTrigger: {
      trigger: "#triggerairpods1",
      start: "top 80%",
      scrub: 2,
    },
    ease: "none"
  });
  gsap.to("#airpodsright", {
    scale: 4,
    x: 800,
    scrollTrigger: {
      trigger: "#triggerairpods1",
      start: "top 80%",
      scrub: 2
    },
    ease: "none"
  });
  gsap.to("#triggerairpods1", {
    scale: 2,
    scrollTrigger: {
      trigger: "#triggerairpods1",
      start: "top 90%",
      scrub: 2
    },
    ease: "none"
  });
  gsap.to(".airpodspage p", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#triggerairpods1",
      start: "top 80%",
      end: "top 80%",
      scrub: 2
    },
    ease: "none"
  });
    gsap.from(".image-main img", {
    scale:2,
    scrollTrigger: {
      trigger: ".image-main",
      start: "top 30%",
      end: 'top 0%',
      scrub: 2,
      pin:true,
    },
  });
  gsap.from(".macbookpage span", {
    opacity: 0,
    y:-50,
    scale:0.8,
    scrollTrigger: {
      trigger: ".macbookpage span",
      start: "top 60%",
      end: 'top 30%',
      scrub: 2,
      markers: true,
    }
  });
