"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que o formulário seja enviado
  const name = form.name.value;
  const password = form.password.value;
  console.log(name, password);

});