define(["app", "src/ui/layout/main", "marionette", "./PhotoCollection", "./PhotoRecentController", "./PhotoRecentRouter"], 
	function(app, display, Marionette, PhotoCollection, PhotoRecentController, PhotoRecentRouter){
	

	return app.module("core", function(core){
		core.collection = new PhotoCollection();
		core.addInitializer(function(){
			core.collection.fetch();
		});

		core.photoRecent = new PhotoRecentController({ collection : core.collection });
		core.photoRecentRouter = new PhotoRecentRouter({ controller : core.photoRecent });
		core.photoRecent.on("show", function(layout){
			display.content.show(layout);
		})
	});


});