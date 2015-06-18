'use strict';

angular.module('kazimir')
.controller('StreetsController', function($scope, $rootScope, $state, $ionicHistory, ApiService, $translate, $ionicViewSwitcher) {

  // initialize restangular resource/model
  ApiService.getStreets().then(function(data) {
    $scope.streets = data;
  });

  // on click go to past single view
  $scope.singlePostOld = function($index) {
    $ionicViewSwitcher.nextDirection('back');
    $rootScope.street = $index;
    $state.go('single-old');
    $rootScope.buttonClass = 'new';
    return $rootScope.street;
  };

  //on click go to present single view
  $scope.singlePostNew = function($index) {
    $rootScope.street = $index;
    $state.go('single-new');
    $rootScope.buttonClass = 'old';
    return $rootScope.street;
  };

  $scope.rotate = function() {
    var container = document.getElementsByClassName('container');
    container = angular.element(container);
    container.toggleClass('flipped');
    if ($rootScope.buttonClass === 'old') {
      $rootScope.buttonClass = 'new';
    } else {
      $rootScope.buttonClass = 'old';
    }
  };

  $scope.lang = 'en';//$translate.proposedLanguage();

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.myGoBackForward = function() {
    $ionicViewSwitcher.nextDirection('forward');
    $ionicHistory.goBack();
  };
});
