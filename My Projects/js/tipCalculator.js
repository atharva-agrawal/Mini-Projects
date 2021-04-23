//calculate tip
function calculateTip(){
	var billamt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var peopleAmt = document.getElementById("peopleAmt").value;

	if(billamt == "" || serviceQual == 0){
		alert("Please Enter Values");
		return;
	}

	if(peopleAmt == 0 || peopleAmt<=1){
		peopleAmt = 1;

		document.getElementById("each").style.display = "none";
	}
	else{
		document.getElementById("each").style.display = "block";
	}

	//calculate tip
	var total = (billamt * serviceQual) / peopleAmt;
	total = Math.round(total * 100) / 100
	total = total.toFixed(2);

	//display tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}

function hide(){
		document.getElementById("totalTip").style.display = "none";
		document.getElementById("each").style.display = "none";
}


