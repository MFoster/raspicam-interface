define(["app", "src/ui/layout/main", "./CaptureController", "./CaptureRouter"], function(app, superLayout, CaptureController, CaptureRouter){

	return app.module('capture', function(capture){
		capture.addInitializer(function(config){
			var controller = new CaptureController(config);
			var router = new CaptureRouter({ controller : controller });
			controller.on("show", function(layout){
				superLayout.content.show(layout);
			});
			controller.on("capture", function(e){
				capture.trigger("capture", e);
			});
		})
	});
})