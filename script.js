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
  let potencia = [...expression.split("^")];
  let raiz = [...expression.split("√")];

  if (potencia.length == 2) {
    Result.textContent = pow(potencia[0], potencia[1]);
  } else if (raiz.length == 2) {
    Result.textContent = sqrt(raiz[1], raiz[0]);
  } else
    try {
      Result.textContent = eval(expression);
      expression = eval(expression);
    } catch {
      expression = " ";
      Result.textContent = "Vos no sabes usar una calculadora";
    }
});

const pow = (n, p) => {
  let res = 1;
  for (let i = 0; i < p; i++) {
    res = res * n;
  }
  return res;
};

const sqrt = (n, s) => {
  return Math.pow(n, 1 / s);
};
