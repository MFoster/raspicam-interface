define(["marionette"], function(Marionette){

	return Marionette.Layout.extend({
		template : "layout/full-width",
		regions : {
			nav : "nav",
			content : "#content",
			footer : "footer"
		},
		events : {
			"click a" : "handleClick"
		},
		handleClick : function(e){
			return false;
		}
	})

});