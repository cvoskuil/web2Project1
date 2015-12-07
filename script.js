function helloWorld()
{
	alert("Hello World!")
}

var num1 = null
var num2 = null
var solution = null

function add(number)
{
	if (num1 == null)
	{
		num1 = number
		console.log(num1 + " +")
	}
	else
	{
		num2 = number
		console.log(num2)
		solution = num1 + num2
		console.log("= " + solution)
		num1 = null
		num2 = null
		solution = null
	}	
}