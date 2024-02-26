"use strict";

let btn = document.querySelector(".botao");

const acionarAlerta = (value) => {
    alert(value +' '+ 123);
};

btn.addEventListener("mouseover", (event) => {
    console.log(3);
});
