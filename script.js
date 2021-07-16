const form = document.querySelector("form");
const emailInput = document.querySelector("input");
const errorMessage = document.querySelector("error");

const setError = () => {
  form.classList.add("error");
  form.classList.remove("success");
};

const setSuccess = () => {
  form.classList.remove("error");
  form.classList.add("success");
};

const validateEmail = (email) => {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const checkEmail = () => {
  const emailValue = emailInput.value.trim();
  if (emailValue === "" || !validateEmail(emailValue)) {
    setError();
  } else if (validateEmail(emailValue)) {
    setSuccess();
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkEmail();
});
