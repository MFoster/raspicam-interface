define(["marionette", "backbone", "src/ui/history/PhotoGridView", "src/ui/history/PhotoGridLayout", "src/ui/layout/PhotoStageView", "src/ui/layout/PagerView"], 
	function(Marionette, Backbone, PhotoGridView, PhotoGridLayout, PhotoStageView, PagerView){

	return Marionette.Controller.extend({
		constructor : function(options){
			this.collection = options.collection;
			this.gridCollection = new Backbone.Collection();
			this.gridView = new PhotoGridView({ collection : this.gridCollection });
			this.layout = new PhotoGridLayout();
			this.stageView = new PhotoStageView();
			this.pager = new PagerView({ masterCollection : options.collection, 
																	pageCollection : this.gridCollection, 
																	size : 9, 
																	index : 0 });

			var self = this;
			this.layout.once("render", function(){
				self.collection.fetch();
			});
			this.gridCollection.on("reset", this.gridView.render);
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
			var self = this;
			this.layout.once("render", function(){
				self.layout.content.show(self.gridView);
				self.layout.pager.show(self.pager);
				self.layout.delegateEvents();
			});
			this.trigger("show", this.layout);
		},
		displayImage : function(name){
			var image = this.collection.findByName(name);
			this.stageView.model = image;
			this.layout.content.show(this.stageView);
			this.layout.pager.close();
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