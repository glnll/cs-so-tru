function submit(){
	//make new table body and row
	var tableBody = document.getElementById("tableBody");
	var newrow = document.createElement("tr");

	//get the selected option
	var category = document.getElementById("category");
	var option = category.options[category.selectedIndex].text;

	//create new date
	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	var fulldate = month + "/" + day + "/" + year;

	//create new table cells
	var tdcategory = document.createElement("td");
	var tdcost = document.createElement("td");
	var tddate = document.createElement("td");

	// assign input into created table cells above
 	tdcategory.innerHTML = option;
	tdcost.innerHTML = document.getElementById("cost").value;
	tddate.innerHTML = fulldate;

	//compute for total IDK ANYMORE MAN
	var total = [];
	var add = parseFloat(document.getElementById("cost").value); // input value
	var sum = localStorage.setItem("sum", t + add);
	var total = sum + add;

	//print total
	document.getElementById("total").innerHTML = sum;

	//add to table
	newrow.appendChild(tdcategory);
	newrow.appendChild(tdcost);
	newrow.appendChild(tddate);
	tableBody.appendChild(newrow);

}

