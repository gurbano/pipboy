var async = require('async');

var _users = [
	{email: 'g.urbano@gmail.com', password: 'bar'}
]

var _apps = [{
		  "code": "HUN_SERVER",
		  "version": {'min': 1, 'maj':0},
		  "release": new Date(),
		  "id": 1
		}];



module.exports = function(app, cb) { //app is injected by LoopBack
	console.log('---------- BOOTSTRAP DB DATA');
	async.series([
		function(done) {
	      app.models.User.create(_users[0], function(err, p) {
	        _users[0] = p;
	        done(err, p);
	      });
	    }
		]
	 	, function(err) {
	 		if (err){
	 			console.error(err);
	 		}else{
	 			console.log('BOOTSTRAP COMPLETED--------');
	 			cb();
	 		}
	  });

};