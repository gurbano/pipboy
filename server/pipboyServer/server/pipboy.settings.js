var basepath = require('path').dirname('require.main.filename');
module.exports = {
	camera: {
		cameras: [
			{ name: 'video', desc:'IrCamera in video mode', mode: 'video', output : basepath + '/out-camera' + '/video'},
			{ name: 'lapse', desc:'Timelapse Camera', mode: 'timelapse', output : basepath + '/out-camera' + '/tlapse'},
			{ name: 'photo', desc:'IR Photo Camera', mode: 'photo', output : basepath + '/out-camera' + '/snaps/snap.jpg'}
		]
	}


}
