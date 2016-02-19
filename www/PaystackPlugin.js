//
// Copyright (c) 2016 Arttitude360. All rights reserved.
//

/**
 * This class exposes the Paystack Android SDK functionality to javascript.
 *
 * @constructor
 */
function PaystackPlugin() {}

/**
 *
 * @param [Function} successCallback - callback to be invoked on successfully acquiring a token.
 * A single object argument will be passed which has a single key: "message" is a string containing the returned token.
 * @param {Function} errorCallback - callback to be invoked on failure to acquire a valid token.
 * A single object argument will be passed which has a single key: "error" is a string containing a description of the error.
 * @param {Array} cardInfo - The card details in the order - [cardNumber, expiryMonth, expiryYear, cvc]. 
 */
PaystackPlugin.prototype.getToken = function(successCallback, errorCallback, cardInfo) {
	return cordova.exec(successCallback,
		errorCallback,
		'PaystackPlugin',
		'getToken',
		cardInfo
		);
};

module.exports = new PaystackPlugin();