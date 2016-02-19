app.controller("NavCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/login");
      });
  };
});

app.controller("LunchCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/login");
      });
  };
});

app.controller("FormCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.formData = {};
  // $scope.title = "Test Header"
});

app.controller("WelcomeCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.formData = {};
  $scope.title = "Welcome";
});

app.controller("SignUpCtrl", function($scope, $http, $rootScope, $location, $state) {
   // $scope.resources = [
   //          '../img/lime.png',
   //          '*.ogv',
   //          '*.mp4',
   //          '*.swf'
   //      ];
        $scope.poster = '../img/soldier.jpg';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '22';
        $scope.playInfo = {};
        $scope.pausePlay = true;
  $scope.signup = function(user) {

    if (user.password == user.password2) {
      console.log('Almost there!');
      $http.post('/signup', user)
        .success(function(user) {
          $rootScope.currentUser = user;
         $state.go('form.welcome');
        });
    }
  };
});

app.controller("LoginCtrl", function($location, $scope, $http, $rootScope, $state) {
  // $scope.resources = [
  //           './img/lime.png',
  //           '*.ogv',
  //           '*.mp4',
  //           '*.swf'
  //       ];
        $scope.poster = '../img/soldier.jpg';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '22';
        $scope.playInfo = {};
        $scope.pausePlay = true;

  $scope.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        $rootScope.currentUser = response;
        $state.go('form.welcome');
      });
  };
});

app.controller("AdultsController", function($scope, $location, AdultService, $state){
   $scope.createAdult = function(adult){
    AdultService.save(adult, function(){
      $state.go('form.adultsInHousehold1');
    });
  };
  $scope.adults = AdultService.query();
  $scope.deleteAdult = function(adult){
    adult.$delete(function(adult){
      $scope.adults.splice($scope.adults.indexOf(adult),1);
    });
  };
});

app.controller("MainAdultController", function($scope, $location, AdultService, $state){
  $scope.createAdult = function(adult){
    AdultService.save(adult, function(){
      $state.go('form.adultContactInfo2');
    });
  };
});

app.controller("AssistCtrl", function($scope, $location, $state){
    $scope.benefit1 = false;
    $scope.benefit2 = false;
    $scope.benefit3 = false;
    $scope.casenumber;

    $scope.hasBenefits = function(benefit){
      if($scope.benefit1 || $scope.benefit2 || $scope.benefit3){
        $state.go('form.childrenInHousehold1');
        console.log($scope.casenumber)
      }else{
        $state.go('form.childStatus1');
      }
    } 
});



app.controller("NewAdultController", function($scope, $location, AdultService, $state){
  $scope.createAdult = function(adult){
    AdultService.save(adult, function(){
      $state.go('form.adultsInHousehold1');
    });
  };
});

app.controller("AdultController", function($scope, $location, $routeParams, AdultService, $state){
  AdultService.get({id: $routeParams.id}, function(adult){
     $scope.adult = adult;
  }, function(err){
    $state.go('form.adultsInHousehold1');
  });
});


app.controller("EditAdultController", function($scope, $location, $routeParams, AdultService, $state){
  AdultService.get({id: $routeParams.id},function(adult){
    $scope.adult = adult;
  }, function(err){
    $state.go('form.adultsInHousehold1');
  });
  $scope.editAdult = function(adult){
    console.log("This is working!");
    $scope.adult.$update(function(){
      $location.path('/');
    });
  };
});


app.controller("ChildrenController", function($scope, $location, ChildService, $state){
  $scope.children = ChildService.query();
  $scope.deleteChild = function(child){
    child.$delete(function(child){
      $scope.children.splice($scope.children.indexOf(child),1);
    });
  };
});

app.controller("NewChildController", function($scope, $location, ChildService, $state){
  $scope.createChild = function(child){
    ChildService.save(child, function(){
      $state.go('form.childrenInHousehold1');
    });
  };
});

app.controller("ChildController", function($scope, $location, $routeParams, ChildService, $state){
  ChildService.get({id: $routeParams.id}, function(child){
    $scope.child = child;
  }, function(err){
    $location.path('/');
  });
});


app.controller("EditChildController", function($scope, $location, $routeParams, ChildService, $state){
  ChildService.get({id: $routeParams.id},function(child){
    $scope.child = child;
  }, function(err){
    $state.go('form.childrenInHousehold1');
  });
  $scope.editChild = function(child){
    console.log("This is working!");
    $scope.child.$update(function(){
      $state.go('form.childrenInHousehold1');
    });
  };
});

app.controller("ReviewController", function($scope, $location, AdultService, ChildService, $state){
  $scope.adults = AdultService.query();
  $scope.children = ChildService.query();
});

//SIG CONTROLLER
app.controller('SignatureController',function($scope) {
  $scope.items = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
    
    $scope.testAction = function(svg){
      $scope.items.push({});
      //alert(datapair);
      $scope.hash = 'data:' + svg[0] + "," + svg[1];
      var i = new Image();
      i.src = "data:" + svg[0] + "," + svg[1];
      // console.log("THIS",i);
      console.log("THIS", svg[0]);
      $(i).appendTo($("body")); // append the image (SVG) to DOM.
    };
    
    /*
        var datapair = ['image/svg+xml'];
                datapair[1] ='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="252" height="49"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffcc00" fill="none" d="M 1 32 c 0.07 -0.07 2.53 -2.87 4 -4 c 2.81 -2.16 5.81 -4.17 9 -6 c 8.04 -4.63 15.8 -9.46 24 -13 c 6.27 -2.71 13.25 -4.5 20 -6 c 5.22 -1.16 15.04 -3.2 16 -2 c 0.86 1.08 -4.7 9.01 -8 12 c -6.74 6.11 -16.35 10.97 -24 17 c -3.31 2.61 -9.85 8.94 -9 9 c 2.59 0.18 24.81 -4.85 38 -7 c 16.56 -2.7 46.9 -6.91 48 -7 c 0.27 -0.02 -7.64 2.43 -11 4 c -1.44 0.67 -2.99 1.85 -4 3 c -1.18 1.35 -3.52 4.48 -3 5 c 0.81 0.81 6.05 1 9 1 c 2.95 0 6.09 -0.34 9 -1 c 4.36 -0.99 8.52 -3.05 13 -4 c 13.05 -2.76 37.41 -6.81 39 -7 c 0.23 -0.03 -4.27 1.84 -5 3 c -0.62 1 -0.44 3.68 0 5 c 0.44 1.32 1.74 3.37 3 4 c 4 2 9.89 4.04 15 5 c 12.38 2.34 25.18 4.04 38 5 c 9.7 0.72 29 0 29 0"/></svg>';
                */
    
    var datapair = ['image/jsignature;base30'];
                datapair[1] = 'base30,2A0Z101100001110000000_4XZ6954655685877555655_3I10000000000000000Z1_4RZ487868658576656664_2B469754_3w10000Z1_4A001011000000000000_4NZ856566755597676675_4D65_q00_4F654_1E201_4B76_4KZ10_5K00000000000Z100000001_4PZ79678786555467565554_5L34334_4OZ21221_6N0001001000000000000_4PZ6958888755776556655_6P43332_4OZ32323_8CZ322121010000000Y1132342111012001000100Z11234_1K24444554556657554332Z134555445656656554432Y1_aF0Z1000000100000000000Y12231322222212212222322221000010000Z101000000_i559657657575558555564Z536455335435Y336443434335Z68789556a6984656655_cOZ42120000Y212323422110000Z11232_1N25545556554442Z43554555754433_dK00000100000000000Z11112Y4543433Z3545_4GZ565557897a555586764454Y22121232210_ew0000000001101110111_g6767677675687645444_eR0100000000000001355_i8895559a78855665200_gHZ345522200Y1233355211_3uZ3100Y334555322210Z344_gJ0001011001000000001001_a6674666565765655564554_iM223223224211123122213332323242222222222Z658669654374555_3yZ53546644734443553334Y3643453564337444435000000001201000_jD323333_3H545632_ku445533_3J244643_kT78aa8_3I36565';
    
    
    $scope.customSignature = datapair;
});