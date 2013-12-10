define(["marionette"], function(Marionette){
	return Marionette.Layout.extend({
		template : "history/photo-layout",
		regions : {
			"list" : ".photo-list",
			"image" : ".photo-image",
		},
		ui : {
			"photo" : ".photo-image img"
		},
		events : {
			"click .photo-list a" : "handlePhotoListClick"
		},
		handlePhotoListClick : function(e){
			this.trigger("photo:click", e, this);
		}
	})
})