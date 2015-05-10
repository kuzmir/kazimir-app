'use strict';

angular.module('kazimir')
.controller('StreetsController', function($scope, $rootScope, $state, Restangular) {

  // initialize restangular resource/model
  var Street = Restangular.all('streets');

  // get the street list
  Street.getList().then(function(streets){
    // pass all data to scope
    // console.log('Streets loaded:', streets);
    $scope.streets = streets;
  });
  // on click go to past single view
  $scope.singlePostOld = function ($index) {
    $rootScope.street = $index;
    $state.go('single-old');
    return $rootScope.street;
  };
  //on click go to present single view
  $scope.singlePostNew = function ($index) {
    $rootScope.street = $index;
    $state.go('single-new');
    return $rootScope.street;
  };
 
  $scope.rotate = function() {
      var container = document.getElementsByClassName('container');
      container = angular.element(container);
      container.toggleClass('flipped');
  };
});
