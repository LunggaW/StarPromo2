/// <reference path="../templates/SlideBox.html" />
angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout)
{

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
    }).then(function (modal)
    {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function ()
    {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function ()
    {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function ()
    {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function ()
        {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('SignUpCtrl', function ($scope)
{
    $scope.submit = function (username)
    {
        alert("Thanks " + username);
    }
})
.controller('InformasiCtrl', function ($scope, $stateParams)
{
})
.controller('SearchCtrl', function ($scope, $stateParams)
{
})
.controller('SignInCtrl', function ($scope, $window)
{



    $scope.submit = function (username)
    {
        alert("Log In " + username);
        var url = "#/app/slidebox";
        $window.location.href = url;
        //$location.fromTemplateUrl('/app/informasi', '_self');
        //$location.reload();

        //$urlRouterProvider.otherwise('/informasi');


    }


})



.controller('SlideBoxCtrl', function ($scope, $ionicSlideBoxDelegate, $ionicNavBarDelegate, $ionicModal)
{
    $ionicNavBarDelegate.showBar(true);
    $ionicNavBarDelegate.title("Main Menu");

    var promocode;
    var imageUrl;
    var barcode;
    var description;

    $scope.promoBest = promo;
    $scope.promoCategoryDetail = promo;
    $scope.promoCategory = promo;

    $scope.slideHasChanged = function ()
    {
        //$scope.items.push({ name: 'John', age: 25, gender: 'boy' });
        $ionicSlideBoxDelegate.update();
    };

    $scope.showDataBest = function (index)
    {
        //$scope.activeSlide = index;
        promocode = $scope.promoBest[index].promocode;
        imageUrl = $scope.promoBest[index].image;
        barcode = $scope.promoBest[index].barcode;
        description = $scope.promoBest[index].description;
        $scope.showModal('templates/promo-detail.html');
    }


    $scope.showDataCategory = function (index)
    {
        //$scope.activeSlide = index;
        imageUrl = $scope.promoCategory[index].image;
        $scope.showModal('templates/promo-categorydetail.html');
    }


    $scope.promoCategoryDetailShowData = function (index)
    {
        //$scope.activeSlide = index;
        promocode = $scope.promoCategoryDetail[index].promocode;
        imageUrl = $scope.promoCategoryDetail[index].image;
        description = $scope.promoCategoryDetail[index].description;
        barcode = $scope.promoCategoryDetail[index].barcode;
        $scope.showModal('templates/promo-detail.html');
    }

    $scope.promoZoom = function ()
    {
        //$scope.activeSlide = index;
        $scope.showModal('templates/promo-zoom.html');
    }

    $scope.showModal = function (templateUrl)
    {
        $scope.promo = {
            promocode: promocode,
            imageUrl: imageUrl,
            barcode: barcode,
            description : description
        }


        $ionicModal.fromTemplateUrl(templateUrl,
            {
                scope: $scope,
                animation: 'slide-in-up'
            }
        ).then(function (modal)
        {
            $scope.modal = modal;
            $scope.modal.show();
        }
        );

        // Close the modal
        $scope.closeModal = function ()
        {
            $scope.modal.hide();
            $scope.modal.remove();
        };
    }
})

.controller('PlaylistCtrl', function ($scope, $stateParams)
{
})


var promo = [
  { image: "img/910-resize.png", promocode: 'Matahari1-promocode', barcode: 'img/d914.png', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ultricies ligula. Maecenas sollicitudin neque sed porta condimentum. Praesent dictum libero ante, et varius lectus convallis quis. Vivamus orci orci, bibendum vel congue at, accumsan sed nisi. Cras suscipit quis enim vel ullamcorper. Suspendisse ullamcorper nisl sit amet turpis lacinia." },
  { image: "img/911-resize.png", promocode: 'Matahari2-promocode', barcode: 'img/d914.png', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ultricies ligula. Maecenas sollicitudin neque sed porta condimentum. Praesent dictum libero ante, et varius lectus convallis quis. Vivamus orci orci, bibendum vel congue at, accumsan sed nisi. Cras suscipit quis enim vel ullamcorper. Suspendisse ullamcorper nisl sit amet turpis lacinia." },
  { image: "img/BEF451.png", promocode: 'Matahari3-promocode', barcode: 'img/d914.png', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ultricies ligula. Maecenas sollicitudin neque sed porta condimentum. Praesent dictum libero ante, et varius lectus convallis quis. Vivamus orci orci, bibendum vel congue at, accumsan sed nisi. Cras suscipit quis enim vel ullamcorper. Suspendisse ullamcorper nisl sit amet turpis lacinia." },
  { image: "img/BEF50-resize.png", promocode: 'Matahari4-promocode', barcode: 'img/d914.png', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ultricies ligula. Maecenas sollicitudin neque sed porta condimentum. Praesent dictum libero ante, et varius lectus convallis quis. Vivamus orci orci, bibendum vel congue at, accumsan sed nisi. Cras suscipit quis enim vel ullamcorper. Suspendisse ullamcorper nisl sit amet turpis lacinia." },
  { image: "img/BEF451.png", promocode: 'Matahari5-promocode', barcode: 'img/d914.png', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ultricies ligula. Maecenas sollicitudin neque sed porta condimentum. Praesent dictum libero ante, et varius lectus convallis quis. Vivamus orci orci, bibendum vel congue at, accumsan sed nisi. Cras suscipit quis enim vel ullamcorper. Suspendisse ullamcorper nisl sit amet turpis lacinia." }
];

;
