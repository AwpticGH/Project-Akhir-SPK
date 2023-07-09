class WebVariableDictionary {
    static #USERNAME = "supervisor-username";
    static #PASSWORD = "supervisor-password";
    static #DIVISION_NAME = "division-name";
    static #DIVISION_UID = "division-uid";

    static get USERNAME() {
        return this.#USERNAME;
    }

    static get PASSWORD() {
        return this.#PASSWORD;
    }

    static get DIVISION_NAME() {
        return this.#DIVISION_NAME;
    }

    static get DIVISION_UID() {
        return this.#DIVISION_UID;
    }
}

module.exports = WebVariableDictionary;