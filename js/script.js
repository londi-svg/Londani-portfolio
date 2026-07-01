

const roles = [

    "Business Analysis",

    "Cybersecurity",

    "Cloud Computing",

    "Enterprise Systems",

    "Data Analytics",

    "Information Systems"

];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!deleting){

        typingText.textContent =
        currentRole.substring(0,charIndex++);

        if(charIndex > currentRole.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingText.textContent =
        currentRole.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 90);

}

typeEffect();