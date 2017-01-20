
app.controller('homeCtrl', function ($scope,$rootScope,$firebaseAuth,$location,$state,$firebaseArray) {
 

 const db   = firebase.database().ref();
 const users = db.child('users');
 const fireDb = db.child('fireData'); 


  // THIS IS HOW YOU CREATE A FIREBASE AUTH AND FIREBASE DB.
  //Thankyou 

 // predefine variables
 $scope.full_name ='';
 $scope.email = '';
 $scope.phone = null;
 $scope.cnic = null;



 // $scope.fireData = $firebaseArray(testRef);

 $scope.auth = $firebaseAuth();


$scope.afterLogin = function(){
    $rootScope.hideX = true;
    $rootScope.showX = true;
      if($rootScope.status === 'valid'){
              $state.go('adminControl');
        } else {
          $scope.result ='error , Unable to access admin panel';
        }

  }


  $scope.afterSignUp = function(){
             /*
                parent.child(identifier).set({
                    key:value,
                    key:value,
                    key:value,
                    key:value
                })
             */
       users.child($scope.full_name).set({  /*create new user*/
                password:$scope.pass,
                full_name:$scope.full_name,
                phone:$scope.phone,
                cnic:$scope.cnic,
                address:$scope.address,
                img:$scope.img,
                email:$scope.email,
                uniqueId:$scope.uid
               });
          $rootScope.val = $scope.email;
           $rootScope.hideX = true;
           $rootScope.showX = true;
           if($rootScope.status === 'valid'){
              $state.go('adminControl');
        } else {
          $scope.result ='error , Unable to access admin panel';
        }
 


  }
// Works if the user exists in our Firebase Authentication User list. 

$scope.signIn = function(){
	 $scope.auth.$signInWithEmailAndPassword($scope.email, $scope.pass).then(function(firebaseUser){
      // my logic after sign In 
      $scope.result = "login Succesful!: UID = "+firebaseUser.uid;
      $scope.resultColor = 'green';     
      $rootScope.status = 'valid';
         $rootScope.val = $scope.email;
      $scope.afterLogin();

      //more logic...
	 }).catch(function(error){
        console.log("authentication Error",error);
        $scope.result = "authentication Error "+ error ;
        $scope.resultColor = 'red';
        //more error handling 
    

	 });
}

    $scope.signUp = function(){
    	$scope.auth.$createUserWithEmailAndPassword($scope.email, $scope.pass).then(
    		function(firebaseUser){
            // logic after sign up 
            $scope.result = "user signed up with following email" + firebaseUser.email + firebaseUser.uid;
                $scope.uid = firebaseUser.uid;
                $rootScope.status = 'valid';
               $scope.resultColor = 'green';
               $scope.afterSignUp();



    	}).catch(function(error){
    		// error handling
    		$scope.result = "Error : "+error;
    		 $scope.resultColor = 'red';
    	});


}

  
  
   
});


/*how DOES Firebas eAUthentication Works ? 

So when the user Sign Up , 
User is asigned a special unique ID. 
This ID is what returned of the user. 


>>Database Strategy 
> So we cna do this as whenever signup, create a field in database, and saves its unique ID. 
once unique id is saved in database, that user can have more credentials. 


*/