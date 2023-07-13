class AlertDictionary {
    static #LOGIN_FAILED = "Failed To Login Due To Incorrect Credentials!";
    static #AUTHENTICATE = "Please Login First!";
    static #UPDATE_SUCCESS = "Successfully Updated Password!";
    static #UPDATE_FAILED = "Failed To Update Password, Please Try Again!";
    static #PASSWORD_CONFIRMATION_FAILED = "The Passwords Entered Does Not Match!";
    static #PASSWORD_EQUAL = "New Password Can Not Be The Same As The Old One!";

    static get LOGIN_FAILED() {
        return this.#LOGIN_FAILED;
    }

    static get AUTHENTICATE() {
        return this.#AUTHENTICATE;
    }

    static get UPDATE_SUCCESS() {
        return this.#UPDATE_SUCCESS;
    }

    static get UPDATE_FAILED() {
        return this.#UPDATE_FAILED;
    }

    static get PASSWORD_CONFIRMATION_FAILED() {
        return this.#PASSWORD_CONFIRMATION_FAILED;
    }

    static get PASSWORD_EQUAL() {
        return this.#PASSWORD_EQUAL;
    }
}

module.exports = AlertDictionary;