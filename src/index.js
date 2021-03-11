module.exports = function toReadable (number) {
	let numbersMapping = [
		['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
		'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
		['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	];
	
	function numberToString(number) {
		let stringFromNumber = String(number);
		let str = '';
		let suffix = Number(stringFromNumber.substr(stringFromNumber.length - 2, 2));
		let x = stringFromNumber.length - 1;
		while (x >= 0) {
			if (suffix < 20 && x === stringFromNumber.length - 1) {
				str = numbersMapping[0][Number(suffix)] + ' ' + str;
				x--;
			} else if (x === stringFromNumber.length - 2) {
				str = numbersMapping[1][Number(stringFromNumber[x] - 1)] + ' ' + str;
			} else if (x === stringFromNumber.length - 3) {
				str = numbersMapping[0][Number(stringFromNumber[x])] + ' hundred ' + str;
			} else {
				str = numbersMapping[0][Number(stringFromNumber[x])] + ' ' + str;
			}
			x--;
		}
		return str.trim();
	};

	if (number === 0) {
		return 'zero'
	} else if (number < 20) {
		return numbersMapping[0][number]
	} else {
		return numberToString(number);
	};
}
