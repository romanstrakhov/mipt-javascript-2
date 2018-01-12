/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

	var hashtagsFiltered = hashtags.reduce(function (acc, item) {
		if (!acc.some( function (e, i, a) { 
			return e.toLowerCase() === item.toLowerCase();
		})) {
			acc.push(item.toLowerCase());
		}
		return acc;
	}, []);

	return hashtagsFiltered.join(', ');

};
