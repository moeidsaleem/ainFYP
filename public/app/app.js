

let app = angular.module('myApp', [
	'ngRoute',
	'firebase',
	'ui.router',
	'monospaced.qrcode']);


app.run(['$rootScope', function ($rootScope) {
       
	$rootScope.hideX =false; 
	$rootScope.showX =false;

	

}])