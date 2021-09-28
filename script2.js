const formData = document.querySelector(".newForm");
const button = document.querySelector(".select");
const output = document.querySelector(".output");

const firstInp = document.getElementsByName("val");
const secondInp = document.getElementsByName("val-2");
const thirdInp = document.getElementsByName("val-3");
const fourthInp = document.getElementsByName("val-4");
const fifthInp = document.getElementsByName("val-5");
const sixthInp = document.getElementsByName("val-6");

const ans = ["90", "right angled", "50", "180", "100", "60°"];

button.addEventListener("click", function newFunc() {
  let store = new FormData(formData);
  var i = 0;
  var score = 0;
  let first = Array.from(firstInp);
  let firstCheck = first.some((element) => element.checked);

  let second = Array.from(secondInp);
  let secondCheck = second.some((element) => element.checked);

  let third = Array.from(thirdInp);
  let thirdCheck = third.some((element) => element.checked);

  let fourth = Array.from(fourthInp);
  let fourthCheck = fourth.some((element) => element.checked);

  let fifth = Array.from(fifthInp);
  let fifthCheck = fifth.some((element) => element.checked);

  let sixth = Array.from(sixthInp);
  let sixthCheck = sixth.some((element) => element.checked);

  if (
    firstCheck &&
    secondCheck &&
    thirdCheck &&
    fourthCheck &&
    fifthCheck &&
    sixthCheck
  ) {
    for (let value of store.values()) {
      if (value === ans[i]) {
        score++;
      }
      i++;
      console.log(store.values[0]);
    }

    output.innerText = "Your score is " + score + " out of 6";
  } else {
    output.innerText = "Please enter all the values and then proceed";
  }
});
