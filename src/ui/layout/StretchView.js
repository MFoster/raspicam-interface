define(["backbone", "window", "jquery", "underscore"], function(Backbone, window, dom, util){
	return Backbone.View.extend({
		debounceTime : 200,
		constructor : function(options){
			Backbone.View.prototype.initialize.apply(this, arguments);
			dom(window).resize(util.debounce(this.handleResize.bind(this), this.debounceTime));
		},
		handleResize : function(e){
			this.render();
		},
		render : function(){
			if(!this.$el){
				return false;
			}
			var height = this.$el.parent().attr("height");
			this.$el.attr("height", height + "px");
		},
		remove : function(){
			this.$el = null;
			return this;
		}
	})
})