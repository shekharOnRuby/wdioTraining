var webdriver = require('webdriverio');

var options = {
	desiredCapabilities: {
		browserName: 'firefox'
	}
};

webdriver
	.remote(options)
	.init()
	.url('http://www.google.com')
	.getTitle().then(function(title){
		console.log('Title was: '+ title);
	})
	.end()
	.catch(function(err){
		console.log(err);
	});

