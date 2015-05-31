'use strict';

angular.module('kazimir')
.controller('MapStreetsController', function($scope, $rootScope, $state, Restangular, $ionicScrollDelegate, $timeout) {

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
  
  var delegate = $ionicScrollDelegate.$getByHandle('mapScroll');

  $timeout(function() {
    delegate.freezeScroll(true);
  }, 1000);

  $scope.class = "closed";
  var container = document.getElementsByClassName('map-street-list');
  container = angular.element(container);
  container.toggleClass('active');
  $scope.openMapList = function() {
    if ($scope.class === "closed") {
      $scope.class = "active";
      delegate.freezeScroll(false);
    }else {
      $scope.class = "closed";
      delegate.freezeScroll(true);
    }
  };

  $scope.selectedItem = "";
  $scope.streetSelected = function($index){
    console.log($index.name);
    if ($scope.class === "active") {
      $scope.class = "closed";
      delegate.freezeScroll(true);
    }
    $scope.selectedItem = $index;
    console.log($scope.selectedItem);
    return $scope.selectedItem;
  };

});
