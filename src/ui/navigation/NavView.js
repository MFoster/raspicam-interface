define(["marionette", "jquery"], function(Marionette, dom){
	return Marionette.ItemView.extend({
		template : "navigation/nav-list",
		constructor : function(options){
			Marionette.ItemView.prototype.constructor.apply(this, arguments);
			//dom("body").on("click")
		},
		events : {
			"click a" : "handleClick"
		},
		handleClick : function(e){
			var target = e.currentTarget;
			var url = target.getAttribute("href");
			if(url.indexOf("#") == 0){
				return false;
			}
			this.trigger("navigate", e, url);

		}
	})
})