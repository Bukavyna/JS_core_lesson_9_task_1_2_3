"use strict";

///////// Вирахувати площу кола !
/*
function areaCircle(r) {

	if (r == ' ') {
		alert(`Будь ласка, введіть радіус.`);
		//document.write(`Будь ласка, введіть радіус.`);
		//console.log(`Будь ласка, введіть радіус.`);
	}

	else if (isNaN(r) || +r <=0) {
		//alert(`Повинно бути числове значення.`);
		document.write(`Повинно бути числове значення.`);
		//console.log(`Повинно бути числове значення.`);
	}

	 else {
		let area = Math.PI * r * r;
		//alert(`Площа доршвнює ${area} квадратних одиниць.`);
		//document.write(`Площа дорівнює ${area} квадратних одиниць.`);
		console.log(`Площа дорівнює ${area} квадратних одиниць.`);
	}

}

let r = +prompt(`Задайте радіус кола.`);
areaCircle(r);
*/

/*
function areaCircle(r) {

	if (r == ` `) {
		return `Будь ласка, введіть радіус.`;
	}

	else if (isNaN(r) || r <=0) {
		return (`Повинно бути числове значення.`);
	}

	else {
		let area = Math.PI * r * r;
		return (`Площа дорівнює ${area} квадратних одиниць.`);
	}

}

console.log(areaCircle(2));
console.log(areaCircle(` `));
console.log(areaCircle(`sfkgen`));
*/


///////// Корінь квадратний !!
/*
function getSqrt(number) {

	if (isNaN(number)) {
		return `Повинно бути числове значення.`;
		//document.write(`Повинно бути числове значення.`);
	}

	else if (number == ' ') {
		return `Будь ласка, введіть число.`;
		//document.write(`Будь ласка, введіть число.`);
	}

	else if (number <= 0) {
		return `Введіть додатнє число.`;
		//document.write(`Введіть додатнє число.`);
	}

	else {
		let squareRoot = Math.sqrt (number);
		return `Квадратний корінь з ${number} дорівнює ${squareRoot}.`;
		//document.write(`Квадратний корінь з ${number} дорівнює ${squareRoot}.`);
	}

}

//let number = +prompt(`Введіть число.`);
//getSqrt(number);
console.log(getSqrt(2));
console.log(getSqrt(` `));
console.log(getSqrt(-6));
console.log(getSqrt(`shenne`));
*/

//Як зробити так, щоб коли ввів 0 не вискакувало 'Будь ласка, введіть число.'? Пробую по всякому, і не виходить. Дякую за допомогу!
