angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl: 'app/view/pages/home.html'
	})
	.when('/about',{
		templateUrl: 'app/view/pages/about.html'
	})
	.when('/register',{
		templateUrl: 'app/view/pages/users/register.html',
		controller: 'regCtrl',
		controllerAs: 'register'
	})
	.otherwise({redirectTo: '/'});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});