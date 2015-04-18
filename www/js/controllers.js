angular.module('streets.controllers', [])
.controller('StreetsController', function($scope, $state, $rootScope) {
  $scope.streets = [
    { id: 0,
      name: 'Krakowska',
      src : 'img/foto_krakowska.png',
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
      src : 'img/foto_placnowy.png',
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
      name: 'Brzozowa',
      src : 'img/foto_brzozowa.png',
      description: {
        old: {
          title: 'Old Brzozowa',
          text: 'Old Lorem Ipsum Brzozowa',
        },
        after: {
          title: 'New Brzozowa',
          text: 'New Lorem Ipsum Brzozowa',
        }
      },
    },
    { id:3,
      name: 'Podbrzezie',
      src : 'img/foto_krakowska.png',
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
      src : 'img/foto_placnowy.png',
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
      src : 'img/foto_brzozowa.png',
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
      src : 'img/foto_krakowska.png',
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
      src : 'img/foto_placnowy.png',
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
      src : 'img/foto_brzozowa.png',
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
      src : 'img/foto_krakowska.png',
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
      src : 'img/foto_placnowy.png',
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
      src : 'img/foto_brzozowa.png',
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

.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
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
});

