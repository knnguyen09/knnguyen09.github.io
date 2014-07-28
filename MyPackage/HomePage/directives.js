(function(){
	var app = angular.module('homePage-directives', []);
	
	app.directive('mobilePanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'mobile-panels.html',
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