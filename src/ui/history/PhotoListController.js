define(["marionette", "backbone", "./PhotoListCollection", "./PhotoListView", "./PhotoHistoryLayout"], 
	function(Marionette, Backbone, PhotoListCollection, PhotoListView, PhotoHistoryLayout){
	return Marionette.Controller.extend({
		constructor : function(options){
			var self = this;
			this.collection = new PhotoListCollection();
			this.layout = new PhotoHistoryLayout();
			this.listView = new PhotoListView({ collection : this.collection });
			this.layout.on("photo:click", this.handlePhotoClick.bind(this));
			this.layout.on("render", function(){
				self.layout.list.show(self.listView);
			});
			this.layout.once("render", function(){
				self.collection.fetch();
			})
			this.collection.on('sync', this.layout.render);
		},
		handlePhotoClick : function(e){
			this.layout.ui.photo.attr("src", "/images/camera/photo/" + e.target.getAttribute("data-image-name"));
		}
	});
})