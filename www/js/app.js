// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('kazimir', ['ionic'])

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
      description: {
        old: {
          title: 'Old Ulica Krakowska',
          text: 'Old Lorem Ipsum Krakowska',
        },
        after: {
          title: 'New Ulica Krakowska',
          text: 'New Lorem Ipsum Krakowska',
        }
      },
    },
    { id:1,
      name: 'Plac Nowy',
      description: {
        old: {
          title: 'Old Plac Nowy',
          text: 'Old Lorem Ipsum Plac Nowy',
        },
        after: {
          title: 'New Plac Nowy',
          text: 'New Lorem Ipsum Plac Nowy',
        }
      },
    },
    { id:2,
      name: 'Starowiślna',
      description: {
        old: {
          title: 'Old Starowiślna',
          text: 'Old Lorem Ipsum Starowiślna',
        },
        after: {
          title: 'New Starowiślna',
          text: 'New Lorem Ipsum Starowiślna',
        }
      },
    },
    { id:3,
      name: 'Podbrzezie',
      description: {
        old: {
          title: 'Old Podbrzezie',
          text: 'Old Lorem Ipsum Podbrzezie',
        },
        after: {
          title: 'New Podbrzezie',
          text: 'New Lorem Ipsum Podbrzezie',
        }
      },
    },
    { id: 4,
      name: 'Krakowska',
      description: {
        old: {
          title: 'Old Krakowska',
          text: 'Old Lorem Ipsum Krakowska',
        },
        after: {
          title: 'New Krakowska',
          text: 'New Lorem Ipsum Krakowska',
        }
      },
    },
    { id:5,
      name: 'Plac Nowy',
      description: {
        old: {
          title: 'Old Plac Nowy',
          text: 'Old Lorem Ipsum Plac Nowy',
        },
        after: {
          title: 'New Plac Nowy',
          text: 'New Lorem Ipsum Plac Nowy',
        }
      },
    },
    { id:6,
      name: 'Starowiślna',
      description: {
        old: {
          title: 'Old Starowiślna',
          text: 'Old Lorem Ipsum Starowiślna',
        },
        after: {
          title: 'New Starowiślna',
          text: 'New Lorem Ipsum Starowiślna',
        }
      },
    },
    { id:7,
      name: 'Podbrzezie',
      description: {
        old: {
          title: 'Old Podbrzezie',
          text: 'Old Lorem Ipsum Podbrzezie',
        },
        after: {
          title: 'New Podbrzezie',
          text: 'New Lorem Ipsum Podbrzezie',
        }
      },
    },
    { id: 8,
      name: 'Krakowska',
      description: {
        old: {
          title: 'Old Krakowska',
          text: 'Old Lorem Ipsum Krakowska',
        },
        after: {
          title: 'New Krakowska',
          text: 'New Lorem Ipsum Krakowska',
        }
      },
    },
    { id:9,
      name: 'Plac Nowy',
      description: {
        old: {
          title: 'Old Plac Nowy',
          text: 'Old Lorem Ipsum Plac Nowy',
        },
        after: {
          title: 'New Plac Nowy',
          text: 'New Lorem Ipsum Plac Nowy',
        }
      },
    },
    { id:10,
      name: 'Starowiślna',
      description: {
        old: {
          title: 'Old Starowiślna',
          text: 'Old Lorem Ipsum Starowiślna',
        },
        after: {
          title: 'New Starowiślna',
          text: 'New Lorem Ipsum Starowiślna',
        }
      },
    },
    { id:11,
      name: 'Podbrzezie',
      description: {
        old: {
          title: 'Old Podbrzezie',
          text: 'Old Lorem Ipsum Podbrzezie',
        },
        after: {
          title: 'New Podbrzezie',
          text: 'New Lorem Ipsum Podbrzezie',
        }
      },
    },
  ];
  
 
  $scope.singlePostOld = function(street) {
    $rootScope.currentLocationDetails = street;
    $state.go('single-old');
  };
  $scope.singlePostNew = function(street) {
    $rootScope.currentLocationDetails = street;
    $state.go('single-new');
  };
  $scope.navTitle='<img class="title-image" src="images/kidsintouchtext.png" />';
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

app.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
  $scope.initialize = function() {
    var myLatlng = new google.maps.LatLng(50.0467657,20.0048731);
    
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
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
  //google.maps.event.addDomListener(window, 'load', initialize);

  
})
