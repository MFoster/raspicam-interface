define(["backbone"], function(Backbone){
	return Backbone.Model.extend({
		parse : function(response){
			var parts = response.name.split('.');
			var time = parseInt(parts[0], 10);
			var ext = parts[1],
			    date = new Date(time);

			return {
				year : date.getFullYear(),
				month : date.getMonth(),
				date : date.getDate(),
				day : date.getDay(),
				hour : date.getHours(),
				minute : date.getMinutes(),
				second : date.getSeconds(),
				millisecond : date.getMilliseconds(),
				time : date.getTime(),
				ext : ext,
				name : response.name
			};
		}
	});
})