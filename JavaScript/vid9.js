var num1 = 5;
var num2 = 30;
var num3 = 20;

if(num1 > num2){
    if(num1 > num3){
        console.log("Num1 is greatest");
    }
    else{
        console.log("Num3 is greatest");
    }
}
else if(num2 > num3){
    console.log("Num2 is greatest");
}

else{
    console.log("Num3 is greatest");
}