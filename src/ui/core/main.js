define(["app", "src/ui/layout/main", "marionette", "./PhotoCollection"], 
	function(app, display, Marionette, PhotoCollection, PhotoRecentController, PhotoRecentRouter){
	

	return app.module("core", function(core){
		core.collection = new PhotoCollection();
	});


});