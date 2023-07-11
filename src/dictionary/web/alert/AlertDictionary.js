class AlertDictionary {
    static #LOGIN_FAILED = "Failed To Login Due To Incorrect Credentials!";
    static #AUTHENTICATE = "Please Login First!";

    static get LOGIN_FAILED() {
        return this.#LOGIN_FAILED;
    }

    static get AUTHENTICATE() {
        return this.#AUTHENTICATE;
    }
}

module.exports = AlertDictionary;