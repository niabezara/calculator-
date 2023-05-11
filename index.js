const buttons = document.getElementsByClassName("button"); //for toggle switch
const numbers = document.querySelectorAll(".num"); //all numbers
const resultnum = document.querySelector(".resultnum"); //display
const operations = document.querySelectorAll(".num-operation"); //operations
const del = document.querySelector(".num-DEL"); //delete button
const equal = document.getElementById("equal"); //equal button
const reset = document.querySelector(".reset"); //resets everything
const result = document.querySelector(".result");
const operationsec = document.querySelector(".operationsec");
const calc = document.querySelector(".calc");
const theme = document.querySelector(".theme");
const toggle = document.querySelector(".tri-state-toggle");
const one = document.getElementById("one");
const three = document.getElementById("three");
const two = document.getElementById("two");
const digit = document.querySelectorAll(".digit");
const numoperation = document.querySelectorAll(".num-operation");
const decimal = document.querySelector(".decimal");

let arr = [...buttons];

// toggle switch
arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.body.style.backgroundColor = "#3a4663";
      result.style.backgroundColor = "#181f33";
      resultnum.style.color = "#ffffff";
      operationsec.style.backgroundColor = "#242d44";
      calc.style.color = "#ffffff";
      theme.style.color = "#ffffff";
      del.style.backgroundColor = "#647198";
      reset.style.backgroundColor = "#647198";
      toggle.style.backgroundColor = "#242D44";
      one.style.backgroundColor = " #D03F2F";
      digit.forEach((item) => {
        item.style.color = "#FFFFFF";
      });
      numbers.forEach((item) => {
        item.style.backgroundColor = "#E5E4E1";
        item.style.color = "#36362C";
        item.style.boxShadow = "inset 0px -4px 0px #A79E91";
      });
      numoperation.forEach((item) => {
        item.style.backgroundColor = "#E5E4E1";
        item.style.color = "#36362C";
        item.style.boxShadow = "inset 0px -4px 0px #A79E91";
      });
      equal.style.backgroundColor = "#C85402";
      equal.style.boxShadow = " inset 0px -4px 0px #873901";
    } else if (index == 1) {
      document.body.style.backgroundColor = "#F2F2F2";
      result.style.backgroundColor = "#EEEEEE";
      resultnum.style.color = "#36362C";
      operationsec.style.backgroundColor = "#D2CDCD";
      calc.style.color = "#36362C";
      theme.style.color = "#36362C";
      del.style.backgroundColor = "#378187";
      reset.style.backgroundColor = "#378187";
      toggle.style.backgroundColor = "#D2CDCD";
      one.style.backgroundColor = "#D2CDCD";
      two.style.backgroundColor = "#C85402";
      three.style.backgroundColor = "#D2CDCD";
      equal.style.backgroundColor = "d03f2f";
      digit.forEach((item) => {
        item.style.color = "#36362C";
      });
      numbers.forEach((item) => {
        item.style.backgroundColor = "#E5E4E1";
        item.style.color = "#36362C";
        item.style.boxShadow = "inset 0px -4px 0px #A79E91";
      });
      numoperation.forEach((item) => {
        item.style.backgroundColor = "#E5E4E1";
        item.style.color = "#36362C";
        item.style.boxShadow = "inset 0px -4px 0px #A79E91";
      });
      equal.style.backgroundColor = "#C85402";
      equal.style.boxShadow = " inset 0px -4px 0px #873901";
    } else {
      document.body.style.backgroundColor = "#17062A";
      result.style.backgroundColor = "#1E0936";
      resultnum.style.color = "#FFE53D";
      operationsec.style.backgroundColor = "#1E0936";
      calc.style.color = "#FFE53D";
      theme.style.color = "#FFE53D";
      del.style.backgroundColor = "#56077C";
      reset.style.backgroundColor = "#56077C";
      toggle.style.backgroundColor = "#1E0936";
      three.style.backgroundColor = "#00DED0";
      one.style.backgroundColor = "#1E0936";
      two.style.backgroundColor = "#1E0936";
      digit.forEach((item) => {
        item.style.color = "#FFE53D";
      });
      numbers.forEach((item) => {
        item.style.backgroundColor = "#331C4D";
        item.style.color = "#FFE53D";
        item.style.boxShadow = "inset 0px -4px 0px #881C9E";
      });
      numoperation.forEach((item) => {
        item.style.backgroundColor = "#331C4D";
        item.style.color = "#FFE53D";
        item.style.boxShadow = "inset 0px -4px 0px #881C9E";
      });
      equal.style.backgroundColor = "#00DED0";
      equal.style.boxShadow = "inset 0px -4px 0px #6CF9F1";
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

// add event listeners to the buttons
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;
    if (resultnum.textContent !== "0" && value == ".") {
      resultnum.textContent = `${resultnum.textContent}.`;
    } else if (value === ".") {
      resultnum.textContent = "0.";
    } else if (resultnum.textContent === "0") {
      resultnum.textContent = value;
      return;
    } else {
      resultnum.textContent += value;
    }
  });
});

// operation buttons
let symbol = "";
operations.forEach((button) => {
  button.addEventListener("click", () => {
    let operationvalue = button.textContent;
    if (operationvalue === symbol) {
      return;
    }
    symbol = operationvalue;
    switch (operationvalue) {
      case "+":
        resultnum.textContent = `${resultnum.textContent}${operationvalue}`;
        break;
      case "-":
        resultnum.textContent = `${resultnum.textContent}${operationvalue}`;
        break;
      case "*":
        resultnum.textContent = `${resultnum.textContent}${operationvalue}`;
        break;
      case "/":
        resultnum.textContent = `${resultnum.textContent}${operationvalue}`;
        break;
      default:
        resultnum.textContent = "Invalid operation";
        break;
    }
  });
});

// equal button
equal.addEventListener("click", function (e) {
  let answer = eval(resultnum.textContent);
  resultnum.textContent = answer;
  console.log(answer);
});
// delete button
del.addEventListener("click", () => {
  resultnum.textContent = resultnum.textContent.slice(0, -1);
});

// reset button
reset.addEventListener("click", () => {
  resultnum.textContent = "0";
});
