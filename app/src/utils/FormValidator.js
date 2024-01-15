import Swal from "sweetalert2";

class FormValidator {
  constructor(form) {
    this.form = form;
  }

  validate() {
    return (
      this.emptyFields() &&
      this.email() &&
      this.passwordStrength() &&
      this.passwordMatch()
    );
  }

  emptyFields() {
    let validation = true;
    const requiredInputs = this.form.querySelectorAll("[data-required]");

    for (const input of requiredInputs) {
      if (input.value === "") {
        input.setAttribute("invalid", "");
        validation = false;
      }
    }

    if (!validation) {
      Swal.fire({
        icon: "error",
        title: "Preencha os campos obrigatórios",
      });
    }

    return validation;
  }

  email() {
    let validation = true;
    const emailInputs = this.form.querySelectorAll("[type=email]");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    for (const input of emailInputs) {
      if (!emailRegex.test(input.value)) {
        input.setAttribute("invalid", "");
        validation = false;
      }
    }

    if (!validation) {
      Swal.fire({
        icon: "error",
        title: "Digite um e-mail válido",
      });
    }

    return validation;
  }

  passwordMatch() {
    let validation = true;
    const passwords = this.form.querySelectorAll("[data-password]");

    if (passwords.length === 2) {
      if (passwords[0].value !== passwords[1].value) {
        passwords[1].setAttribute("invalid", "");
        validation = false;
      }
    }

    if (!validation) {
      Swal.fire({
        icon: "error",
        title: "As senhas não são idênticas",
      });
    }

    return validation;
  }

  passwordStrength() {
    let validation = true;
    const password = this.form.querySelectorAll("[data-password]")[0];

    if (password.value.length <= 5) {
      password.setAttribute("invalid", "");
      validation = false;
    }

    if (!validation) {
      Swal.fire({
        icon: "error",
        title: "Aumente a força da senha",
      });
    }

    return validation;
  }
}

export default FormValidator;
