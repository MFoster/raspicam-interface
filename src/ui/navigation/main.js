define(["app", "src/ui/layout/main", "marionette", "./NavView", "./NavRouter", "./NavigationController"], 
	function(app, layout, Marionette, NavView, NavRouter, NavigationController){

	return app.module("navigation", function(nav){
		nav.addInitializer(function(){
			nav.controller = new NavigationController();
			layout.nav.show(nav.controller.view);
		});
	});

});