define(["marionette"], function(Marionette){
	return Marionette.AppRouter.extend({
		appRoutes : {
			"photo/capture" : "routeCapture",
			"" : "routeCapture"
		}
	})
})