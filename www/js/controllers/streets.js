'use strict';

angular.module('kazimir')
.controller('StreetsController', function($scope, $rootScope, $state, $ionicHistory, Restangular, $translate, $ionicViewSwitcher) {

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
    $ionicViewSwitcher.nextDirection( 'back' );
    $rootScope.street = $index;
    $state.go('single-old');
    $rootScope.buttonClass = "new";
    return $rootScope.street;
  };
  //on click go to present single view
  $scope.singlePostNew = function ($index) {
    $rootScope.street = $index;
    $state.go('single-new');
    $rootScope.buttonClass = "old";
    return $rootScope.street;
  };

  
  $scope.rotate = function() {
      var container = document.getElementsByClassName('container');
      container = angular.element(container);
      container.toggleClass('flipped');
      if ($rootScope.buttonClass === "old") {
        $rootScope.buttonClass = "new";
      }else {
        $rootScope.buttonClass = "old";
      }
  };
  
  $scope.lang = 'en';//$translate.proposedLanguage();

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.myGoBackForward =function(){
    $ionicViewSwitcher.nextDirection( 'forward' );
    $ionicHistory.goBack();
  };
});
