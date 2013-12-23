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
			if(e.currentTarget.getAttribute("href").search(/^http/i) == -1){
				return false;
			}
		}
	})

});