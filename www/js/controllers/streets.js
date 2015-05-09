'use strict';

angular.module('kazimir')
.controller('StreetsController', function($scope, Restangular) {

  // initialize restangular resource/model
  var Street = Restangular.all('streets');

  // get the street list
  Street.getList().then(function(streets){
    // pass all data to scope
    console.log('Streets loaded:', streets);
    $scope.streets = streets;
  });

});
