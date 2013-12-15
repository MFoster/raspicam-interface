define(["marionette", "backbone", "./PhotoCollection", "./PhotoListView", "./PhotoListLayout"], 
	function(Marionette, Backbone, PhotoCollection, PhotoListView, PhotoHistoryLayout){
	return Marionette.Controller.extend({
		constructor : function(options){
			var self = this;
			this.collection = new PhotoCollection();
			this.layout = new PhotoListLayout();
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