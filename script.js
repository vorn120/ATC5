/* =====================================
   MOBILE MENU
===================================== */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================
   MOUSE GLOW
===================================== */

const mouseGlow =
    document.querySelector(".mouse-glow");


document.addEventListener("mousemove", event => {

    mouseGlow.style.left =
        event.clientX + "px";

    mouseGlow.style.top =
        event.clientY + "px";

});


/* =====================================
   SCROLL ANIMATION
===================================== */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


window.addEventListener(
    "load",
    revealOnScroll
);


/* =====================================
   3D RESULT CARDS
===================================== */

const resultCards =
    document.querySelectorAll(".result-card");


resultCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y - rect.height / 2)
            / (rect.height / 2)) * -5;


        const rotateY =
            ((x - rect.width / 2)
            / (rect.width / 2)) * 5;


        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================
   DESIGNER 3D CARDS
===================================== */

const designerCards =
    document.querySelectorAll(".designer-card");


designerCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y - rect.height / 2)
            / (rect.height / 2)) * -5;


        const rotateY =
            ((x - rect.width / 2)
            / (rect.width / 2)) * 5;


        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================
   FEEDBACK
===================================== */

const feedbackForm =
    document.getElementById("feedbackForm");


const feedbackMessage =
    document.getElementById("feedbackMessage");


feedbackForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        const selectedRating =
            document.querySelector(
                'input[name="rating"]:checked'
            );


        const rating =
            selectedRating
                ? selectedRating.value
                : 0;


        feedbackMessage.innerHTML =

            `THANK YOU, ${name.toUpperCase()}! ⭐
             <br>
             Your ${rating}-star feedback was received.`;


        feedbackForm.reset();

    }
);