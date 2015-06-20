'use strict';

angular.module('kazimir')
.factory('LanguageService', function($window) {

  // expose api
  return {
    // returns currently stored language
    getCurrentLanguage: function(){

      return $window.localStorage['language'];
    },

    // store the language in local storage
    setLanguage: function(language, $translate){

      $window.localStorage['language'] = language;
    }
  };

});
