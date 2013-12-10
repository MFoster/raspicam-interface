define(["app", "marionette", "./PhotoListController"], function(app, Marionette, PhotoListController){

	return app.module('PhotoHistory', function(module){
		module.on('start', function(){
			var controller = new PhotoListController();
			app.container.show(controller.layout); 
			this.controller = controller;
			controller.start();
		});
	});

});
require(['app', 'src/ui/history/main'], function(app){
	app.start();
})