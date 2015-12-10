function helloWorld()
{
	alert("Hello World!")
}

var num1 = 0
var num2 = null
var solution = null
var operator = null

function c()
{
	num1 = 0
	num2 = null
	solution = null
	operator = null
	document.getElementById("result").innerHTML = "0"
}

function math(number)
{
	if (!isNaN(number) && operator == null)
	{
		num1 = number
		document.getElementById("result").innerHTML = num1
	}
	if (number == "+" || number == "-")
	{
		operator = number
		document.getElementById("result").innerHTML = num1 + " " + operator
	}
	if (operator !== null && num1 !== null && !isNaN(number))
	{
		num2 = number
		document.getElementById("result").innerHTML = num2
		if (operator == "+")
		{
			solution = num1 + num2
			document.getElementById("result").innerHTML = solution
			num1 = solution
			num2 = null
			solution = null
			operator = null
		}
		if (operator == "-") 
		{
			solution = num1 - num2
			document.getElementById("result").innerHTML = solution
			num1 = solution
			num2 = null
			solution = null
			operator = null
		}
	}
}