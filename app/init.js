require("pages");

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/test", { templateUrl: "pages/test.html", controller: "test" })
		.otherwise({ redirectTo: "/test" });
	
	$locationProvider.html5Mode(true);
});