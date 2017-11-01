
require('dotenv').config();

var keystone = require('keystone');
var handlebars = require('express-handlebars');

keystone.init({
	'name': 'DMS',
	'brand': 'DMS',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('routes', require('./routes'));

if (keystone.get('env') == 'production'){
    keystone.set('cloudinary config', process.env.CLOUDINARY_URL);
    keystone.set('cookie secret', process.env.COOKIE_SECRET);
		keystone.set('mongo', process.env.MONGOLAB_BLACK_URI);
    //keystone.set('mailgun api key', process.env.MANDRILL_API_KEY);
}


keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
	calendar : 'Calendar',
	research : 'research'
});

keystone.set('signin logo','../images/logo.png');
keystone.set('signin url','/');

// if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
// 	console.log('----------------------------------------'
// 	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
// 	+ '\n----------------------------------------'
// 	+ '\nYou have opted into email sending but have not provided'
// 	+ '\nmailgun credentials. Attempts to send will fail.'
// 	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
// 	+ '\nset up your mailgun integration');
// }


keystone.start();
