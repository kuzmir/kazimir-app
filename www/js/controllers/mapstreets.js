'use strict';

angular.module('kazimir')
.controller('MapStreetsController', function($scope, $rootScope, $state, Restangular, $ionicScrollDelegate, $ionicHistory, $timeout) {

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
 
  $scope.openMapList = function() {
    if ($scope.class === "closed") {
      $scope.class = "active";
      $scope.selectedItem = false;
      delegate.freezeScroll(false);     
    }else {
      $scope.class = "closed";
      delegate.freezeScroll(true);
    }
  };
  
  $scope.selectedItem = "";
  $scope.streetSelected = function($index){
    if ($scope.class === "active") {
      $scope.class = "closed";
      delegate.freezeScroll(true);
    }
    $scope.selectedItem = $index;
    $rootScope.$emit('streetSelected', $scope.selectedItem);
    return $scope.selectedItem;
  };
  
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

});
