angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'app/view/pages/home.html'
	})
	.when('/about',{
		templateUrl: 'app/view/pages/about.html'
	})
	.otherwise({redirectTo: '/'});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});