define(["marionette"], function(Marionette){
	return Marionette.Layout.extend({
		template : "core/photo-recent-layout",
		regions : {
			"stage" : ".photo-stage"
		}
	});
})