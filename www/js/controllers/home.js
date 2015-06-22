'use strict';

// Home screen controller
angular.module('kazimir')
.controller('HomeController', function($scope, LanguageService, $translate, $state) {

  $scope.setLanguage = function(lang){
    LanguageService.setLanguage(lang);
    $translate.use(lang);
    $scope.lang = lang;
  }

  $scope.lang = LanguageService.getCurrentLanguage();

});
