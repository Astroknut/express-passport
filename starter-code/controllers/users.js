var passport = require("passport")

// GET /signup
function getSignup(request, response) {
}

// POST /signup
function postSignup(request, response,next) {
	//Save a new user
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return signupStrategy(request,response,next);
}

// GET /login
function getLogin(request, response) { 
}

// POST /login 
function postLogin(request, response) {
}

// GET /logout
function getLogout(request, response) {
}

// Restricted page
function secret(request, response){
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
}