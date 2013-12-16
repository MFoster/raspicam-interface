define(["marionette"], function(Marionette){
	return Marionette.Layout.extend({
		template : "history/photo-grid-layout",
		regions : {
			content : ".photo-content"
		},
		events : {
			"click .photo-grid-item" : "handleGridItemClick",
			"click .photo-stage button[data-action=close]" : "handleCloseStage"
		},
		handleGridItemClick : function(e){
			console.log("grid click");
			var name = e.currentTarget.getAttribute("data-photo-name");
			this.trigger("grid:item:click", e, name);
		},
		handleCloseStage : function(e){
			this.trigger("grid:stage:close", e);
		}
	})
})