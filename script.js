const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#password-confirm");

let userArray = JSON.parse(localStorage.getItem("user")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUser = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  userArray.push(newUser);
  console.log(userArray);
  localStorage.setItem("user", JSON.stringify(userArray));

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
});
const lightMode = document.querySelector("#lightmode-toggle");

if (localStorage.getItem("lightMode") === "enabled") {
  document.body.classList.add("light");
  lightMode.checked = true;
}

lightMode.addEventListener("change", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    localStorage.setItem("lightMode", "enabled");
  } else {
    localStorage.setItem("lightMode", "disabled");
  }
});
