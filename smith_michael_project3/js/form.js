//Project 3 Visual Frameworks Term 1205
//Michael Smith Jr.
//The Diabetic Blood Sugar Log


//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function () {

	//Variable defaults
	var treatmentTypes = ["--Choose A Treatment--", "Diet and Pills", "Insulin Injections"],
		sexValue;

	//getElementByID Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}

	// Create Select Field element and populate
	function makeCats() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "treatments");
		for (var i=0, j=treatmentTypes.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = treatmentTypes[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);	
	}

	//Find value of selected radio button.
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}


	function toggleControls(n){
		switch(n){
			case "on":
				$("logEntryForm").style.display = "none";
				$("clear").style.display = "inline";
				$("displayLog").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("logEntryForm").style.display = "block";
				$("clear").syle.display = "inline";
				$("displayLog").style.display = "inline";
				$("addNew").style.display = "none";
				$("logItems").style.display = "none";
				break;
			default:
				return false;
		}
	}

	function storeData(){
		var id = Math.floor(Math.random()*100000001);
		//Get Form Data and store in object
		//Object properties contain array with form label and input value.
		getSelectedRadio();
		var logItem = {};
			logItem.fname = ["First Name:", $("fname").value];
			logItem.lname = ["Last Name:", $("lname").value];
			logItem.date = ["Today's Date:", $("date").value];
			logItem.currentTime = ["Current Time:", $("currentTime").value];
			logItem.bsreading = ["Blood Sugar Reading:", $("bsreading").value];
			logItem.sex = ["Male or Female:", sexValue];
			logItem.condtion = ["Condition:", $("condition").value];
			logItem.treatments = ["Current Treatment:", $("treatments").value];
			logItem.comments = ["Comments:", $("comments").value];
		//Saving data into local storage using Stringify
		localStorage.setItem(id, JSON.stringify(logItem));
		alert("Log Saved!");
	}

	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in Local Storage.");
		}
		//Write Data from Local Storage to the browser
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "logItems");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("logItems").style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement("li");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Converting string from local storage value back to an object using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement("li");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}

	function clearData() {
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All log items are deleted!");
			window.location.reload();
			return false;
		}
	}

	
	makeCats();


	//Set Link and Submint Click Events
	var displayLink = $("displayLog");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearData);
	var submitLink = $("submit");
	submitLink.addEventListener("click", storeData);







});