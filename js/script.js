

// =========================
// Skills Carousel
// =========================
const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".skill-card");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

let currentCard = 0;


function showCard(index){

    cards.forEach(card =>{

        card.classList.remove("active");

    });

    dots.forEach(dot =>{

        dot.classList.remove("active");

    });

    cards[index].classList.add("active");

    dots[index].classList.add("active");

}

function nextCard(){

    currentCard++;

    if(currentCard >= cards.length){

        currentCard = 0;

    }

    showCard(currentCard);

}

function previousCard(){

    currentCard--;

    if(currentCard < 0){

        currentCard = cards.length - 1;

    }

    showCard(currentCard);

}

nextBtn.addEventListener("click", nextCard);

prevBtn.addEventListener("click", previousCard);

let autoSlide = setInterval(nextCard, 7000);

const wrapper = document.querySelector(".cards-wrapper");

wrapper.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

wrapper.addEventListener("mouseleave",()=>{

    autoSlide = setInterval(nextCard,7000);

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentCard = index;

        showCard(currentCard);

    });

});