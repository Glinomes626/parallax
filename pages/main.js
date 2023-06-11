import "../styles/global.scss";
import "./index.html";
import { gsap } from "../library/GSAP/gsap.min";
import { ScrollTrigger } from "../library/GSAP/ScrollTrigger.min";
import { ScrollSmoother } from "../library/GSAP/ScrollSmoother.min";

document.addEventListener('scroll', () => {
    document.body.style.setProperty(`--scrollTop`, `${window.scrollY}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
});





