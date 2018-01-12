// Телефонная книга
// var phoneBook = {};
var phoneBook = [];

// { name: String, phones [String, String, ...] }

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

	var cmd = command.split(' ',3);

//	Show command
	// console.log('[1:'+cmd[0]+']');
	// console.log('[2:'+cmd[1]+']');
	// console.log('[3:'+cmd[2]+']');

	switch (cmd[0]) {

		case 'ADD':

			var name = cmd[1];
			var phones = cmd[2].split(',');

			// look if exists
			var idx = -1;
			for (var i=0; i<phoneBook.length; i++) {
				if (name===phoneBook[i].name) idx = i;
			}

			// console.log(idx);

			// if name found

			if (idx>=0) {
				for (var i=0; i<phones.length; i++) {
					if (!phoneBook[idx].phones.some( function (e, i, a) {
						return (e===this)
					}, phones[i])) {
						phoneBook[idx].phones.push(phones[i]);
					} 
				}
			} else {
				phoneBook.unshift({ name: name, phones: phones});
			}

			// console.log(phoneBook);

			return true;
			break;

		case 'SHOW':

			// console.log ('Book:')
			// console.log (phoneBook);
			// console.log ('---')

			var result = [];
			phoneBook.reduce ( function (a, v) {
				a.push( v.name + ': ' + v.phones.join(', ') );
				return a;
			}, result);

			// console.log (result);

			return result;
			break;

		case 'REMOVE_PHONE':
			var phones = cmd[1].split(',');

			phones.forEach( function (e) {
				phoneBook.forEach( function (e) {
					e.phones.forEach( function (e, i, a) {

						// console.log ("cmp: "+e+" vs. "+this);
						if (e==this) {
							// console.log ("true!");
							a.splice(i, 1);
						}
					}, this );
				}, e);
			});

			// delete name if no phones left
			phoneBook.forEach( function (e, i, a) {
				if (e.phones.length == 0) {
					a.splice(i, 1);
				}
			} );

			return true;
			break;

		default:
			return false;


	}
};
