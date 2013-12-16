define(["marionette", "./NavView", "./NavRouter"], function(Marionette, NavView, NavRouter){
	return Marionette.Controller.extend({
		constructor : function(){

			this.view = new NavView();
			this.router = new NavRouter();

			this.view.on("navigate", this.handleNavigate.bind(this));

		},
		handleNavigate : function(e, url){
			this.router.navigate(url, { trigger : true });
		}
	})
})