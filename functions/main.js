// Pre-req goal :  on submitting a form                 completed
// goal 1 : get the values of the two input field       completed
// goal 2 : add the values of the two inputs            completed
// goal 3 : display the sum of the inputs


//addition

function addition(param1, param2) {
  const number1 = +param1;
  const number2 = +param2;
  const sum = number1 + number2;
  return sum;
}

function submitHandler() {
  event.preventDefault(); //. to prevent the page from reloading

  const firstInput = document.getElementById("firstInput");
  const secondInput = document.getElementById("secondInput");

  console.log("firstInput is " + firstInput.value);
  console.log("secondInput is " + secondInput.value);

  const sum = addition(firstInput.value, secondInput.value);
  console.log("Sum is = " + sum);

  const div = document.getElementById("answer");
  div.innerText = sum;
}

// subtraction

function subtraction(input1,input2) {
  const number1 = -input1;
  const number2 = -input2;
  const sub = number1 - number2;
  return sub;
}

function submitHandler() {
  event.preventDefault(); //. to prevent the page from reloading

  const first = document.getElementById("firstInput");
  const second = document.getElementById("secondInput");

  console.log("firstInput is " + first.value);
  console.log("secondInput is " + second.value);

  const sub = subtraction(first.value, second.value);
  console.log("Number is = " + sub);

  const div = document.getElementById("answer");
  div.innerText = sub;
}
// multiplication

function addition(param1, param2) {
  const number1 = +param1;
  const number2 = +param2;
  const sum = number1 * number2;
  return sum;
}

function submitHandler() {
  event.preventDefault(); //. to prevent the page from reloading

  const firstInput = document.getElementById("firstInput");
  const secondInput = document.getElementById("secondInput");

  console.log("firstInput is " + firstInput.value);
  console.log("secondInput is " + secondInput.value);

  const sum = addition(firstInput.value, secondInput.value);
  console.log("Sum is = " + sum);

  const div = document.getElementById("answer");
  div.innerText = sum;
}

// division

function addition(param1, param2) {
  const number1 = +param1;
  const number2 = +param2;
  const sum = number1 + number2;
  return sum;
}

function submitHandler() {
  event.preventDefault(); //. to prevent the page from reloading

  const firstInput = document.getElementById("firstInput");
  const secondInput = document.getElementById("secondInput");

  console.log("firstInput is " + firstInput.value);
  console.log("secondInput is " + secondInput.value);

  const sum = addition(firstInput.value, secondInput.value);
  console.log("Sum is = " + sum);

  const div = document.getElementById("answer");
  div.innerText = sum;
}
