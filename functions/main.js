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
  const number1 = +input1;
  const number2 = +input2;
  const sub = number1 - number2;
  return sub;
}

function submitHandler1() {
  event.preventDefault(); //. to prevent the page from reloading

  const first = document.getElementById("firstInput1");
  const second = document.getElementById("secondInput1");

  console.log("firstInput is " + first.value);
  console.log("secondInput is " + second.value);

  const sub = subtraction(first.value, second.value);
  console.log("Number is = " + sub);

  const div = document.getElementById("answer1");
  div.innerText = sub;
}
// multiplication

function muliplication(fun1, fun2) {
  const number1 = +fun1;
  const number2 = +fun2;
  const multi = number1 * number2;
  return multi;
}

function submitHandler() {
  event.preventDefault(); //. to prevent the page from reloading

  const vat1 = document.getElementById("firstInput2");
  const vat2 = document.getElementById("secondInput2");

  console.log("firstInput is " + vat1.value);
  console.log("secondInput is " + vat2.value);

  const multi = muliplication(vat1.value, vat2.value);
  console.log("Number is = " + multi);

  const div = document.getElementById("answer2");
  div.innerText = multi;
}

// division

function division(main1, main2) {
  const number1 = +main1;
  const number2 = +main2;
  const divi = number1 / number2;
  return divi;
}

function submitHandler() {
  event.preventDefault(); //. to prevent the page from reloading

  const pat1 = document.getElementById("firstInput3");
  const pat2 = document.getElementById("secondInput3");

  console.log("firstInput is " + pat1.value);
  console.log("secondInput is " + pat2.value);

  const min = division(pat1.value, pat2.value);
  console.log("Number is = " + min);

  const div = document.getElementById("answer3");
  div.innerText = min;
}
