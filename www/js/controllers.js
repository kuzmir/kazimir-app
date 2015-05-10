angular.module('streets.controllers', [])
.controller('StreetsController', function($scope, $state, $rootScope, $ionicLoading, $compile) {

  $scope.initialize = function() {
    var myLatlng = new google.maps.LatLng(50.0467657,20.0048731);

    var mapOptions = {
      center: myLatlng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);


    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }

})
.controller('StreetController', function($scope, $rootScope){
  $scope.street = $rootScope.currentLocationDetails;
    $scope.rotate = function() {
      var container = document.getElementsByClassName('container');
      container = angular.element(container);
      container.toggleClass('flipped');
    };
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
})
