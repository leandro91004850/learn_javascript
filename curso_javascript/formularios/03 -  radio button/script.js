"use strict";

const form = document.forms.namedItem("select-radio");
const submit = document.querySelector("button[type=submit]");
const change = document.querySelector("#change");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que o formulário seja enviado
  
    const radio = form.elements.radio;
    change.innerHTML = `Você escolheu: ${radio.value}`;

   /* for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            console.log(radio[i].value);
        }
    }*/

});