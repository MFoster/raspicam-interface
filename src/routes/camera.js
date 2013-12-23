var RaspiCam = require("raspicam");
var debounce = require("debounce");
var fs = require("fs");
var cameraConfig = {
	mode : "photo",
	timelapse : 100
};
var debounceTime = 500;

var cameraFilePath = __dirname + "/../public/images/camera/photo/";
var camera = new RaspiCam(cameraConfig);
var started = false,
		name = false;
camera.on("exit", function(){
	started = false;
})
exports.photo = function(request, response){
	camera.once("exit", function(){
		response.send({ message : "Successfully captured image", name : name });
	});

	if(started){
		return false;
	}
 	name = new Date().getTime() + ".jpg";
	camera.set("output", cameraFilePath + name);
	camera.start();
}

exports.photoHistory = function(request, response){
	response.render("photoHistory");
}

exports.photoHistoryList = function(request, response){
	var ret = [];
	fs.readdir(cameraFilePath, function(err, files){
		files.forEach(function(file){
			if(file.search(/\.jpg$/) > -1){
				ret.unshift({ name : file });
			}
		})

    //response.writeHead(200, { 'Content-Type': 'application/json' });
		response.send(ret);
	});
}