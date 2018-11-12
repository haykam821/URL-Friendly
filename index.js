/**
 * Makes friendly text for use in URLs.
 * @param {string} text The text to make friendly for URLs.
 * @param {Object} [opts] Other options.
 * @param {boolean} [opts.collapse=true] If true, multiple unfriendly characters in a row only produce one dash.
 * @param {RegExp} [opts.unsafeCharRegex] The expression to match unsafe characters.
 * @returns {string}
 */
function urlFriendly(text, opts) {
	if (typeof text !== "string") {
		const error = new TypeError("The text to slugify must be a string.");
		error.code = "TEXT_NOT_STRING";
		throw error;
	}

	const realOpts = {
		collapse: true,
		unsafeCharRegex: /[^a-zA-Z0-9_-]/g,
		...opts,
	};

	const slugged = text.trim().replace(realOpts.unsafeCharRegex, "-");
	return realOpts.collapse ? slugged.replace(/-+/g, "-") : slugged;
}
module.exports = urlFriendly;