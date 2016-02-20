var app = angular.module("VeteranApp", ["ngVidBg", "ngAnimate","ui.router",'ngResource']);

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
  

  .state('form.profile', {
    url: '/profile',
    templateUrl: 'views/form-profile.html',
    controller: 'ProfileCtrl'
  })

  .state('form.education', {
    url: '/education',
    templateUrl: 'views/form-education.html',
    controller: "EducationCtrl"
  })

  .state('form.veteranmentornetwork', {
    url: '/veteranmentornetwork',
    templateUrl: 'views/form-vetmentor.html',
    controller: 'VeteranMentorCtrl'
  })

  .state('form.jobsearch', {
    url: '/jobsearch',
    templateUrl: 'views/form-jobsearch.html',
    controller: 'JobSearchCtrl'
  })

  .state('form.entrepreneurship', {
    url: '/entrepreneurship',
    templateUrl: 'views/form-entrepreneur.html',
    controller: 'EntrepreneurCtrl'
  })

  .state('form.housing', {
    url: '/housing',
    templateUrl: 'views/form-housing.html',
    controller: 'HousingCtrl'
  })

  .state('form.healthcare', {
    url: '/healthcare',
    templateUrl: 'views/form-healthcare.html',
    controller: 'HealthCtrl'
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