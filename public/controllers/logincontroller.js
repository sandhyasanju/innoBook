app.controller('loginCtrl', function($scope, $location, login){
  console.log("login controller");
  $scope.loginuser = function(data){
  		console.log(data);
  		login.login(data).then(function(success){
  			console.log(success);
  			$scope.user = success.data;
        $location.path('/profile');
  		},
  			function(error){
  				console.log(error);
  			}
  		)
  }
});
