// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })
    .state('app.signup', {
        url: '/signup',
        views: {
            'menuContent': {
                templateUrl: 'templates/signup.html',
                controller: 'SignUpCtrl'
            }
        }
    })

    .state('app.signin', {
        url: '/signin',
        views: {
            'menuContent': {
                templateUrl: 'templates/signin.html',
              //  controller: 'SignInCtrl'c:\users\hayi\documents\visual studio 2015\projects\kbs.ksb.promo2\kbs.kbs.promo\www\js\app.js
            }
        }
    })

    .state('app.informasi',
    {
        url: '/informasi',
        views: {
            'menuContent': {
                templateUrl: 'templates/informasi.html',
                controller: 'InformasiCtrl'
            }
        }
    })

    .state('app.zoom', {
        url: '/zoom',
        views: {
            'menuContent': {
                templateUrl: 'templates/zoom.html',
                //controller: 'ZoomCtrl'
            }
        }
    })
    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            }
        }
    })

    .state('app.browse', {
        url: '/browse',
        views: {
            'menuContent': {
                templateUrl: 'templates/browse.html'
            }
        }
    })
      .state('app.playlists', {
          url: '/playlists',
          views: {
              'menuContent': {
                  templateUrl: 'templates/playlists.html',
                  controller: 'PlaylistsCtrl'
              }
          }
      })        

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    })

    .state('app.slidebox',
   {
       url: "/slidebox",
       views: {
           'menuContent': {
               templateUrl: "templates/SlideBox.html",
               controller: 'SlideBoxCtrl'
           }
       }
   });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/slidebox');
});
