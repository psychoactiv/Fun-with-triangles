const submit = document.querySelector(".submit");
const input = document.querySelectorAll(".same");
const output = document.querySelector(".output");

function newFunc() {
  let newVar = 0;
  let checkPoint = false;
  for (i = 0; i < input.length; i++) {
    if (Number(input[i].value) > 0) {
      newVar += Number(input[i].value);
      if (i == 2) {
        checkPoint = true;
      }
    } else {
      output.innerText = "Please enter positive number greater than zero";
      break;
    }
  }
  if (checkPoint) {
    anotherFunction(newVar);
  }
}

function anotherFunction(value) {
  if (value > 0) {
    if (value === 180) {
      output.innerText = "Yes,  it is a triangle";
    } else {
      output.innerText = "no, it is not a triangle";
    }
  } else if (value == 0) {
    output.innerText = "values should  be greater than zero";
  } else {
    output.innerText = "Please enter positive numbers";
  }
}

submit.addEventListener("click", newFunc);
