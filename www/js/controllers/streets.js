'use strict';

angular.module('kazimir')
.controller('StreetsController', function($scope, $rootScope, $state, ApiService) {

  // Get the street list from API
  console.log('Hey')
  ApiService.getStreets().then(function(data){
    $scope.streets = data;
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

  $scope.class = "old";
  $scope.rotate = function() {
      var container = document.getElementsByClassName('container');
      container = angular.element(container);
      container.toggleClass('flipped');
      if ($scope.class === "old") {
        $scope.class = "new";
      }else {
        $scope.class = "old";
      }
  };
});
