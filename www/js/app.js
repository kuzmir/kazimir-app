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
        controller: 'StreetsController'
      }
    }
  })
  
  .state('single-old', {
    url: '/single-old',
    views: {
      'container-view': {
        templateUrl: 'templates/single-old.html',
        controller: 'StreetsController'
      }
    }
  })

  .state('single-new', {
    url: '/single-new',
    views: {
      'container-view': {
        templateUrl: 'templates/single-new.html',
        controller: 'StreetsController'
      }
    }
  })
  
  $urlRouterProvider.otherwise('/menu');
})

.controller('StreetsController', function($scope, $state) {
  $scope.streets = [
    { name: 'Krakowska',
      title: 'Ulica Krakowska',
      description: 'Lorem Ipsum' },
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
  $scope.singlePostOld = function() {
    $state.go('single-old');
  };
  $scope.singlePostNew = function() {
    $state.go('single-new');
  };
});
