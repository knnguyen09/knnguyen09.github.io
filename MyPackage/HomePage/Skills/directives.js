(function(){
	var app = angular.module('skills-directives', []);
	
	app.directive('sectionPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'section-panels.html',
			controller: function(){
				this.selectTab = function(setTab){
					this.tab = setTab || 0;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});
})();