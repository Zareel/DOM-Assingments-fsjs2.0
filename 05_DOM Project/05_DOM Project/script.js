// todo create new button
let navCenter = document.querySelector(".nav-center");
let lastChild = navCenter.lastElementChild;
console.log(lastChild);

let button = document.createElement("a");
lastChild.appendChild(button);
button.className = "btn";
button.textContent = "Pro Subscription";

// todo creating 6th card

let recipeGallery = document.querySelector(".recipe-gallery");
let div = document.createElement("div");
recipeGallery.appendChild(div);
div.className = "card";
let atag = document.createElement("a");
div.appendChild(atag);
atag.href = "#";
atag.className = "recipe-text";
let img = document.createElement("img");
atag.appendChild(img);
img.src = "./img/recipe-6.jpg";
img.className = "recipe-img";
let h5 = document.createElement("h5");
atag.appendChild(h5);
h5.className = "recipe-name";
h5.textContent = "Fried Chicken";
let para = document.createElement("p");
atag.appendChild(para);
para.className = "recipe-disp";
para.textContent = "Prep : 20min | Cook : 30min";

//todo add item to tags container

let tagsContainer = document.querySelector(".tags-container div");
let a = document.createElement("a");
tagsContainer.appendChild(a);
a.href = "#";
a.textContent = "Chinese (7)";
