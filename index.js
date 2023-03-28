// úkol 1
/*
wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
*/
//1. spočítat hrubou mzdu
const salary = (wage, hours, days) => {
	return Math.round(wage * hours * days)
}

const taxed = (salary, taxPercentage) => {
	return Math.round((salary * (100 - taxPercentage)) / 100)
}

const wage = 100 // hrubá mzda
const hours = 8 // hodin práce
const days = 5 //dní v práci
const beforeTaxation = salary(wage, hours, days)
const afterTaxation = taxed(beforeTaxation, 15)

document.body.innerHTML = `
	<p>Wage: ${wage} Kč</p>
	<p>Hours: ${hours}</p>
	<p>Days: ${days}</p>
	<p>Before taxation: ${beforeTaxation} Kč</p>
	<p>After taxation: ${afterTaxation} Kč</p>
`