//Project 2 Visual Frameworks Term 1205
//Michael Smith Jr.
//The Diabetic Blood Sugar Log


//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementByID Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

	// Create Select Field element and populate
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "treatments");
		for(var i=0, j=treatmentTypes.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = treatmentTypes[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);	
	}

	function storeData(){
		var id = Math.floor(Math.random()*10000001);
		//Get Form Data and store in object
		//Object properties contain array with form label and input value.
		var logItem = {};
			logItem.fname = ["First Name:", $("fname").value];
			logItem.lname = ["Last Name:", $("lname").value];
			logItem.date = ["Today's Date:", $("date").value];
			logItem.currentTime = ["Current Time:", $("currentTime").value];
			logItem.bsreading = ["Blood Sugar Reading:", $("bsreading").value];
			//logItem.sex = ["Male or Female:", sexValue];
			logItem.condtion = ["Condition:", $("condtion").value];
			logItem.treatments = ["Current Treatment:", $("treatments").value];
			logItem.comments = ["Comments:", $("comments").value];
		//Saving data into local storage using Stringify
		localStorage.setItem(id, JSON.stringify(logItem));
		alert("Log Saved!");
	}
	//Variable defaults
	var treatmentTypes = ["--Choose A Treatment--", "Diet and Pills", "Insulin Injections"];
	makeCats();


	//Set Link and Submint Click Events
	/*var displayLink = $("Display Log");
	displayLink.addEventListener("click", getData);
	var clearLink = $("Clear Stored Data");
	clearLink.addEventListener("click", clearData);*/
	var submitLink = $("submit");
	submitLink.addEventListener("click", storeData);







});