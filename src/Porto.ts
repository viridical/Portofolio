const menuIcon = document.getElementById("menu-icon") as HTMLElement;
const navLinks = document.querySelector(".nav-links") as HTMLElement;

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuIcon.querySelector("i") as HTMLElement;
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
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

const contactForm = document.getElementById("contactForm") as HTMLFormElement;
const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const emailInput = document.getElementById("emailInput") as HTMLInputElement;
const subjectInput = document.getElementById(
  "subjectInput",
) as HTMLInputElement;
const messageInput = document.getElementById(
  "messageInput",
) as HTMLTextAreaElement;

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
