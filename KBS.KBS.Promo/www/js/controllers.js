angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SignUpCtrl', function ($scope) {
    $scope.submit = function (username) {
        alert("Thanks " + username);
    }
})
.controller('InformasiCtrl', function ($scope, $stateParams) {
})
.controller('SearchCtrl', function ($scope, $stateParams) {
})
.controller('SignInCtrl', function ($scope, $log, $window) {
           
    

    $scope.submit = function (username) {        
        alert("Log In " + username);
        var url = "#/app/informasi";
        $log.log(url);
        $window.location.href = url;
        //$location.fromTemplateUrl('/app/informasi', '_self');
        //$location.reload();
        
        //$urlRouterProvider.otherwise('/informasi');
       
            
    }
    

})


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('SlideBoxCtrl', function ($scope, $ionicSlideBoxDelegate, $ionicModal) {
    var promocode;
    var imageUrl;
    var barcode;

    $scope.promoBest = promo;
    $scope.promoCategory = promo;
    $scope.promoCategoryDetail = promo;

    $scope.slideHasChanged = function () {
        //$scope.items.push({ name: 'John', age: 25, gender: 'boy' });
        $ionicSlideBoxDelegate.update();
    };

    $scope.showDataBest = function (index) {
        //$scope.activeSlide = index;
        promocode = $scope.promoBest[index].promocode;
        imageUrl = $scope.promoBest[index].image;
        barcode = $scope.promoBest[index].barcode;
        $scope.showModal('templates/promo-bestpromodetail.html');
    }

    $scope.promoBestDetailShowData = function (index)
    {
        //$scope.activeSlide = index;
        promocode = $scope.promoCategoryDetail[index].promocode;
        imageUrl = $scope.promoCategoryDetail[index].image;
        $scope.showModal('templates/promo-categorydetaildetail.html');
    }

    //$scope.onTapBest = function (index)
    //{
    //    //$scope.activeSlide = index;
    //    imageUrl = $scope.promoBest[index].image;
    //    $scope.showModalImage('app/templates/promo-imagepopover.html');
    //}

    $scope.showDataCategory = function (index) {
        //$scope.activeSlide = index;
        promocode = $scope.promoCategory[index].promocode;
        imageUrl = $scope.promoCategory[index].image;
        barcode = $scope.promoCategory[index].barcode;
        $scope.showModal('templates/promo-categorydetail.html');
    }


    $scope.promoCategoryDetailShowData = function (index) {
        //$scope.activeSlide = index;
        promocode = $scope.promoCategoryDetail[index].promocode;
        imageUrl = $scope.promoCategoryDetail[index+1].image;
        $scope.showModal('templates/promo-categorydetaildetail.html');
    }

    $scope.promoZoom = function ()
    {
        //$scope.activeSlide = index;
        $scope.showModal('templates/promo-zoom.html');
    }

    $scope.showModal = function (templateUrl) {
        $scope.promo = {
            promocode: promocode,
            imageUrl: imageUrl
        }


        $ionicModal.fromTemplateUrl(templateUrl,
            {
                scope: $scope,
                animation: 'slide-in-up'
            }
        ).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
        }
        );

        // Close the modal
        $scope.closeModal = function () {
            $scope.modal.hide();
            $scope.modal.remove();
        };
    }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


var promo = [
  { name: 'John', age: 25, gender: 'boy', image: "img/914-resize.png", promocode: 'Matahari1-promocode', barcode: 'Matahari1-barcode' },
  { name: 'Jessie', age: 30, gender: 'girl', image: "img/911-resize.png" ,promocode: 'Matahari2-promocode', barcode: 'Matahari2-barcode'},
  { name: 'Johanna', age: 28, gender: 'girl', image: "img/BEF451.png", promocode: 'Matahari3-promocode', barcode: 'Matahari3-barcode' },
  { name: 'Joy', age: 15, gender: 'girl', image: "img/BEF50-resize.png", promocode: 'Matahari4-promocode', barcode: 'Matahari4-barcode' },
  { name: 'Mary', age: 28, gender: 'girl', image: "img/BEF451.png", promocode: 'Matahari5-promocode', barcode: 'Matahari5-barcode' }
];

;
