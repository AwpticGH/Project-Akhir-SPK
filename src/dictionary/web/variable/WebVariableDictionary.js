class WebVariableDictionary {
    static #USERNAME = "client-username";
    static #PASSWORD = "client-password";
    static #DIVISION_NAME = "division-name";
    static #DIVISION_UID = "division-uid";
    static #EMPLOYEE_FIRST_NAME = "employee-first-name";
    static #EMPLOYEE_LAST_NAME = "employee-last-name";

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

    static get EMPLOYEE_FIRST_NAME() {
        return this.#EMPLOYEE_FIRST_NAME;
    }

    static get EMPLOYEE_LAST_NAME() {
        return this.#EMPLOYEE_LAST_NAME;
    }
}

module.exports = WebVariableDictionary;