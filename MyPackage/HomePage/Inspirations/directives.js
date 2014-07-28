(function(){
	var app = angular.module('inspirations-directives', []);
	
	app.directive('sectionPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'section-panels.html'
		};
	});
	
	app.directive('mobilePanels', function(){
		return{
			restrict: 'E',
			templateUrl: '../mobile-panels.html'
		};
	});
})();