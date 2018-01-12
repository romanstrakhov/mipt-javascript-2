/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

	var tweetPack = tweet.split(' ');

	var hashtags = tweetPack.reduce(function(hashtags, item) {
		if (item.startsWith('#')) {
			if (!hashtags.some(function(e, i, a) {
				return (e === item);
			})) {
				hashtags.push(item);
			}
		}
		return hashtags;
	}, []).map(function (e) {
		return e.slice(1);
	});

	// hashtags.forEach(function (e, i, a) {
	// 	a[i] = e.slice(1, e.length);
	// });

return hashtags;


};



