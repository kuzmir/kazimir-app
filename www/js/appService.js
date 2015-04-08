angular.module('street.service', [])
.factory('StreetsService', function() {
  var StreetsSvc = {
  	data: [
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
  	]
  }

  return StreetsSvc;
})