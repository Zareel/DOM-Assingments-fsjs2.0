# Assignment 1

# Task1

```javascript
let ul = document.querySelector("ul");
let li = document.createElement("li");
ul.appendChild(li);
li.innerHTML = "<a>Hire me</a>";
let thirdChild = document.querySelectorAll("ul li");
thirdChild[2].innerText = "Projects";
```

# Task 2

```javascript
let searchField = document.querySelector(".search-field input");
searchField.placeholder = "search my project";
```

# Task 3

```javascript
let para = document.querySelectorAll(".hero-left-section p span");
para[1].innerText = "an Employee";
para[2].innerText = "iNeuron Intelligence PvtLtd";
```

# Task 4

```javascript
let image = document.querySelector(".hero-right-section img");
image.src = "./zar.jpg";
```

# Task 5

```javascript
let btnDiv = document.querySelector(".hero-right-section-btns");
let button = document.createElement("button");
btnDiv.appendChild(button);
button.textContent = "Support Me";
```

# Assignment 2

```javaScript
//todo Task
let accordianWrapper = document.querySelector(".accordian-wrapper");
let accordianDiv = document.querySelector(".accordian");
let div = document.createElement("div");
accordianWrapper.appendChild(div);
div.className = "accordian";
let h3 = document.createElement("h3");
div.appendChild(h3);
h3.innerText = "Skills";

let para = document.createElement("p");
div.appendChild(para);
para.innerText =
  "I posses a very good command over the full stack technologies like MERN which can ne seen in my work over the github";

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
```

# Assignment 3

```javaScript
let enterNameLeft = document.querySelector(".enterName");
enterNameLeft.placeholder = "fsjs2.0";

let enterMailLeft = document.querySelector(".enterMail");
enterMailLeft.placeholder = "fsjs@iNeuron.ai";

let enterMessageLeft = document.querySelector(".enterMessage");
enterMessageLeft.placeholder = "Hello World";

let userName = document.querySelector(".userName");
userName.placeholder = "fsjs2.0";

let userEmail = document.querySelector(".userEmail");
userEmail.placeholder = "fsjs@iNeuron.ai";

let userMessage = document.querySelector(".userMessage");
userMessage.placeholder = "Hello World";
```

# Assignment 4

```javaScript
let barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
barbarian.style.backgroundColor = "yellow";

let archer = document.querySelector(".clash-card__unit-stats--archer");
archer.style.backgroundColor = "purple";

let giant = document.querySelector(".clash-card__unit-stats--giant");
giant.style.backgroundColor = "orange";

let goblin = document.querySelector(".clash-card__unit-stats--goblin");
goblin.style.backgroundColor = "green";


```

# Assingment 5

```javascript
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
```
