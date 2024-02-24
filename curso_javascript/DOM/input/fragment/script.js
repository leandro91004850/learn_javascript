// DOU https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment

let ul = document.querySelector('ul');

const element = document.getElementById("ul"); // assuming ul exists
const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((list) => {
  const li = document.createElement("li");
  li.textContent = list;
  fragment.appendChild(li);
});

element.appendChild(fragment);
