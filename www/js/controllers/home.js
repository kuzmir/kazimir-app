'use strict';

// Home screen controller
angular.module('kazimir')
.controller('HomeController', function($scope, $ionicLoading, LanguageService, ApiService, $translate) {

  $scope.setLanguage = function(lang){
    LanguageService.setLanguage(lang);
    $scope.lang = lang;
  }

  $scope.lang = LanguageService.getCurrentLanguage();

  var loading = ApiService.initialize();

  // perform initial loading
  $ionicLoading.show({
    template: $translate.instant('loading')
  });

  loading.then(function() {
    $ionicLoading.hide();
  });

});
