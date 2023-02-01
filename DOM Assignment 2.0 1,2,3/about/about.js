/*
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
*/

//todo Task 2
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
