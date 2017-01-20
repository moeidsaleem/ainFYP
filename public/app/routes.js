


app.config(['$locationProvider','$routeProvider','$stateProvider', function ($locationProvider,$routeProvider,$stateProvider) {


 
   $locationProvider.hashPrefix('');
  $routeProvider.when('/home', {
    templateUrl: 'app/modules/home/home.html',
    controller: 'homeCtrl'
  })
  .when('/admin', {
  	templateUrl: 'app/modules/admin/admin.html',
  	controller: 'AdminCtrl'
  })
  .otherwise({ redirectTo: '/home' });



// State Setup - ui Router
$stateProvider.state('adminControl', {
  templateUrl: 'app/modules/admin/admin.html',
  controller:'adminCtrl'
})
  
}]);