define(["marionette", "backbone", "./PhotoListView", "./PhotoListLayout", "src/ui/layout/PhotoStageView", "underscore", "jquery"], 
	function(Marionette, Backbone, PhotoListView, PhotoListLayout, PhotoStageView, util, dom){
	return Marionette.Controller.extend({
		constructor : function(options){
			var self = this;
			this.collection = options.collection;
			this.layout = new PhotoListLayout();
			this.listView = new PhotoListView({ collection : options.collection });
			//this.stretchView = new StretchView();
			this.stageView = new PhotoStageView();

			this.layout.on("photo:click", this.handlePhotoClick.bind(this));
			this.layout.on("render", function(){
				self.layout.list.show(self.listView);
				if(self.stageView.model){
					self.layout.image.show(self.stageView);
				}
			});
			this.listView.on("render", function(){
				self.listView.$el.css("height", "0px");

				util.delay(function(){
					var value = self.listView.$el.parent().css("height");
					self.listView.$el.css("height", value);
				}, 200);
				
			});
			this.layout.once("render", function(){
				self.collection.fetch();
			})
			this.collection.on('sync', function(){
				self.stageView.model = self.collection.first();
				self.layout.render();
			});
		},
		handlePhotoClick : function(e){
			var target = e.currentTarget;
			var name = target.getAttribute('data-image-name');
			this.listView.$el.find(".active").removeClass("active");
			dom(target).parent("li").addClass("active");
			this.trigger("list:item:click", e, name);
		},
		displayImage : function(name){
			if(!this.layout.el.parentNode){
				this.trigger("show", this.layout);
			}
			var model = this.collection.findByName(name);
			if(model){
				this.stageView.model = model;
				this.layout.image.show(this.stageView);
			}
			else{
				var self = this;
				this.collection.on("sync", function(){
					var model = self.collection.findByName(name);
					self.stageView.model = model;
					self.layout.image.show(self.stageView);
				})
			}
		},
		routeList : function(){
			this.trigger("show", this.layout);
			if(this.stageView.model){
				var self = this;
				this.layout.once("render", function(){
					self.layout.image.show(self.stageView);
				});
			}
			this.layout.delegateEvents();
		},
		routeListImage : function(name){
			this.displayImage(name);
		}
	});
})