// loader
setTimeout(() => {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");
  
  loader.style.display = "none";
  content.style.display = "block";
  
  // AOS
  AOS.init();
}, 0);

// topnav
const mnnu = document.querySelector("#menu");
const topnav = document.querySelector("#topnav");
const links = document.querySelectorAll(".navlink");

menu.addEventListener("click", () => {
  topnav.classList.toggle("active");
  
  // if change icon
  if (topnav.classList.contains("active")) {
    menu.className = "fa-solid fa-xmark";
    document.body.classList.add("no-scroll");
  } else {
    menu.className = "fa-solid fa-bars";
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {
    topnav.classList.remove("active");
    
    // if change icon
    if (topnav.classList.contains("active")) {
      menu.className = "fa-solid fa-xmark";
    } else {
      menu.className = "fa-solid fa-bars";
    }
  });
});

// navigation scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  
  // if
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#C5A880";
  } else {
    navbar.style.backgroundColor = "";
  }
});

// button to top
window.addEventListener("scroll", () => {
  const button = document.querySelector("#top");
  
  // if
  if (window.scrollY > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

function topButton() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
}

// form validation
function message() {
  // input field
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  const password = document.querySelector("#password").value;

  // error message
  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");
  const messageError = document.querySelector("#messageError");
  const passwordError = document.querySelector("#passwordError");

  // clear previous error message
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  messageError.innerHTML = "";
  passwordError.innerHTML = "";

  // validation
  if (name === "") {
    nameError.innerHTML = "Input your full name first.";
  }
  
  if (email === "") {
    emailError.innerHTML = "Input your email first.";
  } else if (!email.includes("@")) {
    emailError.innerHTML = "Invalid email address. It must contain '@'.";
  }
  
  if (password === "") {
    passwordError.innerHTML = "Input your password first.";
  } else if (password.length < 12) {
    passwordError.innerHTML = "Enter a password at least 12 characters.";
  }
  
  if (message === "") {
    messageError.innerHTML = "Input your message first.";
  } else if (message.length < 12) {
    messageError.innerHTML = "Enter a message at least 13 characters.";
  }
  
  // timeout
  setTimeout(function() {
    // clear input
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#message").value = "";
    
    // clear message
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";
    passwordError.innerHTML = "";
  }, 3000);
}