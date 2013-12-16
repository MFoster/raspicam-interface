define(["backbone", "./PhotoModel"], function(Backbone, PhotoModel){
	return Backbone.Collection.extend({
		url : "/photo/history/list",
		model : PhotoModel,
		findByName : function(name){
			return this.find(function(model){ return name === model.get('name'); });
		}
	});
});