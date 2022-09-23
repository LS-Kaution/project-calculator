function division(dividend, divisor) {
    return dividend / divisor
}

function multiplication(productOne, productTwo) {
    return productOne * productTwo
}

function subtract(a, b) {
    return a - b
}

function sum(a, b) {
    return a + b
}

function operate(operator, numOne, numTwo) {
    if (operator == '+') {
        return sum(numOne, numTwo)
    }
    if (operator == '-') {
        return subtract(numOne, numTwo)
    }
    if (operator == 'x') {
        return multiplication(numOne, numTwo)
    }
    if (operator == '/') {
        return division(numOne, numTwo)
    }
}

const buttons = [
	document.getElementById('one'),
	document.getElementById('two'),
	document.getElementById('three'),
	document.getElementById('four'),
	document.getElementById('five'),
	document.getElementById('six'),
	document.getElementById('seven'),
	document.getElementById('eight'),
	document.getElementById('nine'),
	document.getElementById('zero'),
	document.getElementById('decimal-point'),
	document.getElementById('division'),
	document.getElementById('multiplication'),
	document.getElementById('subtract'),
	document.getElementById('sum'),
]