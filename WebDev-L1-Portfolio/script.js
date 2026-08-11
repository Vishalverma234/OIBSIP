alert("JavaScript is working!");
// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a nav link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});



// ===========================
// ACTIVE NAVBAR LINK
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const revealElements = document.querySelectorAll(
    ".hero, .about, .skill-card, .project-card, .contact-container"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===========================
// CURRENT YEAR IN FOOTER (Optional)
// ===========================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Vishal Verma | Built with HTML, CSS & JavaScript`;
}
