var basepath = require('path').dirname('require.main.filename');
module.exports = {
	camera: {
		cameras: [
			{ desc: 'photo', name:'photo', mode: 'photo', output : basepath + '/out-camera' + '/snaps'},
			{ desc: 'lapse', name:'lapse', mode: 'timelapse', output : basepath + '/out-camera' + '/tlapse'},
			{ desc: 'video', name:'video', mode: 'video', output : basepath + '/out-camera' + '/video'}
		]
	}


}
