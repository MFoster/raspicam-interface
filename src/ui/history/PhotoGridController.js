define(["marionette", "backbone", "src/ui/history/PhotoGridView", "src/ui/history/PhotoGridLayout", "src/ui/layout/PhotoStageView"], 
	function(Marionette, Backbone, PhotoGridView, PhotoGridLayout, PhotoStageView){

	return Marionette.Controller.extend({
		constructor : function(options){
			this.collection = options.collection
			this.gridView = new PhotoGridView({ collection : this.collection });
			this.layout = new PhotoGridLayout();
			this.stageView = new PhotoStageView();
			var self = this;
			this.layout.once("render", function(){
				self.collection.fetch();
			});
			this.collection.on("sync", this.gridView.render);
			this.layout.on("grid:item:click", this.handleGridClick.bind(this));
			this.layout.on("grid:stage:close", this.handleStageClose.bind(this));
		},
		handleGridClick : function(e, name){
			this.trigger("grid:item:click", e, name);
		},
		handleStageClose : function(e){
			this.trigger("grid:stage:close", e);
		},
		displayGrid : function(){
			this.trigger("show", this.layout);
			this.layout.delegateEvents();
			this.layout.content.show(this.gridView);
			/*
			if(this.gridRendered && this.layout.content.$el){
				this.layout.content.open(this.gridView);
			}
			else{
				this.layout.content.show(this.gridView);
				this.gridRendered = true;
			}
			*/
		},
		displayImage : function(name){
			var image = this.collection.findByName(name);
			this.stageView.model = image;
			this.layout.content.show(this.stageView);
		},
		manageLayout : function(){
			this.displayGrid();
		},
		routeGrid : function(){
			this.displayGrid();
		},
		routeStage : function(name){
			this.displayImage(name);
		}

	})	


});