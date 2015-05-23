'use strict';

angular.module('kazimir')
.controller('MapController', function($scope, ApiService) {

  // Get the street list from API
  ApiService.getStreets().then(function(data){
    $scope.streets = data;
  });


  $scope.map = {
    center: {
      latitude: 50.0491111,
      longitude: 19.9445078
    }, zoom: 15
  };

  $scope.mapOptions = {
    scrollwheel: false
  };

  $scope.pathOptions = {
    stroke: {
      color: '#6060FB',
      weight: 3
    }
  }

});
