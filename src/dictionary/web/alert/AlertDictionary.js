class AlertDictionary {
    static #LOGIN_FAILED = "Failed To Login Due To Incorrect Credentials!";

    static get LOGIN_FAILED() {
        return this.#LOGIN_FAILED;
    }
}

module.exports = AlertDictionary;