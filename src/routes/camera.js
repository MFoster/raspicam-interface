var RaspiCam = require("raspicam");
var debounce = require("debounce");
var fs = require("fs");

var CameraProxy = function(){
	this.responses = [];
	this.defaultConfig = {
		mode : "photo",
		timelapse : 10,
		output : "photo.jpg"
	};
};

CameraProxy.prototype = {
	started : false,
	mergeConfig : function(config){
		this.config = this.defaultConfig;
		for(var i in config){
			this.config[i] = config[i];
		}
		return this.config;
	},
	createCamera : function(config){
		return new RaspiCam(config);
	},
	isStarted : function(){
		return this.started;
	},
	capture : function(response, config){
		this.addResponse(response);
		if(!this.isStarted()){
			this.start(config);
		}
	},
	addResponse : function(response){
		this.responses.push(response);
	},
	start : function(config){
		this.camera = this.createCamera(this.mergeConfig(config));
		this.camera.on("exit", this.handleExit.bind(this));
		this.camera.start();
		this.started = true;
	},
	handleExit : function(cam){
		var name = this.config.name;
		this.responses.forEach(function(response){
			response.send({ message : "Captured image", name : name });
		});
		this.responses = []
		this.started = false;
	}

}

var cameraFilePath = __dirname + "/../public/images/camera/photo/";
var camera = new CameraProxy(); //new RaspiCam(cameraConfig);


exports.photo = function(request, response){
 	var name = new Date().getTime() + ".jpg";
	camera.capture(response, { output : cameraFilePath + name });
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