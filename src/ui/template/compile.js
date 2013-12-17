define(function(){

this["compiled"] = this["compiled"] || {};

this["compiled"]["capture/capture-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="raspicam-interface-photo">\n\t<div class="panel panel-default">\n\t\t<div class="panel-body">\n\t\t\t<div class="photo-stage">\n\t\t    <div><img src="/images/camera_shutter.png" alt="Raspberry Pi Camera Image" id="main-image"/></div>\n\t  \t</div>\n\t\t</div>\n\t\t<div class="panel-footer">\n\t\t\t<form action="/capture"><input tabindex="0" type="submit" value="Capture"></form>\n\t\t</div>\n\t</div>\t\n</div>';

}
return __p
};

this["compiled"]["core/photo-recent-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="photo-recent-layout">\n\t<h2>Latest Capture</h2>\n\t<div class="photo-stage"></div>\n</div>';

}
return __p
};

this["compiled"]["history/photo-grid-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="photo-grid-layout">\n\t<div class="photo-content"></div>\n</div>';

}
return __p
};

this["compiled"]["history/photo-grid"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="photo-grid">\n\t';
 _.each(items, function(item){ ;
__p += '\n\t<div class="photo-grid-item" data-photo-name="' +
((__t = ( item.name )) == null ? '' : __t) +
'">\n\t\t<div>\n\t\t\t<img src="' +
((__t = ( getImageUrl(item.name) )) == null ? '' : __t) +
'"/>\n\t\t\t<h4>' +
((__t = ( item.date )) == null ? '' : __t) +
'/' +
((__t = ( item.month + 1 )) == null ? '' : __t) +
'/' +
((__t = ( item.year )) == null ? '' : __t) +
' ' +
((__t = ( getMeridianHour(item.hour) )) == null ? '' : __t) +
':' +
((__t = ( zeroPad(item.minute) )) == null ? '' : __t) +
':' +
((__t = ( zeroPad(item.second) )) == null ? '' : __t) +
' ' +
((__t = ( getMeridianIcon(item.hour) )) == null ? '' : __t) +
'</h4>\n\t\t</div>\n\t\t\n\t</div>\n\t';
 }); ;
__p += '\n</div>';

}
return __p
};

this["compiled"]["history/photo-list-layout"] = function(obj) {
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
 _.each(items, function(item){  ;
__p += '\n\t<li><a href="#" data-image-name="' +
((__t = ( item.name )) == null ? '' : __t) +
'">' +
((__t = ( getLongDay(item.day) )) == null ? '' : __t) +
', ' +
((__t = ( getLongMonth(item.month) )) == null ? '' : __t) +
' ' +
((__t = ( item.date )) == null ? '' : __t) +
'' +
((__t = ( getDateSuffix(item.date) )) == null ? '' : __t) +
' ' +
((__t = ( item.year )) == null ? '' : __t) +
' ' +
((__t = ( zeroPad(item.hour) )) == null ? '' : __t) +
':' +
((__t = ( zeroPad(item.minute) )) == null ? '' : __t) +
'</a></li>\n\t';
 }); ;
__p += '\n</ul>';

}
return __p
};

this["compiled"]["history/photo-stage"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="photo-stage">\n\t<div class="header">\n\t\t<span class="input-group-btn">\n\t\t\t\n\t\t<button data-action="close">Done</button>\n\t\t</span>\n\t\t<h4>\n\t\t\t' +
((__t = ( getLongDay(day) )) == null ? '' : __t) +
', ' +
((__t = ( getLongMonth(month) )) == null ? '' : __t) +
' ' +
((__t = ( date )) == null ? '' : __t) +
'' +
((__t = ( getDateSuffix(date) )) == null ? '' : __t) +
' ' +
((__t = ( year )) == null ? '' : __t) +
' ' +
((__t = ( zeroPad(hour) )) == null ? '' : __t) +
':' +
((__t = ( zeroPad(minute) )) == null ? '' : __t) +
'\n\t\t</h4>\n\n\t\t\n\t</div>\n\t<div class="photo-center-stage">\n\t\t<img src="' +
((__t = ( getImageUrl(name) )) == null ? '' : __t) +
'" alt="" id="photo-primary"/>\n\t</div>\n</div>';

}
return __p
};

this["compiled"]["layout/full-width"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header>\n\t<nav></nav>\n</header>\n<section id="content"></section>\n<footer>\n\t<ul>\n\t\t<li><a href="#">One</a></li>\n\t\t<li><a href="#">Two</a></li>\n\t\t<li><a href="#">Three</a></li>\n\t</ul>\n</footer>\n';

}
return __p
};

this["compiled"]["navigation/nav-list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul>\n\t<li><a href="/photo/capture">Capture</a></li>\n\t<li class="dropdown">\n\t\t<a href="/photo/history">History <span></span></a>\n\t\t<ul class="dropdown-menu">\n\t\t\t<li><a href="/photo/history/grid">Grid</a></li>\n\t\t</ul>\n\t</li>\n\n</ul>';

}
return __p
};

  return this["compiled"];

});