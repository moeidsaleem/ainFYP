app.controller('adminCtrl', function ($scope,$firebaseObject,$rootScope,$firebaseAuth) {
     var db = firebase.database().ref();
     var user = db.child('users');
     var search = user.orderByChild('email').equalTo($rootScope.val).limitToFirst(1);

     $scope.data = $firebaseObject(search);

    $scope.auth = $firebaseAuth();
   $scope.authRun = function(){

	auth.signInWithEmailAndPassword($scope.email , $scope.password).then(function(firebaseUser){
		console.log("Signed in as:", firebaseUser.uid);
		}).catch(function(error) {
		console.error("Authentication failed:", error);
});
}
});