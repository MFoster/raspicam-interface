define(["backbone", "./PhotoListModel"], function(Backbone, PhotoListModel){
	return Backbone.Collection.extend({
		url : "/photo/history/list",
		model : PhotoListModel
	});
});