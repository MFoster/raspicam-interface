define(["marionette"], function(Marionette){
	return Marionette.AppRouter.extend({
		appRoutes : {
			"photo/history/grid/:name" : "routeStage",
			"photo/history/grid" : "routeGrid"
		}
	});
})