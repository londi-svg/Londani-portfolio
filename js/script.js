
// =========================
// Hero Typing Animation
// =========================

const roles = [
    "Cloud Computing",
    "Cybersecurity",
    "Business Analysis",
    "Enterprise Technology",
    "Data Analytics"
];


const typingText = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent = currentRole.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

            charIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();
// =========================
// Skills Carousel
// =========================

const cards = document.querySelectorAll(".skill-card");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const wrapper = document.querySelector(".cards-wrapper");

let currentCard = 0;

if (cards.length > 0) {

    function showCard(index){

        cards.forEach(card => card.classList.remove("active"));

        if(dots.length){
            dots.forEach(dot => dot.classList.remove("active"));
        }

        cards[index].classList.add("active");

        if(dots.length){
            dots[index].classList.add("active");
        }

    }

    function nextCard(){

        currentCard = (currentCard + 1) % cards.length;

        showCard(currentCard);

    }

    function previousCard(){

        currentCard = (currentCard - 1 + cards.length) % cards.length;

        showCard(currentCard);

    }

    if(nextBtn){

        nextBtn.addEventListener("click", nextCard);

    }

    if(prevBtn){

        prevBtn.addEventListener("click", previousCard);

    }

    let autoSlide = setInterval(nextCard,7000);

    if(wrapper){

        wrapper.addEventListener("mouseenter",()=>{

            clearInterval(autoSlide);

        });

        wrapper.addEventListener("mouseleave",()=>{

            autoSlide = setInterval(nextCard,7000);

        });

    }

    if(dots.length){

        dots.forEach((dot,index)=>{

            dot.addEventListener("click",()=>{

                currentCard = index;

                showCard(currentCard);

            });

        });

    }

    showCard(currentCard);

}