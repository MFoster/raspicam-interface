define(["marionette"], function(Marionette){
	return Marionette.AppRouter.extend({
		appRoutes : {
			"photo/history/list" : "routeList",
			"photo/history/list/:name" : "routeListImage"
		}
	})
})