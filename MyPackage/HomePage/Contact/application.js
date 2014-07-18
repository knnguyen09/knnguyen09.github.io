(function(){
	var app = angular.module('contact', ['contact-directives']);
	
	app.controller('ContactController', function(){
	});
	
	app.controller("ContactFormController", function(){
		this.message = {};
		this.message.createdOn = Date.now();
		this.addMessage = function(product){
			product.reviews.push(this.message);
			this.message = {};
			this.message.createdOn = Date.now();
		};
	});
})();