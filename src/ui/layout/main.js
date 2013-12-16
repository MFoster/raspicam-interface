define(["app", "./PageLayout"], function(app, PageLayout){
	var layout = new PageLayout();

	app.container.show(layout);

	return layout;

});