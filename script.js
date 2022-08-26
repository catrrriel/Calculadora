const Result = document.querySelector(".result");
const BtnReset = document.querySelector(".btn-reset");
const BtnDelete = document.querySelector(".btn-delete");
const BtnEqual = document.querySelector(".btn-equal");
const BtnPow = document.querySelector(".btn-op pow");
const BtsOps = [...document.querySelectorAll(".btn-op")];
let expression = "";
let exponent = "";

BtsOps.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    expression += btn.textContent;
    Result.textContent = expression;
    // if (expression == BtnPow) {
    // }
  });
});

// const power = Math.pow(expression, exponent);
// BtnPow.addEventListener("click", (e) => {
// });

BtnDelete.addEventListener("click", (e) => {
  const str = Result.textContent.slice(0, -1);
  Result.textContent = str;
  expression = str;
});

BtnReset.addEventListener("click", (e) => {
  Result.textContent = "";
  expression = "";
});

BtnEqual.addEventListener("click", (e) => {
  try {
    Result.textContent = eval(expression);
  } catch {
    Result.textContent = "Vos no sabes usar una calculadora";
  } finally {
    expression = eval(expression);
  }
});
