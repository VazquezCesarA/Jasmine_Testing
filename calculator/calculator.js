window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update(setupIntialValues());
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const span = document.getElementById("monthly-payment");
  return span;
}

// Get the current values from the UI
// Update the monthly payment
function update(span) {
  span.innerText = calculateMonthlyPayment(getCurrentUIValues());
  console.log(span);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const interest = values.rate / 100 / 12;
  const payments = values.years * 12;
  const x = Math.pow(1 + interest, payments);
  const monthly = (values.amount * x * interest) / (x - 1);

  console.log(`Monthly Payment: ${monthly.toFixed(2)}`);
  return monthly.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  //placeholder
}
