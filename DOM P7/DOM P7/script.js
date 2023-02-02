let arr = document.querySelector(".main__languages").children;
let [span, br, ...rest] = arr;
for (let i = 1; i < arr.length; i++) {
  arr[i].remove();
}

let input = (document.querySelector(".main__form-input").value = "iNeuron");

let submitForm = document.querySelector(".main__form-btn");
submitForm.submit();
