define(["marionette"], function(Marionette){
	return Marionette.Layout.extend({
		template : "history/photo-list-layout",
		regions : {
			"list" : ".photo-list",
			"image" : ".photo-image",
		},
		events : {
			"click .photo-list a" : "handlePhotoListClick"
		},
		handlePhotoListClick : function(e){
			try{
				this.trigger("photo:click", e, this);
			}
			catch(e){

			}
			return false;
		}
	})
})