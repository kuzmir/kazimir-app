'use strict';

angular.module('kazimir')
.controller('MapController', function($scope, Restangular) {

  // initialize restangular resource/model
  var Street = Restangular.all('streets');

  // get the street list
  Street.getList().then(function(streets){
    // pass all data to scope
    // TODO: check why streets are not rendered?
    $scope.streets = streets;
    streets.forEach(function(value) {
      var latLangPath = value.path_string.split(";");
      latLangPath.forEach(function(value){
        var latlng = value.split(",");
        $scope.location = new google.maps.LatLng(latlng[0], latlng[1]);
      });
    });
  });
 
  $scope.map = {
    center: {
      latitude: 50.0491111,
      longitude: 19.9445078
    }, zoom: 15
  };

  $scope.mapOptions = {
    scrollwheel: false
  };

  $scope.pathOptions = {
    stroke: {
      color: '#6060FB',
      weight: 3
    }
  }
});
