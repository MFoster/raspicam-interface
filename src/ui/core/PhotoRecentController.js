define(["marionette", "./PhotoRecentLayout", "src/ui/layout/PhotoStageView"], 
	function(Marionette, PhotoRecentLayout, PhotoStageView){
	return Marionette.Controller.extend({
		constructor : function(options){
			Marionette.Controller.prototype.constructor.apply(this, arguments);
			var self = this;
			this.collection = options.collection
			this.layout = new PhotoRecentLayout();
			this.stage = new PhotoStageView();
			this.layout.on("render", function(){
				var model = self.collection.first();
				self.stage.model = model;
				self.layout.stage.show(self.stage);
			});
		},
		routeRecent : function(){
			this.trigger("show", this.layout);
		}
	});
})