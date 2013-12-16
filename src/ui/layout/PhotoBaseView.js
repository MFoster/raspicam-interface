define(["marionette"], function(Marionette){
	var longMonth  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortDay   = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		  longDay    = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		  shortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		  suffix     = ["st", "nd", "rd", "th"],
		  prefix     = "/images/camera/photo/";
	return Marionette.ItemView.extend({
		templateHelpers : {
			getLongMonth : function(num){
				return longMonth[num];
			},
			getShortMonth : function(num){
				return shortMonth[num];
			},
			getLongDay : function(num){
				return longDay[num];
			},
			getShortDay : function(num){
				return shortDay[num];
			},
			zeroPad : function(num){
				return num >= 10 ? num : '0' + num;
			},
			getDateSuffix : function(num){
				var value = Math.min(num % 10, 3);
				return suffix[value];
			},
			getMeridianHour : function(num){
				return (num % 12 == 0) ? 12 : num % 12;
			},
			getMeridianIcon : function(num){
				return (num >= 12) ? 'PM' : 'AM';
			},
			getImageUrl : function(name){
				return prefix + name;
			}
		},
	});
});
 