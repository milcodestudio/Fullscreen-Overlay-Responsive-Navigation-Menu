// Variables

const menuOpn = document.querySelector(".menu-open");
const menuCls = document.querySelector(".menu-close");
const fullNav = document.querySelector(".container");
const navListItems = document.querySelectorAll(".item");
const socials = document.querySelectorAll(".social-link");

// GSAP Animation

let tlA = gsap.timeline({ paused: true }, { defaults: { ease: "expo.Inout" } });

tlA
  .to(fullNav, {
    height: "100vh",
    zIndex: 99999,
    duration: 1,
  })
  .to(navListItems, { y: 0, opacity: 1, stagger: 0.2 }, "-=.5")
  .to(socials, { opacity: 1 }, "-=.5");

// Events

menuOpn.addEventListener("click", () => {
  tlA.play();
});
menuCls.addEventListener("click", () => {
  tlA.reverse();
});
