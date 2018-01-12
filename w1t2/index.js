/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
	if ( Number.isNaN(hours) || Number.isNaN(minutes) ) return false;
	if ( (hours < 0) || (hours >= 24) ) return false;
	if ( (minutes < 0) || (minutes >= 60) ) return false;
	return true;	
};
