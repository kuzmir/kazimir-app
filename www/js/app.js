// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('kazimir', ['ionic', 'uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
  .state('menu', {
    url: '/menu',
    views: {
      'container-view': {
        templateUrl: 'templates/menu.html'
      }
    }
  })
  
  .state('list-view', {
    url: '/list-view',
    views: {
      'container-view': {
        templateUrl: 'templates/list-view.html',
        controller: 'StreetsController'
      }
    }
  })

  .state('map-view', {
    url: '/map-view',
    views: {
      'container-view': {
        templateUrl: 'templates/map-view.html',
        controller: 'MapCtrl'
      }
    }
  })
  
  .state('single-old', {
    url: '/streets/:id',
    views: {
      'container-view': {
        templateUrl: 'templates/single-old.html',
        controller: 'StreetController'
      }
    }
  })

  .state('single-new', {
    url: '/streets/:id',
    views: {
      'container-view': {
        templateUrl: 'templates/single-new.html',
        controller: 'StreetController'
      }
    }
  })

  $urlRouterProvider.otherwise('/menu');
})

app.controller('StreetsController', function($scope, $state, $rootScope) {
  $scope.streets = [
    { id: 0,
      name: 'Krakowska',
      title: 'Ulica Krakowska',
      description: 'Lorem Ipsum Krakowska' },
    { id:1,
      name: 'Plac Nowy',
      description: 'Lorem Ipsum Plac Nowy' },
    { id:2,
      name: 'Starowiślna',
      description: 'Lorem Ipsum Starowiślna' },
    { id:3,
      name: 'Podbrzezie',
      description: 'Lorem Ipsum Podbrzezie' },
    { id: 4,
      name: 'Krakowska',
      title: 'Ulica Krakowska',
      description: 'Lorem Ipsum Krakowska' },
    { id:5,
      name: 'Plac Nowy',
      description: 'Lorem Ipsum Plac Nowy' },
    { id:6,
      name: 'Starowiślna',
      description: 'Lorem Ipsum Starowiślna' },
    { id:7,
      name: 'Podbrzezie',
      description: 'Lorem Ipsum Podbrzezie' },
    { id: 8,
      name: 'Krakowska',
      title: 'Ulica Krakowska',
      description: 'Lorem Ipsum Krakowska' },
    { id:9,
      name: 'Plac Nowy',
      description: 'Lorem Ipsum Plac Nowy' },
    { id:10,
      name: 'Starowiślna',
      description: 'Lorem Ipsum Starowiślna' },
    { id:11,
      name: 'Podbrzezie',
      description: 'Lorem Ipsum Podbrzezie' },
  ];
  
 
  $scope.singlePostOld = function(street) {
    $rootScope.currentLocationDetails = street;
    $state.go('single-old');
  };
  $scope.singlePostNew = function() {
    $state.go('single-new');
  };
});
app.controller('StreetController', function($scope, $rootScope){
  $scope.street = $rootScope.currentLocationDetails;
    $scope.rotate = function() {
      var container = document.getElementsByClassName('container');
      container = angular.element(container);
      container.toggleClass('flipped');
    };
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
});
app.controller('MapCtrl', function($scope, $rootScope){
  $scope.map = { center: { latitude: 50.0467657, longitude: 20.0048731 }, zoom: 8 };
});
