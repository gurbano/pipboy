'use strict';

/**
 * @ngdoc function
 * @name pipboyClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pipboyClientApp
 */
var endpoint = 'http://localhost:3000/API';
angular.module('pipboyClientApp')
  .controller('CameraCtrl', function ($scope,$http) {
  		console.log('camera controller');
  		$scope.alerts = [
  			//{type: 'success', message: 'easy like a sunday morning'},
  			//{type: 'info', message: 'easy like a sunday morning'},
  			//{type: 'warning', message: 'easy like a sunday morning'},
  			//{type: 'danger', message: 'easy like a sunday morning'},
  		];  	
  		/*Load camera list*/ 
  		$scope.scan = function (arg) {
  			$http.get(endpoint + '/Cameras/').
			then(function(response) {
			    console.log(response);
			    $scope.alerts = [
		  			{type: 'success', message: response.data.length + ' camera found.'},
		  			//{type: 'info', message: 'easy like a sunday morning'},
		  			//{type: 'warning', message: 'easy like a sunday morning'},
		  			//{type: 'danger', message: 'easy like a sunday morning'},
		  		];  	
			    $scope.cameras = response.data;
			  });
  		}
  		/*Bootstrap*/ 
  		$scope.bootstrap = function (cb) {
  			$http.post(endpoint + '/Cameras/Bootstrap/').
			then(function(response) {
			   
			   $scope.alerts = [
					{type: 'success', message: 'System restarted'},					  			
				]; 
				if(cb)cb(response);			    
			});
  		}
  		
  		$scope.start = function (camid) {
  			var cam = $scope.cameras[camid];
  			switch(camid){
  				case 'photo':
  					$http.post(endpoint + '/Cameras/photo',{}).
					then(function(response) {
					    if (response.data.result.status==='KO'){
					    	$scope.alerts = [
					    		{type: 'danger', message: response.data.result.msg},
					  		];  
					    }
					    if (response.data.result.status==='OK'){
					    	$scope.alerts = [
					  			{type: 'success', message: 'Photo taken ('+response.data.result.src+')'},					  			
					  		];  	
					    }
					});			
  				break;
  			}
  		}



  		$scope.bootstrap($scope.scan);

  		
  });

