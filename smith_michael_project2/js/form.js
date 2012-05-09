//Project 2 Visual Frameworks Term 1205
//Michael Smith Jr.
//The Diabetic Blood Sugar Log


//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementByID Function
	function $(x){
		var theElement = document.getElementByID(x);
		return theElement;
	}

	// Create Select Field element and populate
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "treatment");
		for(var i=0, j=treatmentTypes.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = treatmentTypes[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);	
	}
	//Variable defaults
	var treatmentTypes = ["--Choose A Treatment", "Diet and Pills", "Bed", "Insulin Injections"];
	makeCats();


	//Set Link and Submint Click Events
	var displayLink = $("Display Log");
	displayLink.addEventListener("click", getData);
	var clearLink = $("Clear Stored Data");
	clearLink.addEventListener("click", clearData);
	var submitLink = $("submit");
	submitLink.addEventListener("click", storeData);







});