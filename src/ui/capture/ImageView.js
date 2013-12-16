define(["backbone"], function(Backbone){
	return Backbone.View.extend({
		initialize : function(config){
			Backbone.View.prototype.initialize.call(this, config);
			this.model.on("change", this.render.bind(this));
			console.log("bound to model change event");
		},
		render : function(){
			console.log("rendering elem")
			this.$el.attr("src", this.model.get("src"));
		}
	})
})