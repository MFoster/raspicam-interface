define(["marionette", "./PhotoListView"], function(Marionette, PhotoListView){

	return Marionette.CollectionView.extend({
		itemView : PhotoListView
	});



});