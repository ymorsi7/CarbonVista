document
								  .getElementById("calorie-form")
								  .addEventListener("submit", function (e) {
									document.getElementById("results").style.display = "none";
						  
									document.getElementById("loading").style.display = "block";
						  
									setTimeout(calculateCalories, 2000);
						  
									e.preventDefault();
								  });
						  
								function calculateCalories(e) {
								  const miles = document.getElementById("miles");
								  const gender = document.querySelector(
									'input[name="customRadioInline1"]:checked'
								  );
								  const activity = document.getElementById("list").value;
								  const totalCalories = document.getElementById("total-calories");
						  
								  if (
									miles.value === "" ||
									1000 < miles.value ||  
									miles.value < 0
								  ) {
									errorMessages("Please make sure the values you entered are correct");




                                    
								  } else if (activity === "1") {
									totalCalories.value =
                                    ((20.35/22)*parseFloat(miles.value));
                                    
								  
                                } else if (activity === "2") {
									totalCalories.value =
                                    ((20.35/27)*parseFloat(miles.value));

                                } else if (activity === "3") {
									totalCalories.value =
                                    ((20.35/19)*parseFloat(miles.value));

                                } else if (activity === "03") {
									totalCalories.value =
                                    ((20.35/32)*parseFloat(miles.value));

                                } else if (activity === "4") {
									totalCalories.value =
                                    ((20.35/28)*parseFloat(miles.value));

                                } else if (activity === "5") {
									totalCalories.value =
                                    ((20.35/22.5)*parseFloat(miles.value));

                                } else if (activity === "6") {
									totalCalories.value =
                                    ((20.35/25)*parseFloat(miles.value));

                                } else if (activity === "7") {
									totalCalories.value =
                                    ((20.35/28.5)*parseFloat(miles.value));

                                } else if (activity === "8") {
									totalCalories.value =
                                    ((20.35/25)*parseFloat(miles.value));

                                    
                                } else if (activity === "9") {
									totalCalories.value =
                                    ((20.35/28)*parseFloat(miles.value));
                                    
                                } else if (activity === "10") {
									totalCalories.value =
                                    ((20.35/21)*parseFloat(miles.value));


                                } else if (activity === "11") {
									totalCalories.value =
                                    ((20.35/15)*parseFloat(miles.value));

                                } else if (activity === "12") {
									totalCalories.value =
                                    ((20.35/18)*parseFloat(miles.value));

                                } else if (activity === "13") {
									totalCalories.value =
                                    ((20.35/18)*parseFloat(miles.value));


                                } else if (activity === "14") {
									totalCalories.value =
                                    ((20.35/15.4)*parseFloat(miles.value));

                                } else if (activity === "15") {
									totalCalories.value =
                                    ((20.35/14)*parseFloat(miles.value));

                                } else if (activity === "16") {
									totalCalories.value =
                                    ((20.35/25)*parseFloat(miles.value));

                                } else if (activity === "17") {
									totalCalories.value =
                                    ((20.35/19)*parseFloat(miles.value));
                                
                                } else if (activity === "18") {
									totalCalories.value =
                                    ((20.35/25)*parseFloat(miles.value));

                                }
                                
                                
                             else if (activity === "19") {
                                totalCalories.value =
                                ((20.35/30)*parseFloat(miles.value));
                            } else if (activity === "20") {
                                totalCalories.value =
                                ((20.35/20)*parseFloat(miles.value));
                            } else if (activity === "21") {
                                totalCalories.value =
                                ((20.35/27)*parseFloat(miles.value));
                            } else if (activity === "22") {
                                totalCalories.value =
                                ((20.35/28)*parseFloat(miles.value));
                                
                            } else if (activity === "23") {
                                totalCalories.value =
                                ((20.35/24)*parseFloat(miles.value));

                            } else if (activity === "24") {
                                totalCalories.value =
                                ((20.35/26)*parseFloat(miles.value));

                            } else if (activity === "25") {
                                totalCalories.value =
                                ((20.35/33)*parseFloat(miles.value));

                            } else if (activity === "26") {
                                totalCalories.value =
                                ((20.35/25)*parseFloat(miles.value));

                            } else if (activity === "27") {
                                totalCalories.value =
                                ((20.35/25)*parseFloat(miles.value));

                            } else if (activity === "28") {
                                totalCalories.value =
                                ((20.35/19)*parseFloat(miles.value));

                            } else if (activity === "29") {
                                totalCalories.value =
                                ((20.35/18)*parseFloat(miles.value));

                            } else if (activity === "30") {
                                totalCalories.value =
                                ((20.35/25)*parseFloat(miles.value));
                                
                            

                            } else if (activity === "31") {
                                totalCalories.value =
                                ((20.35/22)*parseFloat(miles.value));

                            } else if (activity === "32") {
                                totalCalories.value =
                                ((20.35/22)*parseFloat(miles.value));

                            } else if (activity === "33") {
                                totalCalories.value =
                                ((20.35/13)*parseFloat(miles.value));

                            } else if (activity === "34") {
                                totalCalories.value =
                                ((20.35/53)*parseFloat(miles.value));
                                
                            } else if (activity === "35") {
                                totalCalories.value =
                                ((20.35/28)*parseFloat(miles.value));

                            } else if (activity === "36") {
                                totalCalories.value =
                                ((20.35/25)*parseFloat(miles.value));












                                } else if (activity === "36") {
									totalCalories.value =
                                    ((20.35/15)*parseFloat(miles.value));

                                } else if (activity === "37") {
									totalCalories.value =
                                    ((20.35/29)*parseFloat(miles.value));

                                } else if (activity === "38") {
									totalCalories.value =
                                    ((20.35/14)*parseFloat(miles.value));
                                } else if (activity === "39") {
									totalCalories.value =
                                    ((20.35/26)*parseFloat(miles.value));
                                } else if (activity === "40") {
									totalCalories.value =
                                    ((20.35/28)*parseFloat(miles.value));
                                } else if (activity === "41") {
									totalCalories.value =
                                    ((20.35/23)*parseFloat(miles.value));
                                } else if (activity === "42") {
									totalCalories.value =
                                    ((20.35/27)*parseFloat(miles.value));
                                } else if (activity === "43") {
									totalCalories.value =
                                    ((20.35/25)*parseFloat(miles.value));
                                } else if (activity === "44") {
									totalCalories.value =
                                    ((20.35/26)*parseFloat(miles.value));
                                } else if (activity === "45") {
									totalCalories.value =
                                    ((20.35/33)*parseFloat(miles.value));
                                } else if (activity === "46") {
									totalCalories.value =
                                    ((20.35/21)*parseFloat(miles.value));
                                } else if (activity === "47") {
									totalCalories.value =
                                    ((20.35/25)*parseFloat(miles.value));
                                } else if (activity === "48") {
									totalCalories.value =
                                    ((20.35/22)*parseFloat(miles.value));
                                } else if (activity === "49") {
									totalCalories.value =
                                    ((20.35/29)*parseFloat(miles.value));
                                } else if (activity === "50") {
									totalCalories.value =
                                    ((20.35/22)*parseFloat(miles.value));
                                } else if (activity === "51") {
									totalCalories.value =
                                    ((20.35/23)*parseFloat(miles.value));
                                } else if (activity === "52") {
									totalCalories.value =
                                    ((20.35/32)*parseFloat(miles.value));
                                } else if (activity === "53") {
									totalCalories.value =
                                    ((20.35/27)*parseFloat(miles.value));
                                } 
                                
                                                                else if (activity === "54") {
                                                                    totalCalories.value =
                                                                    ((20.35/15)*parseFloat(miles.value));
                                                                } else if (activity === "55") {
                                                                    totalCalories.value =
                                                                    ((20.35/17)*parseFloat(miles.value));
                                                                } else if (activity === "56") {
                                                                    totalCalories.value =
                                                                    ((20.35/21)*parseFloat(miles.value));
                                                                } else if (activity === "57") {
                                                                    totalCalories.value =
                                                                    ((20.35/22)*parseFloat(miles.value));
                                                                } else if (activity === "58") {
                                                                    totalCalories.value =
                                                                    ((20.35/30)*parseFloat(miles.value));
                                                                } else if (activity === "59") {
                                                                    totalCalories.value =
                                                                    ((20.35/32)*parseFloat(miles.value));
                                                                } else if (activity === "60") {
                                                                    totalCalories.value =
                                                                    ((20.35/27)*parseFloat(miles.value));
                                                                } else if (activity === "61") {
                                                                    totalCalories.value =
                                                                    ((20.35/23)*parseFloat(miles.value));
                                                                } else if (activity === "62") {
                                                                    totalCalories.value =
                                                                    ((20.35/24)*parseFloat(miles.value));
                                                                } else if (activity === "63") {
                                                                    totalCalories.value =
                                                                    ((20.35/21)*parseFloat(miles.value));
                                                                } else if (activity === "64") {
                                                                    totalCalories.value =
                                                                    ((20.35/21)*parseFloat(miles.value));
                                                                } else if (activity === "65") {
                                                                    totalCalories.value =
                                                                    ((20.35/32)*parseFloat(miles.value));
                                                                } else if (activity === "66") {
                                                                    totalCalories.value =
                                                                    ((20.35/42)*parseFloat(miles.value));
                                                                } else if (activity === "67") {
                                                                    totalCalories.value =
                                                                    ((20.35/25)*parseFloat(miles.value));
                                                                } else if (activity === "68") {
                                                                    totalCalories.value =
                                                                    ((20.35/42)*parseFloat(miles.value));
                                                                } else if (activity === "69") {
                                                                    totalCalories.value =
                                                                    ((20.35/72)*parseFloat(miles.value));
                                                                } else if (activity === "70") {
                                                                    totalCalories.value =
                                                                    ((20.35/28)*parseFloat(miles.value));
                                                                } else if (activity === "71") {
                                                                    totalCalories.value =
                                                                    ((20.35/38)*parseFloat(miles.value));
                                                                } else if (activity === "72") {
                                                                    totalCalories.value =
                                                                    ((20.35/32)*parseFloat(miles.value));
                                                                }

















                                
                                
                                
                                
                                
                                else if (activity === "73") {
									totalCalories.value =
                                    ((20.35/23)*parseFloat(miles.value));
                                } else if (activity === "74") {
									totalCalories.value =
                                    ((20.35/28)*parseFloat(miles.value));
                                } else if (activity === "75") {
									totalCalories.value =
                                    ((20.35/19)*parseFloat(miles.value));


                                } else if (activity === "76") {
									totalCalories.value =
                                    ((20.35/19)*parseFloat(miles.value));
                                } else if (activity === "77") {
									totalCalories.value =
                                    ((20.35/21)*parseFloat(miles.value));
                                } else if (activity === "78") {
									totalCalories.value =
                                    ((20.35/20)*parseFloat(miles.value));
                                } else if (activity === "79") {
									totalCalories.value =
                                    ((20.35/27)*parseFloat(miles.value));

                                } else if (activity === "80") {
									totalCalories.value =
                                    ((20.35/15)*parseFloat(miles.value));

                                } else if (activity === "81") {
									totalCalories.value =
                                    ((20.35/14)*parseFloat(miles.value));

                                } else if (activity === "82") {
									totalCalories.value =
                                    ((20.35/30)*parseFloat(miles.value));
                                } else if (activity === "83") {
									totalCalories.value =
                                    ((20.35/23)*parseFloat(miles.value));
                                } else if (activity === "84") {
									totalCalories.value =
                                    ((20.35/35)*parseFloat(miles.value));
                                } else if (activity === "85") {
									totalCalories.value =
                                    ((20.35/32)*parseFloat(miles.value));
                                } else if (activity === "86") {
									totalCalories.value =
                                    ((20.35/21)*parseFloat(miles.value));
                                } else if (activity === "87") {
									totalCalories.value =
                                    ((20.35/18)*parseFloat(miles.value));

                                } else if (activity === "88") {
									totalCalories.value =
                                    ((20.35/36)*parseFloat(miles.value));
                                } else if (activity === "89") {
									totalCalories.value =
                                    ((20.35/28)*parseFloat(miles.value));
                                } else if (activity === "90") {
									totalCalories.value =
                                    ((20.35/23)*parseFloat(miles.value));
                                } else if (activity === "91") {
									totalCalories.value =
                                    ((20.35/26)*parseFloat(miles.value));
                                } else if (activity === "92") {
									totalCalories.value =
                                    ((20.35/27)*parseFloat(miles.value));
                                } else if (activity === "93") {
									totalCalories.value =
                                    ((20.35/116)*parseFloat(miles.value));
                                } else if (activity === "94") {
									totalCalories.value =
                                    ((20.35/30)*parseFloat(miles.value));


                                }   else {
                                    totalCalories.value =
                                    ((20.35/30)*parseFloat(miles.value)); } 
						  
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