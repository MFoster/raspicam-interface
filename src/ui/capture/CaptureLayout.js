define(["marionette"], function(Marionette){
	return Marionette.Layout.extend({
		template : "capture/capture-layout",
		events : {
			"submit" : "handleSubmit"
		},
		regions : {
			"stage" : ".photo-stage"
		},
		handleSubmit : function(e){
			try{
				this.trigger("submit", e);
			}
			catch(e){

			}
			return false;
		}
	})
})