
document
  .getElementById("calorie-form")
  .addEventListener("submit", function (e) {
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "block";

    setTimeout(calculateCalories, 2000);

    e.preventDefault();
  });

function calculateCalories(e) {
  const miles = document.getElementById("age");
  const gender = document.querySelector(
    'input[name="customRadioInline1"]:checked'
  );
  const weight = document.getElementById("weight");

  if (
    miles.value === "" ||
    1000 < miles.value ||
    miles.value < 0
  ) {
    errorMessages("Please make sure the values you entered are correct");
  } 
  
  
  else if (activity === "1") {
    totalCalories.value =
      1.2 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(miles.value));
  } else if (activity === "2") {
    totalCalories.value =
      1.375 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(miles.value));
  } else if (activity === "3") {
    totalCalories.value =
      1.55 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(miles.value));
  } else if (activity === "4") {
    totalCalories.value =
      1.725 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(miles.value));
  } else if (activity === "5") {
    totalCalories.value =
      1.9 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(miles.value));
  } else if (activity === "1") {
    totalCalories.value =
      1.2 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(miles.value));
  } else if (activity === "2") {
    totalCalories.value =
      1.375 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(miles.value));
  } else if (activity === "3") {
    totalCalories.value =
      1.55 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(miles.value));
  } else if (activity === "4") {
    totalCalories.value =
      1.725 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(miles.value));
  } 
  
  
  
  
  
  else {
    totalCalories.value =
      1.9 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height) -
        4.676 * parseFloat(miles.value));
  }

  document.getElementById("results").style.display = "block";

  document.getElementById("loading").style.display = "none";
}

function errorMessages(error) {
  document.getElementById("results").style.display = "none";

  document.getElementById("loading").style.display = "none";
  const errorDiv = document.createElement("div");
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 4000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
