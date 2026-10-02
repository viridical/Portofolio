"use strict";
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = menuIcon.querySelector("i");
    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }
    else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});
const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const subjectInput = document.getElementById("subjectInput");
const messageInput = document.getElementById("messageInput");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;
    const whatsappNumber = "6285171201182";
    const whatsappMessage = `
Halo Viridical,

Nama: ${name}
Email: ${email}
Subject: ${subject}

Pesan:
${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
});
//# sourceMappingURL=Porto.js.map