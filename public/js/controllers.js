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

app.controller("EducationCtrl", function($scope, $location, EducationService, $state){

});

app.controller("EventsCtrl", function($scope, $location, EventService, $state){

});

app.controller("JobSearchCtrl", function($scope, $location, JobService, $state){

});

app.controller("EntrepreneurCtrl", function($scope, $location, EntrepreneurService, $state){

});

app.controller("HousingCtrl", function($scope, $location, HousingService, $state){

});

app.controller("HealthCtrl", function($scope, $location, $routeParams, HealthService, $state){

});


app.controller("VeteranMentorCtrl", function($scope, $location, $routeParams, MentorService, $state){

});


app.controller("ProfileCtrl", function($scope, $location, $state){

});

