(function(){
	var app = angular.module('korterra', ['korterra-directives']);

	app.controller('KorterraController', function(){
		this.myData = data.records;
	});

	app.controller("ReviewController", function(){
		this.review = {};
		this.addInfo = function(newData){
			newData.push(this.review);
			this.review = {};
		};
	});
	
	app.controller("SearchCtrl",function($scope){
		$scope.query = {};
		$scope.queryBy = '$';
		$scope.employees = data.records;
		$scope.orderProp="workdate";                
	});
	
	/////////////////
	//
	// Our sample data set.
	// This you should not change.
	//
	var data = {
		records : [
			{ jobid : 'MN1238', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2013, 11, 21), contractor : 'Joe Diggs', phone : '6125551234' },
			{ jobid : 'MN1243', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2013, 12, 31), contractor : 'Sammy Spade', phone : '6125554567' },
			{ jobid : 'MN1247', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 05, 01), contractor : 'Sammy Spade', phone : '6125554567' },
			{ jobid : 'MN1248', mobileid : 'METRO-NORTH', typeofwork : 'Ditch Cleaning', workdate: new Date(2014, 01, 09), contractor : 'Joe Diggs', phone: '6125551234' },
			{ jobid : 'MN1240', mobileid : 'METRO-NORTH', typeofwork : 'Ditch Cleaning', workdate: new Date(2014, 01, 18), contractor : 'Joe Diggs', phone: '6125551234' },
			{ jobid : 'MN1252', mobileid : 'METRO-NORTH', typeofwork : 'Ditch Cleaning', workdate: new Date(2014, 07, 12), contractor : 'Joe Diggs', phone: '6125551234' },
			{ jobid : 'MN1236', mobileid : 'METRO-NORTH', typeofwork : 'Ditch Cleaning', workdate: new Date(2014, 01, 21), contractor : 'Joe Diggs', phone: '6125551234' },
			{ jobid : 'MN1246', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 06, 14), contractor : 'Joe Diggs', phone : '6125551234' },
			{ jobid : 'MN1249', mobileid : 'METRO-NORTH', typeofwork : 'Sewer Repair', workdate: new Date(2014, 03, 01), contractor : 'Sammy Spade', phone: '6125554567' },
			{ jobid : 'MN1253', mobileid : 'METRO-NORTH', typeofwork : 'Sewer Repair', workdate: new Date(2013, 09, 08), contractor : 'Sammy Spade', phone: '6125554567' },
			{ jobid : 'MN1255', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 03, 03), contractor : 'Sammy Spade', phone : '6125554567' },
			{ jobid : 'MN1256', mobileid : 'METRO-NORTH', typeofwork : 'Ditch Cleaning', workdate: new Date(2014, 05, 02), contractor : 'Joe Diggs', phone: '6125551234' },
			{ jobid : 'MN1239', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 01, 31), contractor : 'Sammy Spade', phone : '6125554567' },
			{ jobid : 'MN1241', mobileid : 'METRO-NORTH', typeofwork : 'Sewer Repair', workdate: new Date(2011, 10, 25), contractor : 'Sammy Spade', phone: '6125554567' },
			{ jobid : 'MN1251', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 01, 13), contractor : 'Sammy Spade', phone : '6125554567' },
			{ jobid : 'MN1242', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 01, 11), contractor : 'Joe Diggs', phone : '6125551234' },
			{ jobid : 'MN1245', mobileid : 'METRO-NORTH', typeofwork : 'Sewer Repair', workdate: new Date(2014, 03, 30), contractor : 'Sammy Spade', phone: '6125554567' },
			{ jobid : 'MN1234', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 01, 01), contractor : 'Joe Diggs', phone : '6125551234' },
			{ jobid : 'MN1237', mobileid : 'METRO-NORTH', typeofwork : 'Sewer Repair', workdate: new Date(2014, 05, 05), contractor : 'Sammy Spade', phone: '6125554567' },
			{ jobid : 'MN1250', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 02, 23), contractor : 'Joe Diggs', phone : '6125551234' },
			{ jobid : 'MN1244', mobileid : 'METRO-NORTH', typeofwork : 'Ditch Cleaning', workdate: new Date(2014, 01, 14), contractor : 'Joe Diggs', phone: '6125551234' },
			{ jobid : 'MN1254', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 02, 04), contractor : 'Joe Diggs', phone : '6125551234' },
			{ jobid : 'MN1257', mobileid : 'METRO-NORTH', typeofwork : 'Sewer Repair', workdate: new Date(2014, 06, 11), contractor : 'Sammy Spade', phone: '6125554567' },
			{ jobid : 'MN1235', mobileid : 'METRO-SOUTH', typeofwork : 'Excavation', workdate: new Date(2014, 02, 11), contractor : 'Sammy Spade', phone : '6125554567' },
		]
	};
})();