'use strict';

angular.module('kazimir')
.controller('MapController', function($scope, $rootScope, Restangular) {

  // initialize restangular resource/model
  var Street = Restangular.all('streets');

  // get the street list
  Street.getList().then(function(streets){
    // pass all data to scope
    // TODO: check why streets are not rendered?
    $scope.streets = streets;

    // Adding path for each street to display polylines
    streets.forEach(function(street) {
      street.path = [];
      var latLangPath = street.path_string.split(";");
      latLangPath.forEach(function(value){
        var latlng = value.split(",");
        var location = new google.maps.LatLng(latlng[0], latlng[1]);
        street.path.push(location);
      });
    });
  });
  $rootScope.$on('streetSelected', function(event, street) {
    $scope.selectedStreet  = street; 
  })
  $scope.map = {
    center: {
      latitude: 50.0491111,
      longitude: 19.9445078
    }, zoom: 15
  };

  $scope.mapOptions = {
    scrollwheel: false,
    streetViewControl: false,
    zoomControl: false,
    mapTypeControl: false
  };

  $scope.pathOptions = {
    stroke: {
      color: '#565656',
      weight: 3
    },
    selectedStroke: {
      color: '#6060FB',
      weight: 3
    }
  }
  $scope.getStroke = function(street){

    if($scope.selectedStreet && ($scope.selectedStreet.id   === street.id)) {
      return $scope.pathOptions.selectedStroke;
    }else {
      return $scope.pathOptions.stroke;
    }
  };

});
