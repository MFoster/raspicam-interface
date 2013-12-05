var RaspiCam = require("raspicam");
var debounce = require("debounce");
var cameraConfig = {
	mode : "photo",
	timelapse : 100,
	debounceTime : 500
};

var cameraFilePath = __dirname + "/../public/images/camera/photo/";

exports.photo = function(request, response){
	var name = new Date().getTime() + ".jpg";
	cameraConfig.output = cameraFilePath + name;
	var camera = new RaspiCam(cameraConfig);
	camera.on("change", debounce(camera.stop, cameraConfig.debounceTime));
	camera.on("exit", function(){
		response.send({ message : "Successfully captured image", name : name });
	});
	camera.start();
}