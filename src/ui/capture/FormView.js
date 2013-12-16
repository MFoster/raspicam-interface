define(["backbone"], function(Backbone){
	return Backbone.View.extend({
		events : {
			"submit" : "handleSubmit",
		},
		handleSubmit : function(e){
			try{
				this.trigger("submit", this, e);
			}
			catch(e){

			}
			return false;
		},
		render : function(){}
	});
})