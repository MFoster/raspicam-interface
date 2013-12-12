define(["app", "src/ui/layout/main", "marionette", "./PhotoListController"], function(app, primaryLayout, Marionette, PhotoListController){

	return app.module('PhotoHistory', function(module){
		module.on('start', function(){
			var controller = new PhotoListController();
			primaryLayout.content.show(controller.layout); 
			this.controller = controller;
			controller.start();
		});
	});

});
require(['app', 'src/ui/history/main', 'src/ui/navigation/main'], function(app){
	app.start();
})