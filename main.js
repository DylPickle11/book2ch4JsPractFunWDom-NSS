console.log("Hello main.js, Nice job Dylan!");

let name = "Dylan";

console.log("My name is", name);

const sectionEl = document.querySelector(".article__section");

console.log("the result of sectionEl is:", sectionEl); 

const footerEl = document.querySelector(".article__footer");

console.log("the result of footerEl is:", footerEl); 


const smallTextEl = document.querySelector(".smallText");
console.log('what is smallText', smallTextEl);
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");
