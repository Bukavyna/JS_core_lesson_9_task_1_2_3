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
		//return `Повинно бути числове значення.`;
		document.write(`Повинно бути числове значення.`);
	}

	else if (number ==  ` `) {
		//return `Будь ласка, введіть число.`;
		document.write(`Будь ласка, введіть число.`);
		//Чому при введенні через "prompt" і відображенні через "document", вискакує: Введіть додатнє число.?
	}

	else if (number < 0) {
		//return `Введіть додатнє число.`;
		document.write(`Введіть додатнє число.`);
	}

	else {
		let squareRoot = Math.sqrt (number);
		//return `Квадратний корінь з ${number} дорівнює ${squareRoot}.`;
		document.write(`Квадратний корінь з ${number} дорівнює ${squareRoot}.`);
	}

}

let number = +prompt(`Введіть число.`);
getSqrt(number);
//console.log(getSqrt(`shenne`));
//console.log(getSqrt(` `));
//console.log(getSqrt(0));
//console.log(getSqrt(2));
*/

/*
let MyMath = {
	PI: 3.141592653589793,

	pow: function (number, degree) {
		let result = 1;

		if (Number(number, degree)) {
		for (let i = 0; i < degree; i++) {
			result *= number;
		}
		return result;
		}

		else {
			return `Введіть числа`;
		}
	},

	/////////Відобразити числа !
	abs: function (number) {

		if (Number(number)) {
			return `${number}`;
		}

		else {
			return `Ведіть число`;
		}
	},


/////////Відобразити мах. число !
	max: function () {
		let number = arguments[0];

		if (Number(number)) {
			for (let i = 1; i < arguments.length; i++) {
				number = number > arguments[i] ? number : arguments[i];
			}
			return number;
		}

		else {
			return `Введіть числа`;
		}
	},

/////////Відобразити мін. число !
	min: function () {
		let number =arguments[0];

		if (Number(number)) {
			for (let i = 1; i < arguments.length; i++) {
				number = number < arguments[i] ? number : arguments[i];
			}
			return number;
		}

		else {
			return `Введіть числа`;
		}
	}
}

console.log(MyMath.PI);
console.log(MyMath.pow(13,3));
console.log(MyMath.abs(13));
console.log(MyMath.max(2,3,-5));
console.log(MyMath.min(2,3,-5));
*/
