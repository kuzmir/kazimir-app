'use strict';

angular.module('kazimir')
.controller('MapController', function($scope, Restangular) {

  // initialize restangular resource/model
  var Street = Restangular.all('streets');

  // get the street list
  Street.getList().then(function(streets){
    // pass all data to scope
    // TODO: check why streets are not rendered?
    $scope.streets = streets;
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
