const usernameField = '#monitoring_analytic.cartenz.com:id/etUsername'
const usernameValue = 'flocs'
const usernameValueInvalid = 'asdf'
const passwordField = '#monitoring_analytic.cartenz.com:id/etPassword'
const passwordValue = 'coflocs!'
const passwordValueInvalid = 'asdf!'
const loginButton = '#monitoring_analytic.cartenz.com:id/btnLogin'
const homeHeaderField = '//android.widget.TextView[@index=2]'
const homeHeaderValue = 'Tax Analytics'

Feature('Login');

Scenario('Login with Valid Credentials', (I) => {
	I.fillField(usernameField, usernameValue)
	I.fillField(passwordField, passwordValue)
	I.click(loginButton)
	I.see(homeHeaderValue, homeHeaderField)
});

Scenario('Login with Invalid Credentials', (I) => {
	I.fillField(usernameField, usernameValueInvalid)
	I.fillField(passwordField, passwordValueInvalid)
	I.click(loginButton)
	I.dontSee(homeHeaderField)
});