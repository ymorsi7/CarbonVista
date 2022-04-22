document
								  .getElementById("calorie-form")
								  .addEventListener("submit", function (e) {
									document.getElementById("results").style.display = "none";
						  
									document.getElementById("loading").style.display = "block";
						  
									setTimeout(calculateCalories, 2000);
						  
									e.preventDefault();
								  });
						  
								function calculateCalories(e) {
								  const age = document.getElementById("age");
								  const gender = document.querySelector(
									'input[name="customRadioInline1"]:checked'
								  );
								  const activity = document.getElementById("list").value;
								  const totalCalories = document.getElementById("total-calories");
						  
								  if (
									age.value === "" ||
									80 < age.value ||
									age.value < 15
								  ) {
									errorMessage("Please make sure the values you entered are correct");
								  } else if (activity === "1") {
									totalCalories.value =
									  1.2 *
									  (66.5 +
										6.755 * parseFloat(age.value));
								  } else if (activity === "2") {
									totalCalories.value =
									  1.375 *
									  (66.5 +
										6.755 * parseFloat(age.value));
								  } else if (activity === "3") {
									totalCalories.value =
									  1.55 *
									  (66.5 +
										6.755 * parseFloat(age.value));
								  } else if (activity === "4") {
									totalCalories.value =
									  1.725 *
									  (66.5 +
										6.755 * parseFloat(age.value));
								  } else if (activity === "5") {
									totalCalories.value =
									  1.9 *
									  (66.5 +
										6.755 * parseFloat(age.value));
								  } else if (activity === "1") {
									totalCalories.value =
									  1.2 *
									  (655 +
										4.676 * parseFloat(age.value));
								  } else if (activity === "2") {
									totalCalories.value =
									  1.375 *
									  (655 +
										4.676 * parseFloat(age.value));
								  } else if (activity === "3") {
									totalCalories.value =
									  1.55 *
									  (655 +
										4.676 * parseFloat(age.value));
								  } else if (activity === "4") {
									totalCalories.value =
									  1.725 *
									  (655 +
										4.676 * parseFloat(age.value));
								  } else {
									totalCalories.value =
									  1.9 *
									  (655 +
										4.676 * parseFloat(age.value));
								  }
						  
								  document.getElementById("results").style.display = "block";
						  
								  document.getElementById("loading").style.display = "none";
								}
						  
								function errorMessage(error) {
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
							  