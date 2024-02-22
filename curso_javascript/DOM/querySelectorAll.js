let p = document.querySelectorAll("p");

p.forEach((element, index) => {
    
    let text = element.innerText;
    console.log(`Parágrafo ${index}: ${text}`);

    if(text.concat("").includes("Lorem")) {
        element.style.color = "red";
    }

});
