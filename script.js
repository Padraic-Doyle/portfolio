const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50, 50, 55, 34];

window.addEventListener("scroll", () => {
    mainFn();
});

const mainFn = () => {


    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
        }
    });

    // if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    //     document.querySelectorAll(".progress-percent").forEach((el, i) => {
    //         el.style.width = `${progressBarPercents[i]}%`;
    //         el.previousElementSibling.firstElementChild.textContent =
    //             progressBarPercents[i];
    //     });
    // }
};

document.querySelectorAll(".progress-percent").forEach((el, i) => {
    el.style.width = `${progressBarPercents[i]}%`;
    el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
});

//ainFn();

window.addEventListener("resize", () => {
    window.location.reload();
});