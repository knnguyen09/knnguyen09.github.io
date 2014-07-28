(function(){
	var app = angular.module('homePage-directives', []);
	
	app.directive('mobilePanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'mobile-panels.html'
		};
	});
})();