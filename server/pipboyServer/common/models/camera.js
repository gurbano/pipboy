var mkdirp = require('mkdirp');
var settings = require('../../server/pipboy.settings').camera;
var RaspiCam = require("raspicam");

module.exports = function(Camera) {	
	Camera.cameras = {};
	Camera.bootstrap = function (cb) {
		/*Create camera and save into db*/
		for (var i = settings.cameras.length - 1; i >= 0; i--) {
			var camSetting = settings.cameras[i];			
			Camera.cameras[camSetting.name] = new RaspiCam(camSetting);
			console.log(Camera.cameras[camSetting.name]);
			mkdirp(camSetting.output);
			Camera.create({
				"desc": camSetting.desc,
				"name": camSetting.name,
				"metadata": Camera.cameras[camSetting.name],
				"enabled": true,
				"started": false,
				"mode": camSetting.mode,
				"output": camSetting.output
			}, function (err, cam) {
				if (err){
					console.error(err);
				}else{
					//console.log('created',cam);
				}				
			});
		};		
		cb(null, {status: 'OK' });
	}
	Camera.remoteMethod(
        'bootstrap', 
        {
        	returns: {arg: 'result', type: 'object'}
    	}
    );

	/*photos - take a pic*/
	Camera.photo = function (cb) {
		var cam = Camera.cameras['photo'];
		cam.start(); //take photo
		cb(null, {cameras:cameras,  status: 'OK' });		
	}     
    Camera.remoteMethod(
        'scan', 
        {
        	returns: {arg: 'result', type: 'object'}
    	}
    );


	/*SCAN - SCAN CAMERAS*/
	Camera.scan = function (cb) {
		cb(null, {cameras:cameras,  status: 'OK' });		
	}     
    Camera.remoteMethod(
        'scan', 
        {
        	returns: {arg: 'result', type: 'object'}
    	}
    );

};
