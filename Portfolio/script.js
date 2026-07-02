const menu=document.querySelector(".hamburger");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};
// Typing Effect

const words = [
  "Web Developer",
  "Frontend Developer",
  "UI Designer",
  "JavaScript Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

  const current = words[wordIndex];

  if (!deleting) {

    typing.textContent = current.substring(0, letterIndex++);

    if (letterIndex > current.length) {

      deleting = true;

      setTimeout(type, 1200);

      return;

    }

  } else {

    typing.textContent = current.substring(0, letterIndex--);

    if (letterIndex === 0) {

      deleting = false;

      wordIndex = (wordIndex + 1) % words.length;

    }

  }

  setTimeout(type, deleting ? 60 : 120);

}

type();
// =======================
// Scroll Reveal Animation
// =======================

const revealElements = document.querySelectorAll(
".about,.skills,.info-box,.skill"
);

window.addEventListener("scroll",()=>{

revealElements.forEach((el)=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-100){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

});

revealElements.forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="all .8s ease";

});
// Timeline Animation

const timelineItems = document.querySelectorAll(".timeline-item");

function animateTimeline(){

    timelineItems.forEach(item=>{

        const position=item.getBoundingClientRect().top;

        if(position < window.innerHeight-100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";
        }

    });

}

timelineItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(80px)";
    item.style.transition=".8s ease";
});

window.addEventListener("scroll",animateTimeline);
// Contact Form

document.querySelector(".contact-form").addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

e.target.reset();

});
/* ==========================
CURRENT YEAR
========================== */

document.getElementById("year").textContent =
new Date().getFullYear();

/* ==========================
SCROLL TO TOP
========================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};/*=========================
MOUSE GLOW
=========================*/

const glow=document.getElementById("mouse-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});