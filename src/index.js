/**
 * Makes friendly text for use in URLs.
 * @param {string} text The text to make friendly for URLs.
 * @param {Object} [options] Other options.
 * @param {boolean} [options.collapse=true] If true, multiple unfriendly characters in a row only produce one dash.
 * @param {RegExp} [options.unsafeCharRegex] The expression to match unsafe characters.
 * @returns {string}
 */
function urlFriendly(text, options) {
	if (typeof text !== "string") {
		const error = new TypeError("The text to slugify must be a string.");
		error.code = "TEXT_NOT_STRING";
		throw error;
	}

	const realOptions = {
		collapse: true,
		unsafeCharRegex: /[^a-zA-Z0-9_-]/g,
		...options,
	};

	const slugged = text.trim().replace(realOptions.unsafeCharRegex, "-");
	return realOptions.collapse ? slugged.replace(/-+/g, "-") : slugged;
}
module.exports = urlFriendly;