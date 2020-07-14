// Require fetch
// Note: fetch is required here for this package to work well
const fetch = require("node-fetch");

/* Makes a PATCH request with given data and return response
 ** param {string}
 ** param {string}
 ** return {object || string}
 */
const subscribe = async (email, projectApi) => {
	// Validation
	if (typeof email !== "string" && typeof projectApi !== "string") {
		throw new Error("Both arguments should be typeof string.");
	} else if (typeof email !== undefined && typeof projectApi !== undefined) {
		throw new Error("Both arguments should be passed.");
	}

	const res = await fetch(
		"https://cknewsletter.herokuapp.com/api/v1/projects/subscribe",
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({ subscriber: email, apiKey: projectApi }),
		}
	);

	// Return response
	if (res.status === 200) {
		return res;
	} else if (res.status === 409) {
		throw new Error("Already subscribed.");
	} else {
		throw new Error("There's an error.");
	}
};

module.exports = { subscribe };
