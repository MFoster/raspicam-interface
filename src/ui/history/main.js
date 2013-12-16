define(["app", "src/ui/layout/main", "marionette", "./PhotoListController", "./PhotoGridController", "./PhotoGridRouter", "./PhotoListRouter"], 
	function(app, primaryLayout, Marionette, PhotoListController, PhotoGridController, PhotoGridRouter, PhotoListRouter){
	
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
			var listController = new PhotoListController();
			var listRouter = new PhotoListRouter({ controller : listController });
			var opts = { trigger : true };
			var currentLayout = false;
			primaryLayout.content.show(controller.layout);
			controller.on('grid:item:click', function(e, name){
				router.navigate('photo/history/grid/' + name, opts);
			});

			controller.on("grid:stage:close", function(e){
				router.navigate('photo/history/grid', opts);
			});

			listController.on("list:item:click", function(e, name){
				router.navigate('photo/history/list/'+ name, opts);
			})

			controller.on("show", handleShowLayout);
			listController.on("show", handleShowLayout);

			function handleShowLayout(layout){
				if(currentLayout == layout){
					return false;
				}
				else{
					primaryLayout.content.show(layout);
					currentLayout = layout;
				}
			}
		})
	});

});
require(['app', 'backbone', 'src/ui/history/main', 'src/ui/navigation/main', 'src/ui/capture/main'], function(app, Backbone){
	app.start();
	setTimeout(function(){

		Backbone.history.start();

	}, 5000)
})