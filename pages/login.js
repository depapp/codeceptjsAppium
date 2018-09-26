const I = actor();

module.exports = {

    // insert your locators and methods here
    field: {
        usernameField: '#monitoring_analytic.cartenz.com:id/etUsername',
        passwordField: '#monitoring_analytic.cartenz.com:id/etPassword',
        homeHeaderField: '//android.widget.TextView[@index=2]'
    },

    button: {
        loginButton: '#monitoring_analytic.cartenz.com:id/btnLogin'
    },

    value: {
        usernameValue: 'flocs',
        usernameValueInvalid: 'asdf',
        passwordValue: 'coflocs!',
        passwordValueInvalid: 'asdf!',
        homeHeaderValue: 'Tax Analytics'
    }
}