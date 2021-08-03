// MOBILE MENU
const header = document.querySelector(".header");
const menuToggler = document.querySelector("#menu-toggler");
const body = document.querySelector("body");

menuToggler.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("overflow-hidden");
  } else {
    header.classList.add("open");
    body.classList.add("overflow-hidden");
  }
});

////////////////////////////
// FORM VALIDATION
const form = document.querySelector(".form");
const elemsToValidate = document.querySelectorAll(".form__input");
const btnSubmit = document.querySelector(".btn-submit");

function validateForm(e) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  elemsToValidate.forEach((element) => {
    if (element.value == "") {
      e.preventDefault();
      if (element.nextElementSibling) {
        element.parentElement.removeChild(element.nextElementSibling);
      }
      element.parentElement.insertAdjacentHTML(
        "beforeend",
        "<p class='form__error'>Can't be empty <img src='../assets/contact/desktop/icon-error.svg'></p>"
      );
      element.classList.add("form__input-error");
    }

    if (element.id == "emailId" && element.value != "") {
      if (!element.value.match(mailformat)) {
        e.preventDefault();
        if (element.nextElementSibling) {
          element.parentElement.removeChild(element.nextElementSibling);
        }
        element.parentElement.insertAdjacentHTML(
          "beforeend",
          "<p class='form__error'>Please use a valid email address <img src='../assets/contact/desktop/icon-error.svg'></p>"
        );
      }
    }
  });
}

if (btnSubmit) {
  btnSubmit.addEventListener("click", (e) => validateForm(e, elemsToValidate));
}

if (form) {
  form.addEventListener("keydown", function (e) {
    if (e.target.classList.contains("form__input")) {
      if (e.target.nextElementSibling) {
        e.target.parentElement.removeChild(e.target.nextElementSibling);
      }
    }
  });

  elemsToValidate.forEach((item) => {
    item.addEventListener("blur", function (e) {
      if (
        e.target.classList.contains("form__input-error") &&
        !e.target.nextElementSibling
      ) {
        console.log(e);
        e.target.classList.remove("form__input-error");
      }
    });
  });
}
