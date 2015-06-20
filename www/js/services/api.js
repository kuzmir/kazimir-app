'use strict';

angular.module('kazimir')
.factory('ApiService', function(Restangular, $q) {

  var streets = null;

  var deferred = $q.defer();

  var getStreets = function() {
    if (streets) {
      // resolve promise immediately
      deferred.resolve(streets);
    } else {

      // get the street list
      var StreetApi = Restangular.all('streets').getList()

      // get from the api
      StreetApi.then(function(streetData) {
        // cache result
        streets = streetData
        deferred.resolve(streetData);
      });

    }

    return deferred.promise;
  };

  // expose api
  return {
    getStreets: getStreets
  };

});
