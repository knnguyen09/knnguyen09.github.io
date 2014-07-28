(function(){
	var app = angular.module('skills-directives', []);
	
	app.directive('sectionPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'section-panels.html'
		};
	});
})();