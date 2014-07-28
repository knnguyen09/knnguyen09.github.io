(function(){
	var app = angular.module('contact-directives', []);
	
	app.directive('sectionPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'section-panels.html'
		};
	});
})();