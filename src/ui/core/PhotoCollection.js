define(["backbone", "./PhotoModel"], function(Backbone, PhotoModel){
	return Backbone.Collection.extend({
		url : "/photo/history/list",
		model : PhotoModel,
		comparator : function(alpha, bravo){
			return (alpha.get("time") > bravo.get("time") ? -1 : 1);
		},
		findByName : function(name){
			return this.find(function(model){ return name === model.get('name'); });
		}
	});
});