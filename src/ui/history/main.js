define(["app", "src/ui/layout/main", "marionette", "./PhotoListController", "./PhotoGridController", "./PhotoGridRouter"], 
	function(app, primaryLayout, Marionette, PhotoListController, PhotoGridController, PhotoGridRouter){
	
	return app.module('PhotoHistory', function(module){
		// module.on('start', function(){
		// 	var controller = new PhotoListController();
		// 	primaryLayout.content.show(controller.layout); 
		// 	this.controller = controller;
		// 	controller.start();
		// });
		module.on('start', function(){
			var controller = new PhotoGridController();
			var router = new PhotoGridRouter({ controller : controller });
			primaryLayout.content.show(controller.layout);
			controller.on('grid:item:click', function(e, name){
				router.navigate('photo/history/grid/' + name, { trigger : true});
			});

			controller.on("grid:stage:close", function(e){
				router.navigate('photo/history/grid', { trigger : true });
			});

		})
	});

});
require(['app', 'backbone', 'src/ui/history/main', 'src/ui/navigation/main'], function(app, Backbone){
	app.start();
	setTimeout(function(){

		Backbone.history.start();

	}, 5000)
})