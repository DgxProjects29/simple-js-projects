const loginModal = document.getElementById("simple-modal");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");

document.getElementById("open-modal-button").addEventListener("click", () => {
  loginModal.classList.add("active-simple-modal");
});

document.getElementById("btn-close").addEventListener("click", () => {
  loginModal.classList.remove("active-simple-modal");
});

document.getElementById("modal-login-button").addEventListener("click", () => {
  document.getElementById("userholder").innerHTML = usernameInput.value;
  document.getElementById("passholder").innerHTML = passwordInput.value;
  loginModal.classList.remove("active-simple-modal");
});
