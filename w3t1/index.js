/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {

	var myDate = { value: date };

	Object.defineProperty( myDate, 'add', {
		value: function (delta, unit) {
			if (delta < 0) {
				throw new TypeError('Отрицательный первый параметр. Нужен >=0.');
			}
			// console.log ('.ADD ', delta, unit);
			return this.change(delta, unit);			
		}
	});

	Object.defineProperty( myDate, 'subtract', {
		value: function (delta, unit) {
			if (delta < 0) {
				throw new TypeError('Отрицательный первый параметр. Нужен >=0.');
			}
			// console.log ('.SUBTRACT ', delta, unit);
			return this.change(-delta, unit);			
		}
	});


	Object.defineProperty( myDate, 'change', {
		value: function (delta, unit) {

			var myDateComponents = this.value.match(/[0-9]+/g);
			
			// console.log ('Components:', myDateComponents);

			var curValue = new Date (
				myDateComponents[0], // year
				myDateComponents[1], // month
				myDateComponents[2], // day
				myDateComponents[3], // hours
				myDateComponents[4] // minutes
				);

			// console.log ('curValue[-]:', curValue);

			switch (unit) {
				case 'minutes':
					curValue.setMinutes( curValue.getMinutes() + delta );
					break;
				case 'hours':
					curValue.setHours( curValue.getHours() + delta );
					break;
				case 'days':
					curValue.setDate( curValue.getDate() + delta );
					break;
				case 'months':
					curValue.setMonth( curValue.getMonth() + delta );
					break;
				case 'years':
					curValue.setFullYear( curValue.getFullYear() + delta );
					break;
				default:
					throw new TypeError('Непонятные единицы. Можно: years, months, days, hours, minutes.');
				}

			// console.log ('curValue[+]:', curValue);

			myDateComponentsNew = [
				curValue.getFullYear().toString(),
				curValue.getMonth().toString().padStart(2,'0'),
				curValue.getDate().toString().padStart(2,'0'),
				curValue.getHours().toString().padStart(2,'0'),
				curValue.getMinutes().toString().padStart(2,'0')
			]

			// console.log ('Components:', myDateComponentsNew);
			// console.log ('-----');

			this.value = myDateComponentsNew[0]+ "-" 
				+ myDateComponentsNew[1]+ "-"
				+ myDateComponentsNew[2]+ " " 
				+ myDateComponentsNew[3]+ ":" 
				+ myDateComponentsNew[4];

			// console.log (this);

			return this;
		}
	});

	// console.log (myDate);

	return myDate;

};
