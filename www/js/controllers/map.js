'use strict';

angular.module('kazimir')
.controller('MapController', function($scope, $rootScope, ApiService, $cordovaGeolocation) {

  // Get the street list from API
  ApiService.getStreets().then(function(data) {
    $scope.streets = data;
  });

  $rootScope.$on('streetSelected', function(event, street) {
    $scope.selectedStreet  = street;
  });

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

  $scope.getStroke = function(street) {
    if ($scope.selectedStreet && $scope.selectedStreet.id === street.id) {
      return $scope.pathOptions.selectedStroke;
    } else {
      return $scope.pathOptions.stroke;
    }
  };

  // initialize empty position
  $scope.userLocation = {
    id: 'user',
    coords: {
      latitude: null,
      longitude: null
    },
    options: {
      icon: '/img/user.png'
    },
    visible: false
  };

  // watch location
  var geolocation = $cordovaGeolocation.getCurrentPosition({
    timeout: 10000,
    enableHighAccuracy: false
  });

  geolocation.then(function(position) {
    // create point
    $scope.userLocation.coords.latitude = position.coords.latitude;
    $scope.userLocation.coords.longitude = position.coords.longitude;
    $scope.userLocation.visible = true;
  }, function(err) {
    console.log(err);
  });

});
