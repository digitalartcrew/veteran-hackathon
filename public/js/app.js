var app = angular.module("LunchApp", ["ngVidBg", "ngAnimate","ui.router",'ngResource']);

app.config(function($stateProvider,$urlRouterProvider) {
  
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'SignUpCtrl'
  })
  
  .state('form', {
    url: '/form',
    templateUrl: 'views/form.html',
    controller: 'FormCtrl',
    resolve: {
      logincheck: checkLoggedin
    }
  })
  
  .state('form.welcome', {
    url: '/welcome',
    templateUrl: 'views/form-welcome.html',
    controller: 'WelcomeCtrl'
  })
  
  // url will be /form/statements
  .state('form.statements', {
    url: '/statements',
    templateUrl: 'views/form-statements.html'
  })

  .state('form.adultContactInfo1', {
    url: '/adultContactInfo1',
    templateUrl: 'views/form-adultContactInfo1.html',
    controller: "MainAdultController"
  })

  .state('form.adultContactInfo2', {
    url: '/adultContactInfo2',
    templateUrl: 'views/form-adultContactInfo2.html'
  })

  .state('form.assistanceProgram1', {
    url: '/assistanceProgram1',
    templateUrl: 'views/form-assistanceProgram1.html',
    controller: 'AssistCtrl'
  })

  .state('form.assistanceProgram2', {
    url: '/assistanceProgram2',
    templateUrl: 'views/form-assistanceProgram2.html'
  })

  .state('form.childStatus1', {
    url: '/childStatus1',
    templateUrl: 'views/form-childStatus1.html'
  })

  .state('form.childStatus2', {
    url: '/childStatus2',
    templateUrl: 'views/form-childStatus2.html'
  })

  .state('form.childrenInHousehold1', {
    url: '/childrenInHousehold1',
    templateUrl: 'views/form-childrenInHousehold1.html',
    controller: 'ChildrenController'
  })

  .state('form.adultsInHousehold1', {
    url: '/adultsInHousehold1',
    templateUrl: 'views/form-adultsInHousehold1.html',
    controller: 'AdultsController'
  })

  .state('form.adultsInHousehold2', {
    url: '/adultsInHousehold2',
    templateUrl: 'views/form-adultsInHousehold2.html'
  })

  .state('form.adultsInHousehold3', {
    url: '/adultsInHousehold3',
    templateUrl: 'views/form-adultsInHousehold3.html'
  })

  .state('form.adultsInHousehold4', {
    url: '/adultsInHousehold4',
    templateUrl: 'views/form-adultsInHousehold4.html'
  })

  .state('form.income1', {
    url: '/income1',
    templateUrl: 'views/form-income1.html',
    controller: 'ChildrenController'
  })

  .state('form.income2', {
    url: '/income2',
    templateUrl: 'views/form-income2.html'
  })

  .state('form.income3', {
    url: '/income3',
    templateUrl: 'views/form-income3.html',
    controller: "AdultsController"
  })

  .state('form.income4', {
    url: '/income4',
    templateUrl: 'views/form-income4.html'
  })

  .state('form.income5', {
    url: '/income5',
    templateUrl: 'views/form-income5.html'
  })

  .state('form.income6', {
    url: '/income6',
    templateUrl: 'views/form-income6.html'
  })

  .state('form.income7', {
    url: '/income7',
    templateUrl: 'views/form-income7.html'
  })

  .state('form.income8', {
    url: '/income8',
    templateUrl: 'views/form-income8.html'
  })

  .state('form.income9', {
    url: '/income9',
    templateUrl: 'views/form-income9.html'
  })


  .state('form.review', {
    url: '/review',
    templateUrl: 'views/form-review.html',
    controller: "ReviewController"
  })

  // .state('form.adults', {
  //   url: '/adults',
  //   controller: "MainAdultController",
  //   templateUrl: "views/form-adultContactInfo1.html"
  // })

  .state('form.adults-new', {
    url: '/adults/new',
    controller: "NewAdultController",
    templateUrl: "views/a-new.html"
  })

  .state('form.adults-single', {
    url: '/adults/:id',
    controller: "AdultController",
    templateUrl: "views/a-show.html"
  })

  .state('form.adults-edit', {
    url: '/adults/:id/edit',
    controller: "EditAdultController",
    templateUrl: "views/a-edit.html"
  })

  .state('form.children', {
    url: '/children',
    controller: "ChildrenController",
    templateUrl: "views/form-ChildContactInfo1.html"
  })

  .state('form.child-new', {
    url: '/children/new',
    controller: "NewChildController",
    templateUrl: "views/c-new.html"
  })

  .state('form.child-single', {
    url: '/children/:id',
    controller: "ChildController",
    templateUrl: "views/c-show.html"
  })

  .state('form.child-edit', {
    url: '/children/:id/edit',
    controller: "EditChildController",
    templateUrl: "views/c-edit.html"
  })

  $urlRouterProvider.otherwise('login');
  });

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/loggedin').success(function(user) {
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
}