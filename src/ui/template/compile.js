define(function(){

this["compiled"] = this["compiled"] || {};

this["compiled"]["history/photo-history"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="photo">\n\t<img src="/images/camera_shutter.png" alt="" id="photo-primary">\n</div>';

}
return __p
};

this["compiled"]["history/photo-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="photo-history-layout">\n\t<div class="photo-list"></div>\n\t<div class="photo-image"><img src="/images/camera_shutter.png"/></div>\n</div>';

}
return __p
};

this["compiled"]["history/photo-list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul>\n\t';
 _.each(items, function(item){ console.log("inside each %o", item); ;
__p += '\n\t<li><a href="#" data-image-name="' +
((__t = ( item.name )) == null ? '' : __t) +
'">' +
((__t = ( item.year )) == null ? '' : __t) +
'</a></li>\n\t';
 }); ;
__p += '\n</ul>';

}
return __p
};

  return this["compiled"];

});