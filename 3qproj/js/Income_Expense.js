
function submit(){
	//make new table body and row
	var tableBody = document.getElementById("tableBody");
	var newrow = document.createElement("tr");

	//get the selected option
	var category = document.getElementById("category");
	var option = category.options[category.selectedIndex].text;

	//create new date
	var months = ["January", "February","March", "April", "June", "July", "August", "September", "October", "November", "December"]
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	var date = new Date();
	var month = months[date.getMonth()];
	var dayNum = date.getDate();
	var year = date.getFullYear();
	var dayWord = days[date.getDay()];
	var hour = date.getHours();
	var minute = date.getMinutes();
	var time;

	if(hour < 13){
		time = "AM";
	}
	else{
		hour -= 12;
		time = "PM";
	}

	if(minute < 10){
		minute = "0" + minute;
	}

	//final date
	var fulldate = dayWord + ", " + month + " " + dayNum + ", " + year + ", " + hour + ":" + minute + " "+ time;

	//create new table cells
	var tdcategory = document.createElement("td");
	var tdcost = document.createElement("td");
	var tddate = document.createElement("td");
	var total = document.createElement("td");

	// assign input into created table cells above
 	tdcategory.innerHTML = option;
	tdcost.innerHTML = parseFloat(document.getElementById("cost").value);
	tddate.innerHTML = fulldate;

	//add to table
	newrow.appendChild(tdcategory);
	newrow.appendChild(tdcost);
	newrow.appendChild(tddate);
	tableBody.appendChild(newrow);

	// local storage of each category
	var total = 0;
	localStorage.setItem("total", total );
	var input = parseFloat(document.getElementById("cost").value);

	if( input != "NaN"){
		total = parseFloat(localStorage.getItem("total"));
		total += input;
		localStorage.setItem("total", total);
	}
	else{
		total = localStorage.getItem("total");
	}

	//append to p element
	document.getElementById("total").innerHTML = total; 


}


