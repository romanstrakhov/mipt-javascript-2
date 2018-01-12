/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {

	if (hours<0 || hours>=24) {
		return false;
	} 
	if (minutes<0 || minutes>=60) {
		return false;
	} 
	if (interval<0) {
		return false;
	} 

	// hours to add
	minutes_add = interval % 60;
	// minutes to add
	hours_add = Math.floor(interval / 60);

//	minutes transmit
	hours_extra = Math.floor((minutes + minutes_add) / 60);
	minutes_res = (minutes + minutes_add) % 60;

//	hours_transmit
	hours_res = hours + hours_add + hours_extra;
	hours_res = hours_res % 24;

	var time_res = "";

	if (hours_res < 10) {
		time_res += "0";
	}

	time_res += String(hours_res);
	time_res += ":";

	if (minutes_res < 10) {
		time_res += "0";
	}

	time_res += String(minutes_res);

	return time_res;

};
