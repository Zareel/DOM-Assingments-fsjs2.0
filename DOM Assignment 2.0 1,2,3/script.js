//* Assignment 1
//todo Task 1
let ul = document.querySelector("ul");
let li = document.createElement("li");
ul.appendChild(li);
li.innerHTML = "<a>Hire Me</a>";
let thirdChild = document.querySelectorAll("ul li");
thirdChild[2].innerText = "Projects";

//todo Task 2
let searchField = document.querySelector(".search-field input");
searchField.placeholder = "Search My Projects";

//todo Task 3
let para = document.querySelectorAll(".hero-left-section p span");
para[1].innerText = "an Employee";
para[2].innerText = "iNeuron Intelligence PvtLtd";

//todo Task 4
let image = document.querySelector(".hero-right-section img");
image.src = "./zar.jpg";

//todo Task 5
let btnDiv = document.querySelector(".hero-right-section-btns");
let button = document.createElement("button");
btnDiv.appendChild(button);
button.textContent = "Support Me";

//* Assingment 2
