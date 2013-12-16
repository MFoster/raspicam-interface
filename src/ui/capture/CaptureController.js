define(["marionette", "./CaptureLayout", "jquery", "src/ui/history/PhotoModel", "src/ui/history/PhotoStageView"], 
	function(Marionette, CaptureLayout, jQuery, PhotoModel, StageView){

	return Marionette.Controller.extend({
		constructor : function(options){
			Marionette.Controller.prototype.constructor.apply(this, arguments);
			this.layout = new CaptureLayout();
			
			this.stageModel = new PhotoModel();
			this.stageModel.url = "/capture";
			this.stageView = new StageView({ model : this.stageModel });
			this.layout.on("submit", this.handleSubmit.bind(this));
			this.stageModel.on("sync", this.stageModel.render);
		},
		handleSubmit : function(e){
			var self = this;
			this.stageModel.fetch({ success : function(){
				self.layout.stage.show(self.stageView);
			}});
		},
		routeCapture : function(){
			this.trigger("show", this.layout);
			this.layout.delegateEvents();
		}
	})


})