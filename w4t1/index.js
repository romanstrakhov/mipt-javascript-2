
//var initcollection;
var thecollection;
var res = 0;

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {

	var queueFilter = [];
	var queueSelect = [];

	// console.log("[*collection]");
	// console.log(arguments);
	
	thecollection = collection.slice();

	var rescollection = thecollection.slice();

	for (var i=1; i<arguments.length; i++) {

		switch ( arguments[i].name ) {
			case "filterInFn":
				queueFilter.push(arguments[i]);	
				break;
			case "selectFn":
				queueSelect.push(arguments[i]);	
				break;
			default:
				throw new TypeError('Wrong function '+arguments[i].name);
		}
	}


	for (var i=0; i<queueFilter.length; i++) {
		// console.log("}1}");
		rescollection = queueFilter[i](rescollection);
	}

	for (var i=0; i<queueSelect.length; i++) {
		// console.log("}2}");
		rescollection = queueSelect[i](rescollection);
	}

	return rescollection;


}

/**
 * @params {String[]}
 */
function select() {

	// console.log("[*select]");
	
	var fields = [].slice.call(arguments);

	return function selectFn(collection) {
		// console.log("[*select*2]");
		var newcollection = [];
		collection.forEach (function(e, i, a) {
			var e2 = {};
			for (var j=0; j<fields.length; j++) {
				// console.log('>>', j, ' ', fields[j],'=>',e[fields[j]]);
				Object.defineProperty(e2,fields[j],{
					enumerable: true,
					configurable: false,
					writable: false,
					value: e[fields[j]]
				});
			}
			this.push(e2);
		}, newcollection);

		return newcollection;

	}

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	// console.log("[*filterIn]");
	// console.log("property: ",property);
	// console.log("values: ",);
	// console.dir(values);
	return function filterInFn(collection) {
		return collection.filter( function (e, i, a) {
			// console.log("elem: "+ property + " " + e[property]);
			// console.dir(Object.getOwnPropertyNames(e));
			if (Object.getOwnPropertyNames(e).includes(property)) {
				// console.log("+");
				return values.includes(e[property]); 
			}
			// console.log("-");
			return false;
		});
	}

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
