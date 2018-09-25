Feature('Login');

Scenario('Login with Valid Credentials', (I, loginPage) => {
	I.fillField(loginPage.field.usernameField, loginPage.value.usernameValue)
	I.fillField(loginPage.field.passwordField, loginPage.value.passwordValue)
	I.click(loginPage.button.loginButton)
	I.see(loginPage.value.homeHeaderValue, loginPage.field.homeHeaderField)
});

Scenario('Login with Invalid Credentials', (I, loginPage) => {
	I.fillField(loginPage.field.usernameField, loginPage.value.usernameValueInvalid)
	I.fillField(loginPage.field.passwordField, loginPage.value.passwordValueInvalid)
	I.click(loginPage.button.loginButton)
	I.dontSee(loginPage.field.homeHeaderField)
});