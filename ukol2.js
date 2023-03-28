/*
Napište funkci calculate se třemi parametry number1, operation a number2, 
které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo.
Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou operaci.
*/
const calculate = (number1, operation, number2) => {
	if (operation === '+') {
		return number1 + number2
	}
	if (operation === '-') {
		return number1 - number2
	}
	if (operation === '*') {
		return number1 * number2
	}
	if (operation === '/') {
		return number1 / number2
	}
}