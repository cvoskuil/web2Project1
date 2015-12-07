function helloWorld() {
	alert("Hello World!")
}
function add(number) {
	var num1
	localStorage.setItem("num1", number);
	var someVarName = localStorage.getItem("someVarName");
	if (num1==null){
		console.log("num 1 is null")
		num1 = number
		console.log("num 1 is now " + num1)
	}
	else
	{
		num2 = number
		console.log(num2)
	}	
	if (num2 !== null){
		alert(num1 + num2)
	}
}
add()
