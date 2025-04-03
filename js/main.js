
AOS.init({
  // Global settings:

  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// for onclick hide the nav 
let navbar =document.querySelectorAll('.nav-link');

let navCollapse=document.querySelector('.navbar-collapse.collapse');

navbar.forEach(function (a){
  a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
  })

  
})




    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 70) {
            navbar.classList.add("show-navbar");
        } else {
            navbar.classList.remove("show-navbar");
        }
    });
