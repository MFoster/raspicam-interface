define(["marionette", "./CaptureLayout", "jquery", "src/ui/layout/PhotoStageView", "src/ui/core/PhotoModel"], 
	function(Marionette, CaptureLayout, jQuery, StageView, PhotoModel){

	return Marionette.Controller.extend({
		constructor : function(options){
			Marionette.Controller.prototype.constructor.apply(this, arguments);
			this.layout = new CaptureLayout();
			this.stageModel = options.collection.first() || new PhotoModel();
			this.stageModel.url = "/capture";
			this.stageView = new StageView({ model : this.stageModel });
			this.layout.on("submit", this.handleSubmit.bind(this));
			this.layout.on("render", this.handleLayoutRender.bind(this));
			this.stageModel.on("change", this.stageView.render);
		},
		handleLayoutRender : function(layout){
			if(this.stageView.model){
				this.layout.stage.show(this.stageView);
			}
		},
		handleSubmit : function(e){
			var self = this;
			this.stageModel.fetch({ success : function(){
				self.layout.stage.show(self.stageView);
				self.trigger("capture", self.stageModel.clone());
			}});
		},
		routeCapture : function(){
			this.trigger("show", this.layout);
			this.layout.delegateEvents();
		}
	})


})