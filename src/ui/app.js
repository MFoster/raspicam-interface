define(["marionette", "src/ui/template/cache"], function(Marionette, fcompiledTemplate){
	var Application = Marionette.Application.extend({
		el : "#application"
	});

	var app = new Application();

	app.addRegions({ container : ".container"});

	return app; 
});