function calculateAge(){
	var currentDate = document.getElementById('birthYear').value;
	var birthDate = document.getElementById('currentYear').value;

	if(currentDate == '' || birthDate == ''){
		alert("Please select some value");
	}

	var age = birthDate - currentDate;

	document.getElementById('currentAge').style.display = "block";
	document.getElementById('age').innerHTML = age;
}

function hide(){
	document.getElementById('currentAge').style.display = "none";
}