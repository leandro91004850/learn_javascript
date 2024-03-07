"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que o formulário seja enviado
    const name = form.name.value;
    const password = form.password.value;
    //console.log(name, password);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);

    if(formData.get("name") === "admin" && formData.get("password") === "1234"){
        console.log("Usuário autenticado");
    } else {
        console.log("Usuário não autenticado");
    }
});