var RaspiCam = require("raspicam");
var debounce = require("debounce");
var fs = require("fs");
var cameraConfig = {
	mode : "photo",
	timelapse : 100
};
var debounceTime = 500;

var cameraFilePath = __dirname + "/../public/images/camera/photo/";

exports.photo = function(request, response){
	var name = new Date().getTime() + ".jpg";
	cameraConfig.output = cameraFilePath + name;
	var camera = new RaspiCam(cameraConfig);
	camera.on("change", debounce(camera.stop, debounceTime));
	camera.on("exit", function(){
		response.send({ message : "Successfully captured image", name : name });
	});
	camera.start();
}

exports.photoHistory = function(request, response){
	response.render("photoHistory");
}

exports.photoHistoryList = function(request, response){
	var ret = [];
	fs.readdir(cameraFilePath, function(err, files){
		files.forEach(function(file){
			ret.push({ name : file });
		})

    //response.writeHead(200, { 'Content-Type': 'application/json' });
		response.send(ret);
	});
}