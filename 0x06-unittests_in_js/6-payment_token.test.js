#!/usr/bin/env node

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', () => {
	it("should return a successful response when success is true", (done) => {
		getPaymentTokenFromAPI(true).then(response => {
			expect(response).to.deep.equal({data:  'Successful response from the API'});
			done();
		}).catch(done);
	});

	it("should not resolve when success is false", (done) => {
		getPaymentTokenFromAPI(false).then(() => {
			done(new Error('Expected the promise to be rejected'));
		}).catch((error) => {
			expect(error.message).to.equal("Failed to get payment token");
			done();
		});
	});
});
