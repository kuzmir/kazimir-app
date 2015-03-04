// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('kazimir', ['ionic'])

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
  
  .state('new', {
    url: '/new',
    views: {
      'container-view': {
        templateUrl: 'templates/new.html',
        controller: 'StreetsController'
      }
    }
  })
  
  .state('old', {
    url: '/old',
    views: {
      'container-view': {
        templateUrl: 'templates/old.html',
        controller: 'StreetsController'
      }
    }
  })
  
  $urlRouterProvider.otherwise('/menu');
})

.controller('StreetsController', function($scope) {
  $scope.streets = [
    { name: 'Krakowska' },
    { name: 'Plac Nowy' },
    { name: 'Starowiślna' },
    { name: 'Podbrzezie' },
    { name: 'Krakowska' },
    { name: 'Plac Nowy' },
    { name: 'Starowiślna' },
    { name: 'Podbrzezie' },
    { name: 'Krakowska' },
    { name: 'Plac Nowy' },
    { name: 'Starowiślna' },
    { name: 'Podbrzezie' }
  ];
  
  $scope.rotate = function() {
    var container = document.getElementsByClassName('container');
    container = angular.element(container);
    container.toggleClass('flipped');
  };
});
